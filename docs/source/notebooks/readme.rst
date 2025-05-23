Radiant: A Pythonic Web Framework
=================================

A lightweight and Python-first framework for building web applications
with Brython.

|GitHub top language| |PyPI - License| |PyPI| |PyPI - Status| |PyPI -
Python Version| |GitHub last commit| |CodeFactor Grade| |Documentation
Status|

.. |GitHub top language| image:: https://img.shields.io/github/languages/top/dunderlab/python-radiant_framework?
.. |PyPI - License| image:: https://img.shields.io/pypi/l/radiant-framework?
.. |PyPI| image:: https://img.shields.io/pypi/v/radiant?
.. |PyPI - Status| image:: https://img.shields.io/pypi/status/radiant-framework?
.. |PyPI - Python Version| image:: https://img.shields.io/pypi/pyversions/radiant?
.. |GitHub last commit| image:: https://img.shields.io/github/last-commit/dunderlab/python-radiant_framework?
.. |CodeFactor Grade| image:: https://img.shields.io/codefactor/grade/github/dunderlab/python-radiant_framework?
.. |Documentation Status| image:: https://readthedocs.org/projects/radiant-framework/badge/?version=latest
   :target: https://radiant-framework.readthedocs.io/en/latest/?badge=latest

Why Radiant?
------------

Radiant is a modern web framework that enables Python developers to
build full-stack web applications without writing JavaScript. It
leverages Brython to run Python code directly in the browser, providing
a seamless development experience.

Target Audience
~~~~~~~~~~~~~~~

Radiant is designed for Python developers who want to:

-  Build web applications entirely in Python without JavaScript
   knowledge
-  Create interactive web interfaces with a Pythonic approach
-  Leverage Python’s simplicity and expressiveness for frontend
   development
-  Benefit from Python’s rich ecosystem of libraries and tools
-  Avoid context switching between Python and JavaScript
-  Develop full-stack applications with a single language
-  Learn web development while staying in a familiar Python environment

Whether you’re a Python enthusiast, a web developer looking for a
Python-first approach, or a beginner wanting to start web development
with Python, Radiant provides an intuitive framework for your needs.

Key Features
------------

-  **Pure Python Development**: Build web applications without writing
   JavaScript
-  **Component-Based Architecture**: Create reusable UI components in
   Python
-  **Real-time Updates**: Built-in WebSocket support for live data
   updates
-  **Template System**: Flexible HTML templating with Python syntax
-  **State Management**: Simple state handling and reactivity
-  **Browser API Integration**: Access browser features through Python
   interfaces
-  **Modern UI Tools**: Built-in support for CSS frameworks and modern
   UI patterns

Getting Started
---------------

Prerequisites
~~~~~~~~~~~~~

-  Python 3.7 or higher
-  Basic understanding of Python
-  pip package manager

Installation
~~~~~~~~~~~~

Install Radiant using pip:

.. code:: bash

   pip install radiant-framework

Quick Example
~~~~~~~~~~~~~

Here’s a minimal example to get you started:

.. code:: ipython3

    from radiant.framework.server import RadiantInterfaceApp
    from browser import document, html
    
    
    # Define a simple application using RadiantInterfaceApp
    class MinimalApp(RadiantInterfaceApp):
    
        def on_mount(self):
            document <= html.H1("Minimal Interface App")
            document <= html.P("This is a single-page app using Radiant.")
    
    
    # Launch the app with default settings
    if __name__ == "__main__":
        MinimalApp.serve()

Visit http://localhost:5050 to see your first Radiant application!
