from browser import html
from functools import cache

maketag = cache(html.maketag)


# ----------------------------------------------------------------------
def material_web(fn):
    """"""
    def element(*args, **kwargs):
        tag = maketag(f'md-{fn.__name__.replace("_", "-")}')
        return tag(*args, **kwargs)
    return element

