# Radiant: A single-file Python runtime bridge (CPython ↔ Brython)

A lightweight and Python-first runtime bridge for building web applications with Brython.

![GitHub top language](https://img.shields.io/github/languages/top/dunderlab/radiant-runtime-bridge?)
![PyPI - License](https://img.shields.io/pypi/l/radiant-runtime-bridge?)
![PyPI](https://img.shields.io/pypi/v/radiant-runtime-bridge?)
![PyPI - Status](https://img.shields.io/pypi/status/radiant-runtime-bridge?)
![PyPI - Python Version](https://img.shields.io/pypi/pyversions/radiant-runtime-bridge?)
![GitHub last commit](https://img.shields.io/github/last-commit/dunderlab/radiant-runtime-bridge?)

[//]: # (![CodeFactor Grade]&#40;https://img.shields.io/codefactor/grade/github/dunderlab/radiant-runtime-bridge?&#41;)

## Overview

Radiant is a framework that bridges Python on the server (CPython) with Python in the browser (Brython). It allows developers to write web applications entirely in Python, without needing to write JavaScript code.

## Features

- Write both frontend and backend code in Python
- Simple API for DOM manipulation
- Built-in HTTP server for development
- Support for RESTful API endpoints (GET, POST)
- View routing for multi-page applications
- JSON response helpers
- IPv4 and IPv6 support

## Installation

```bash
pip install radiant-runtime-bridge
```

## Quick Start

### Minimal Example

Create a simple web application with just a few lines of code:

```python
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
```

Run the application:

```bash
python main.py
```

Then open your browser to http://localhost:5050 (default port).

## API Examples

### Creating API Endpoints

```python
from radiant import BrythonServer, json_response


class App(BrythonServer):

    @BrythonServer.get("/api/get")
    def get_api(**kwargs):
        """Python rendered function"""
        data = {
            "on_get": "ok",
            **kwargs,
        }
        return json_response(data)

    @BrythonServer.post("/api/post")
    def post_api(**kwargs):
        """Python rendered function"""
        data = {
            "on_post": "ok",
            **kwargs,
        }
        return json_response(data)


if __name__ == "__main__":
    App.serve()
```

### Creating Multiple Views

```python
# Core Radiant runtime and optional JSON utilities
from radiant import BrythonServer, json_response


class App(BrythonServer):
    # Example application demonstrating classic browser navigation
    # with server-rendered views using Radiant.

    def __init__(self):
        # Executed on each page load
        print("Application request received")

        # Main page content
        self.document <= self.html.H1("Radiant · Server-Rendered Views")
        self.document <= self.html.P(
            "This example demonstrates browser-controlled navigation "
            "with full page reloads, where each route renders a new view "
            "handled by the Radiant server."
        )

        # Navigation links triggering full page reloads
        self.document <= self.html.A("Open View 1", href="/page1")
        self.document <= self.html.BR()
        self.document <= self.html.A("Open View 2", href="/page2")
        self.document <= self.html.BR()
        self.document <= self.html.A("Open View 3", href="/page3")

    @BrythonServer.view("/page1")
    def page1(self):
        # View rendered after a full page reload
        self.document <= self.html.H1("View 1")
        self.document <= self.html.P(
            "This page was rendered after a full browser reload "
            "and handled by the Radiant server."
        )
        self.document <= self.html.A("Back to Home", href="/")


if __name__ == "__main__":
    # Start the application using default server settings
    App.serve()
```

## Documentation

### BrythonServer Class

The main class for creating Radiant applications. Inherit from this class to create your application.


### Helper Functions

- `json_response(data, status=200)`: Create a JSON response

## Important Notes

- Radiant is designed for development, testing, and prototyping
- Not recommended for production use without additional security measures
- No built-in authentication or authorization

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the BSD-2-Clause License - see the LICENSE.md file for details.

## Links

- [GitHub Repository](https://github.com/dunderlab/radiant-runtime-bridge)
- [PyPI Package](https://pypi.org/project/radiant-runtime-bridge/)
