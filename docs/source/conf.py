# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

import sys
import os

sys.path.insert(0, os.path.abspath("_extensions"))

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = "Radiant Framework"
copyright = "2025, Yeison Cardona"
author = "Yeison Cardona"

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = [
    "nbsphinx",
    "dunderlab.docs",
]

templates_path = ["_templates"]
exclude_patterns = []


# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_theme = "alabaster"
html_static_path = ["_static"]

html_logo = "_static/logo.svg"
html_favicon = "_static/favicon.ico"

html_theme_options = {
    "caption_font_family": "Noto Sans",
    "font_family": "Noto Sans",
    "head_font_family": "Noto Sans",
    "page_width": "1280px",
    "sidebar_width": "300px",
}

html_static_path = [
    "_static",
    "_static/static",
]

dunderlab_code_reference = False
dunderlab_color_links = "#28BDB8"
