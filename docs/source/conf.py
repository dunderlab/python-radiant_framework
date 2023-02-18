# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

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
html_static_path = ['_static']

html_logo = '_static/logo.svg'
html_favicon = '_static/favico.ico'


html_theme_options = {
    'caption_font_family': 'Noto Sans',
    'font_family': 'Noto Sans',
    'head_font_family': 'Noto Sans',
    'page_width': '1280px',
    'sidebar_width': '300px',
}
