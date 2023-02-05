"""
============
Material-Web
============

"""
from browser import html
from functools import cache

maketag = cache(html.maketag)


def __getattr__(attr):
    """"""
    def element(*args, **kwargs):
        tag = maketag(f'md-{attr.replace("_", "-")}')
        return tag(*args, **kwargs)
    return element

