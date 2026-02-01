# Base class that binds the Python server with the Brython frontend
from radiant import BrythonServer


class App(BrythonServer):
    # Application entry point.
    # Inherits the Radiant runtime that exposes HTML primitives and the browser document.

    def __init__(self):
        self.document <= self.html.H1("Radiant · Python Runtime Bridge")
        self.document <= self.html.P(
            "This application connects a Python backend with a Brython-powered frontend "
            "through a unified runtime."
        )


if __name__ == "__main__":
    # Start the embedded HTTP server with default address and port
    App.serve()

    # Alternative explicit binding
    # App.serve(ip="127.0.0.1", port=8080)
