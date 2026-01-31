import json
import mimetypes
import os
import sys
from collections import defaultdict
from http.server import BaseHTTPRequestHandler
from string import Template
from typing import Any, Dict, Iterable, Optional
from urllib.parse import urlparse, parse_qs


BASE_DIR: str = os.path.dirname(__file__)

STATIC_DIRS: list[str] = [
    os.path.join(BASE_DIR, "static"),
    os.path.join(BASE_DIR, "static", "modules"),
    sys.path[0],
]

TEMPLATES_DIR: str = os.path.join(BASE_DIR, "templates")


def render_template(name: str, context: Dict[str, Any]) -> bytes:
    """
    Render an HTML template using string substitution.

    Parameters
    ----------
    name : str
        Template filename.
    context : dict
        Template variables.

    Returns
    -------
    bytes
        Rendered template encoded as UTF-8.
    """
    path = os.path.join(TEMPLATES_DIR, name)

    with open(path, "r", encoding="utf-8") as file:
        template = Template(file.read())

    # Default missing keys to empty strings
    rendered = template.safe_substitute(defaultdict(str, context))
    return rendered.encode("utf-8")


def parse_query(path):
    """
    Normaliza el query string:
    - key=value      -> key: value
    - key=a&key=b    -> key: [a, b]
    """
    parsed = urlparse(path)
    raw = parse_qs(parsed.query, keep_blank_values=True)

    normalized = {}
    for key, values in raw.items():
        if len(values) == 1:
            normalized[key] = values[0]
        else:
            normalized[key] = values

    return normalized


class RequestHandler(BaseHTTPRequestHandler):
    """
    Minimal HTTP request handler with static file and template support.
    """

    server_version = "SimplePythonHTTP/1.0"

    def _send(
        self,
        status: int = 200,
        body: Optional[bytes] = None,
        content_type: str = "text/plain",
    ) -> None:
        """
        Send an HTTP response.
        """
        self.send_response(status)
        self.send_header("Content-Type", content_type)

        if body is not None:
            self.send_header("Content-Length", str(len(body)))

        self.end_headers()

        if body is not None:
            self.wfile.write(body)

    def _serve_file(self, filepath: str) -> None:
        """
        Serve a static file.
        """
        if not os.path.isfile(filepath):
            self._send(404, b"Not Found")
            return

        content_type, _ = mimetypes.guess_type(filepath)
        content_type = content_type or "application/octet-stream"

        with open(filepath, "rb") as file:
            data = file.read()

        self._send(200, data, content_type)

    def do_GET(self) -> None:
        """
        Handle HTTP GET requests.
        """
        parsed = urlparse(self.path)
        query = parse_query(self.path)

        # ---------------- API ---------------- #

        if route := self.server.routes.get(parsed.path):
            self._send(**route(**query))
            return

        # ---------------- HTML ---------------- #

        if parsed.path == "/":
            html = render_template(
                "index.html",
                {
                    "domain": "",
                    "brython_version": "3.13.1",
                    "debug_level": "0",
                    "path": ["."],
                    "root_file": os.path.splitext(os.path.basename(sys.argv[0]))[0],
                    "mock_imports": [],
                    # PSS: Explicitly merged server config
                    **getattr(self.server, "config", {}),
                },
            )
            self._send(200, html, "text/html")
            return

        # ---------------- STATIC FILES ---------------- #

        requested_path = parsed.path.lstrip("/")

        for static_dir in STATIC_DIRS:
            base = os.path.abspath(static_dir)
            candidate = os.path.abspath(os.path.join(base, requested_path))

            # Hardened directory traversal prevention
            if not candidate.startswith(base + os.sep):
                continue

            if os.path.isfile(candidate):
                self._serve_file(candidate)
                return

        self._send(404, b"Not Found")
