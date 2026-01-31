from http.server import ThreadingHTTPServer
from radiant.server import RequestHandler
from radiant.fake import *


class BythonServer:

    @classmethod
    def serve(cls, ip="localhost", port=8000, **kwargs):
        """"""
        server = ThreadingHTTPServer((ip, port), RequestHandler)
        server.config = {"class_name": cls.__name__, **kwargs}
        print(f"Server running on http://{ip}:{port}")
        server.serve_forever()
