from radiant.framework.server import RadiantAPI, RadiantServer
from browser import document, html


########################################################################
class BareMinimum(RadiantAPI):

    # ----------------------------------------------------------------------
    def __init__(self, *args, **kwargs):
        """"""
        super().__init__(*args, **kwargs)
        document.select_one('body') <= html.H1('Hello World')
        document.select_one('body') <= html.H1('Multipage support')
        document.select_one('body') <= html.A(
            'second page', href='/multipage'
        )


if __name__ == '__main__':
    RadiantServer(
        'BareMinimum',
        host='localhost',
        port=5000,
        brython_version='3.10.5',
        debug_level=0,
        pages=([r'^/multipage$', '_second_page.Second'],),
    )
