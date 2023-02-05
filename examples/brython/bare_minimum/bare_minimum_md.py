#!bryhton

from radiant.framework.server import RadiantAPI, RadiantServer
from browser import document, html

# Material 3
# https://m3.material.io/develop/web
import md


########################################################################
class BareMinimum(RadiantAPI):

    # ----------------------------------------------------------------------
    def __init__(self, *args, **kwargs):
        """"""
        super().__init__(*args, **kwargs)
        body = document.select_one('body')

        body <= html.H1('Radiant-Framework: Material 3')

        body <= md.elevated_button(label='Elevated')
        body <= md.filled_button(label='Filled')
        body <= md.outlined_button(label='Oulined')
        body <= md.text_button(label='Text')
        body <= md.tonal_button(label='Tonal')


if __name__ == '__main__':
    RadiantServer('BareMinimum',
                  brython_version='3.10.5',
                  modules=['md',  # to enable Material 3
                           ],
                  )
