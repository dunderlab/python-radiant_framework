import sys
from http.server import BaseHTTPRequestHandler
from urllib.parse import urlparse
import json
import os
import mimetypes
from collections import defaultdict

BASE_DIR = os.path.dirname(__file__)


STATIC_DIRS = [
    os.path.join(BASE_DIR, "static"),
    os.path.join(BASE_DIR, "static", "modules"),
    sys.path[0],
]

from string import Template
import os

TEMPLATES_DIR = os.path.join(BASE_DIR, "templates")


def render_template(name, context):
    path = os.path.join(TEMPLATES_DIR, name)

    with open(path, "r", encoding="utf-8") as f:
        template = Template(f.read())

    return template.safe_substitute(defaultdict(str, context)).encode("utf-8")


class RequestHandler(BaseHTTPRequestHandler):

    def _send(self, status=200, body=None, content_type="text/plain"):
        self.send_response(status)
        self.send_header("Content-Type", content_type)
        self.end_headers()
        if body:
            self.wfile.write(body)

    def _serve_file(self, filepath):
        if not os.path.isfile(filepath):
            self._send(404, b"Not Found")
            return

        content_type, _ = mimetypes.guess_type(filepath)
        content_type = content_type or "application/octet-stream"

        with open(filepath, "rb") as f:
            self._send(200, f.read(), content_type)

    def do_GET(self):
        parsed = urlparse(self.path)

        # API
        if parsed.path == "/health":
            self._send(200, json.dumps({"status": "ok"}).encode(), "application/json")
            return

        # HTML principal

        if parsed.path == "/":
            html = render_template(
                "index.html",
                {
                    "domain": "",
                    "brython_version": "3.13.1",
                    "debug_level": "0",
                    "path": ["."],
                    "root_file": os.path.split(sys.argv[0])[-1].replace(".py", ""),
                    "mock_imports": [],
                    **self.server.config,
                },
            )
            self._send(200, html, "text/html")
            return

        requested_path = parsed.path.lstrip("/")

        for static_dir in STATIC_DIRS:
            base = os.path.abspath(static_dir)
            file_path = os.path.abspath(os.path.join(base, requested_path))

            # Seguridad: prevenir directory traversal
            if not file_path.startswith(base + os.sep):
                continue

            if os.path.isfile(file_path):
                self._serve_file(file_path)
                return

        self._send(404, b"Not Found")
