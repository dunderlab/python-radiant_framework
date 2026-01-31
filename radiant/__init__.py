from http.server import ThreadingHTTPServer
from typing import Any, Dict, Type, Callable

from radiant.server import RequestHandler
from radiant.fake import *

from functools import wraps
import json


class BythonServer:
    """Minimal threaded HTTP server wrapper with shared configuration."""

    routes = {}

    @classmethod
    def serve(
        cls: Type["BythonServer"],
        ip: str = "localhost",
        port: int = 8000,
        **kwargs: Any,
    ) -> None:
        """
        Start a threaded HTTP server instance.

        The server attaches a configuration dictionary containing the
        calling class name and any extra keyword arguments. This allows
        the request handler to access runtime metadata through
        ``server.config``.

        Parameters
        ----------
        ip : str, optional
            Hostname or IP address to bind, by default "localhost".
        port : int, optional
            Listening TCP port, by default 8000.
        **kwargs : Any
            Additional configuration values stored in ``server.config``.

        Raises
        ------
        ValueError
            If the port is not a positive integer.
        """
        if not isinstance(port, int) or port <= 0:
            raise ValueError("port must be a positive integer")

        server = ThreadingHTTPServer((ip, port), RequestHandler)

        server.config: Dict[str, Any] = {
            "class_name": cls.__name__,
            **kwargs,
        }

        server.routes = cls.routes

        print(f"Server running on http://{ip}:{port}")

        try:
            server.serve_forever()
        except KeyboardInterrupt:
            # Shutdown to prevent hanging sockets
            server.shutdown()
            server.server_close()

    @classmethod
    def get(cls, route) -> Callable:
        """"""

        def decorator(fn):
            cls.routes[route] = fn

            @wraps(fn)
            def wrapper(*args, **kwargs):
                return fn(*args, **kwargs)

            return wrapper

        return decorator


def json_response(data: Any, status=200) -> dict:
    return {
        "status": status,
        "body": json.dumps(data).encode("utf-8"),
        "content_type": "application/json",
    }


#
# def html_response(body: str, status=200) -> dict:
#     return {
#         "status": status,
#         "body": body.encode("utf-8"),
#         "content_type": "text/html",
#     }
