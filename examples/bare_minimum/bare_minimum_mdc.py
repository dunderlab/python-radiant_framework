#!bryhton

from radiant.framework.server import RadiantAPI, RadiantServer
from browser import document, html

# Material 2
# https://m2.material.io/develop/web
from mdc.MDCButton import MDCButton


########################################################################
class BareMinimum(RadiantAPI):

    # ----------------------------------------------------------------------
    def __init__(self, *args, **kwargs):
        """"""
        super().__init__(*args, **kwargs)
        body = document.select_one('body')

        body <= html.H1('Radiant-Framework: Material 2')

        body <= MDCButton('Text', raised=True)
        body <= MDCButton('Outlined', outlined=True)
        body <= MDCButton('Unelevated', unelevated=True)


if __name__ == '__main__':

    RadiantServer('BareMinimum',
                  brython_version='3.10.5',
                  modules=['mdc']
                  )
