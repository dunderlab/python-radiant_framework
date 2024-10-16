from radiant.framework.server import RadiantCore
from radiant.framework import html
from browser import document


########################################################################
class BareMinimum(RadiantCore):

    # ----------------------------------------------------------------------
    def __init__(self, *args, **kwargs):
        """"""
        super().__init__(*args, **kwargs)
        document.select_one('body') <= html.H1('Radiant-Framework')


if __name__ == '__main__':
    BareMinimum()
