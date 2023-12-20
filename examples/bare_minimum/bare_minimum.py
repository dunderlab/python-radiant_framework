#!bryhton

from radiant.framework.server import RadiantAPI
from radiant.framework import html
from browser import document


########################################################################
class BareMinimum(RadiantAPI):

    # ----------------------------------------------------------------------
    def __init__(self, *args, **kwargs):
        """"""
        super().__init__(*args, **kwargs)
        document.select_one('body') <= html.H1('Radiant-Framework')


if __name__ == '__main__':
    BareMinimum()
