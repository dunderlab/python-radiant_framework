#!bryhton

from radiant.framework.server import RadiantAPI, RadiantServer
from browser import document, html
import md
from material_symbols import configure, ms


configure('outlined', 0, 100, 0, 48)
configure('rounded', 1, 700, 0, 20)


########################################################################
class BareMinimum(RadiantAPI):

    # ----------------------------------------------------------------------
    def __init__(self, *args, **kwargs):
        """"""
        super().__init__(*args, **kwargs)
        document.select_one('body') <= html.H1('Radiant-Framework: Material Web')

        document.select_one('body') <= md.elevated_button(label='Elevated')
        document.select_one('body') <= md.filled_button(label='Filled', disabled=True, trailingIcon='home')
        document.select_one('body') <= md.outlined_button(label='Oulined')
        document.select_one('body') <= md.text_button(label='Text')
        document.select_one('body') <= md.tonal_button(label='Tonal')
        document.select_one('body') <= html.BR()

        document.select_one('body') <= md.checkbox(checked=True)
        document.select_one('body') <= md.checkbox(checked=False)
        document.select_one('body') <= html.BR()

        document.select_one('body') <= ms('favorite', style='outlined', size=48)
        document.select_one('body') <= ms('favorite', style='rounded')


if __name__ == '__main__':

    RadiantServer('BareMinimum',
                  modules=[
                      'md',
                      'material_symbols',
                  ]
                  )
