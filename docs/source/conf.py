# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

import sys
import os
sys.path.insert(0, os.path.abspath('_extensions'))

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

    'brython_code',
]

templates_path = ['_templates']
exclude_patterns = []


# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_theme = 'alabaster'
html_static_path = ['_static']

html_logo = '_static/logo.svg'
html_favicon = '_static/favicon.ico'

html_theme_options = {
    'caption_font_family': 'Noto Sans',
    'font_family': 'Noto Sans',
    'head_font_family': 'Noto Sans',
    'page_width': '1280px',
    'sidebar_width': '300px',
}

html_static_path = [
    '_static',
    '_static/static',
]


def setup(app):

    # Brython
    app.add_js_file("static/brython/brython-3.11.1/brython.js")
    app.add_js_file("static/brython/brython-3.11.1/brython_stdlib.js")
    app.add_js_file("static/brython/load_brython.js")

    # Material 3
    # app.add_js_file("static/material-web/material-1.0.0-pre.3.js", type="module")
    app.add_js_file("static/material-web/material-git.js", type="module")
    app.add_css_file("static/fonts/roboto-android/roboto.css")
    app.add_css_file("static/fonts/roboto-android/roboto-mono.css")

    # Material Symbols
    app.add_css_file("static/fonts/material-symbols/material_symbols.css")

    # app.add_css_file("static/fonts/material-design-icons-3.0.1/iconfont/material-icons.css")
    # app.add_css_file("static/fonts/fontawesome/css/all.min.css")
    # app.add_css_file("static/fonts/roboto-android/roboto.css")
    # app.add_css_file("static/fonts/roboto-android/roboto-mono.css")

    # app.add_js_file("static/material-components-web/material-components-web.min.js")
    # app.add_css_file("static/material-components-web/material-components-web.min.css")

    # Boostrap 5
    app.add_js_file("static/js/popper.min.js")
    app.add_js_file("static/bootstrap/bootstrap-5.2.0-beta1/js/bootstrap.min.js")
    app.add_css_file("static/bootstrap/bootstrap-5.2.0-beta1/css/bootstrap.min.css")
    app.add_css_file("static/fonts/bootstrap-icons/bootstrap-icons.css")

    app.add_css_file("custom.css")


dunderlab_code_reference = False
dunderlab_color_links = '#28BDB8'
dunderlab_custom_index = f"""
.. toctree::
   :glob:
   :maxdepth: 2
   :name: mastertoc3
   :caption: Material 3

   notebooks/material3/*


.. toctree::
   :glob:
   :maxdepth: 2
   :name: mastertoc3
   :caption: Bootstrap

   notebooks/bootstrap/*

    """
