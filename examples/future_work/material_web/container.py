from radiant.framework.server import RadiantAPI, RadiantServer
from browser import document, html
import material_3 as md


########################################################################
class BareMinimum(RadiantAPI):

    # ----------------------------------------------------------------------
    def __init__(self, *args, **kwargs):
        """"""
        super().__init__(*args, **kwargs)


        self.body <= html.H1('Hola')






if __name__ == '__main__':

    RadiantServer('BareMinimum',
                  port='5005',
                  brython_version='3.11.2',
                  modules=[
                      'md_git',  # to enable Material 3
                      # 'md',  # to enable Material 3
                      'material_symbols',  # to enable Material Symbols
                      'material_icons',  # to enable Material Icon
                  ],
                  )

