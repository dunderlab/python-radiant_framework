#!bryhton

from radiant.framework.server import RadiantAPI, RadiantServer
from browser import document, html
import logging
from mdc.MDCTab import MDCTabBar


########################################################################
class BareMinimum(RadiantAPI):

    # ----------------------------------------------------------------------
    def __init__(self, *args, **kwargs):
        """"""
        super().__init__(*args, **kwargs)
        document.select_one('body') <= html.H1('Hello World')

        logging.warning('HOLA')
        tabbar = MDCTabBar(
            {'text': 'Python', 'id': 'python'},
            {'text': 'Pinguino', 'id': 'pinguino'},
        )

        document.select_one('body') <= tabbar
        document.select_one('body') <= tabbar.panels

        tabbar.panel['python'] <= html.SPAN('PYTHON')
        tabbar.panel['pinguino'] <= html.SPAN('PINGUINO')


if __name__ == '__main__':
    RadiantServer(
        'BareMinimum',
        host='localhost',
        port=5000,
        brython_version='3.10.5',
        debug_level=0,
        pages=([r'^/multipage$', 'second_page.Second'],),
        modules=['mdc'],
    )
