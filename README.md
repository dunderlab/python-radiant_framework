# Radiant: Unified Python and Brython Runtime
Build web apps in 100% pure Python. No JavaScript. Single-file execution.

![GitHub top language](https://img.shields.io/github/languages/top/dunderlab/radiant-runtime-bridge?)
![PyPI - License](https://img.shields.io/pypi/l/radiant-runtime-bridge?)
![PyPI](https://img.shields.io/pypi/v/radiant-runtime-bridge?)
![PyPI - Status](https://img.shields.io/pypi/status/radiant-runtime-bridge?)
![PyPI - Python Version](https://img.shields.io/pypi/pyversions/radiant-runtime-bridge?)
![GitHub last commit](https://img.shields.io/github/last-commit/dunderlab/radiant-runtime-bridge?)
![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/dunderlab/radiant-runtime-bridge?)

## Overview

Radiant is a single-file runtime bridge that blurs the line between server and browser. It encapsulates your entire stack into a single Python script, allowing you to write frontend logic with Brython as if it were running natively in the browser, while maintaining a transparent connection to the backend.

## Features

- Write both frontend and backend code in Python
- Simple API for DOM manipulation
- Built-in HTTP server for development
- Support for RESTful API endpoints (GET, POST)
- View routing for multi-page applications
- JSON response helpers
- IPv4 and IPv6 support

## Installation

~~~bash
pip install radiant-runtime-bridge
~~~

## Quick Start

### Minimal Example

Create a simple web application with just a few lines of code:

~~~python
# Base class that binds the Python server with the Brython frontend
from radiant import BrythonServer


class App(BrythonServer):
    # Application entry point.
    # Inherits the Radiant runtime that exposes HTML primitives and the browser document.

    def __init__(self):
        # This code runs in the browser via Brython, 
        # but is defined in the same script as your server logic.
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
~~~

Run the application:

~~~bash
python main.py
~~~

Then open your browser to http://localhost:5050 (default port).

## API Examples

### Creating API Endpoints

~~~python
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
~~~

### Creating Multiple Views

~~~python
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
~~~

## Brython Enhancement

### `select`
The `select` method enables batch operations on multiple DOM elements. Functions can be applied to all selected elements at once:

~~~ python
selection = self.select('.my-class')
selection.bind('mouseover', lambda evt: print(evt))
selection.style.color = 'cyan'
selection.style = {'background-color': 'red'}
~~~

### `html`
The `html` module offers a Pythonic way to create and manipulate HTML elements:

~~~ python
# Create elements with CSS classes
title = self.html.H1('My Title', Class='header')

# Dynamic class management
title.classes.append('active')
title.classes.extend(['large', 'visible'])

# Python-style CSS properties
title.styles.background_color = 'blue'
title.styles.font_size = '16px'

# Context-based nesting
with self.html.DIV().context as container:
    with self.html.UL().context as list:
        with self.html.LI().context:
            self.html.SPAN("List item")
~~~

A complete working example of context managers can be found in `examples/html_context_manager/main.py`.

### `styles`
The `styles` object provides a cleaner syntax for managing CSS properties:

~~~ python
selection = self.select('.my-class')
selection.styles.background_color = 'red'
selection.styles.color = 'white'
~~~

## Important Notes

- Radiant is designed for development, testing, and prototyping
- Not recommended for production use without additional security measures
- No built-in authentication or authorization

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the BSD-2-Clause License. See the LICENSE.md file for details.

## Links

- [GitHub Repository](https://github.com/dunderlab/radiant-runtime-bridge)
- [PyPI Package](https://pypi.org/project/radiant-runtime-bridge/)