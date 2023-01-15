# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

import os
import sys

sys.path.insert(0, os.path.abspath('../../radiant'))

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = 'Radiant Framework'
copyright = '2023, Yeison Cardona'
author = 'Yeison Cardona'

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = [
    'nbsphinx',
    'dunderlab.docs',
]

templates_path = ['_templates']
exclude_patterns = []



# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_theme = 'alabaster'

html_static_path = [
    '_static',
    '_static/static',
    '_static/static/modules/brython',
]

autodoc_mock_imports = [
    'browser',
    'IPython',
    'numpy',
    'scipy',
    'mne',
    'matplotlib',
    'google',
    'colorama',
    'tqdm',
    'pandas',
    'tables',
    'pyedflib',
    'netifaces',
    'nmap',
    'rawutil',
    'kafka',
    'rpyc',
    'serial',
]

html_logo = '_static/logo.svg'
html_favicon = '_static/favico.ico'


def setup(app):
    app.add_js_file("static/brython/brython-3.10.5/brython.js")
    app.add_js_file("static/brython/brython-3.10.5/brython_stdlib.js")
    app.add_js_file("static/brython/brython-3.10.5/load_brython.js")

    # app.add_js_file("material-components-web/material-components-web.min.js")
    app.add_css_file("static/fonts/material-design-icons-3.0.1/iconfont/material-icons.css")
    app.add_css_file("static/fonts/fontawesome/css/all.min.css")
    app.add_css_file("static/fonts/roboto-android/roboto.css")
    app.add_css_file("static/fonts/roboto-android/roboto-mono.css")

    app.add_js_file("static/material-components-web/material-components-web.min.js")
    app.add_css_file("static/material-components-web/material-components-web.min.css")

    app.add_js_file("static/js/popper.min.js")
    app.add_js_file("static/bootstrap/bootstrap-5.2.0-beta1/js/bootstrap.min.js")
    app.add_css_file("static/bootstrap/bootstrap-5.2.0-beta1/css/bootstrap.min.css")

    app.add_css_file("custom.css")
    app.add_css_file("theme.css")

