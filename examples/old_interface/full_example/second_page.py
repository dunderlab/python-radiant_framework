from radiant.framework.server import RadiantInterfaceApp
from browser import document, html


########################################################################
class Second(RadiantInterfaceApp):

    # ----------------------------------------------------------------------
    def __init__(self, *args, **kwargs):
        """"""
        super().__init__(*args, **kwargs)

        document.select_one('body') <= html.H1('Multipage support')
        document.select_one('body') <= html.A('home', href='/')


