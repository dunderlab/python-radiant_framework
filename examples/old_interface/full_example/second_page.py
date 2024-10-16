from radiant.framework.server import RadiantCore
from browser import document, html


########################################################################
class Second(RadiantCore):

    # ----------------------------------------------------------------------
    def __init__(self, *args, **kwargs):
        """"""
        super().__init__(*args, **kwargs)

        document.select_one('body') <= html.H1('Multipage support')
        document.select_one('body') <= html.A('home', href='/')


