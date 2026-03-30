# Base class that binds the Python server with the Brython frontend
from radiant import BrythonServer
from interpreter import Interpreter


class App(BrythonServer):
    # Application entry point.
    # Inherits the Radiant runtime that exposes HTML primitives and the browser document.

    def __init__(self):
        self.document <= self.html.H1("Radiant · Python Runtime Bridge")
        self.document <= self.html.P(
            "This application connects a Python backend with a Brython-powered frontend "
            "through a unified runtime."
        )

        self.document <= self.html.BUTTON('Launch Console', on_click=self.launch_interpreter)


    def launch_interpreter(self, *args, **kwargs):
        Interpreter(title='Radiant Runtime Bridge', rows=40, cols=90)


if __name__ == "__main__":
    # Start the embedded HTTP server with default address and port
    App.serve()

    # Alternative explicit binding
    # App.serve(ip="127.0.0.1", port=8080)
