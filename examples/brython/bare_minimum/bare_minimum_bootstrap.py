#!bryhton

from radiant.framework.server import RadiantAPI, RadiantServer
from browser import document, html

# Bootstrap 5.3
# https://getbootstrap.com/docs/5.3/getting-started/introduction/
import bootstrap as bs


########################################################################
class BareMinimum(RadiantAPI):

    # ----------------------------------------------------------------------
    def __init__(self, *args, **kwargs):
        """"""
        super().__init__(*args, **kwargs)
        body = document.select_one('body')

        body <= html.H1('Radiant-Framework: Bootstrap 5')

        for accent in ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link']:
            body <= bs.Button(accent.capitalize(), accent=accent, outline=True)


if __name__ == '__main__':

    RadiantServer('BareMinimum',
                  brython_version='3.11.1',
                  modules=['bootstrap']
                  )
