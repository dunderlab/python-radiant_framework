from radiant.framework.server import RadiantAPI, RadiantServer
from radiant.framework import html, select
# from browser import document
import material_3 as md


########################################################################
class BareMinimum(RadiantAPI):

    # ----------------------------------------------------------------------
    def __init__(self, *args, **kwargs):
        """"""
        super().__init__(*args, **kwargs)

        title = html.H1('Radiant-Framework', Class='my-class')
        self.body <= title

        self.checkbox()

    # ----------------------------------------------------------------------
    def checkbox(self):
        """"""
        with html.DIV().context(self.body) as parent:
            parent.styles.display = 'inline-flex'
            parent.styles.align_items = 'center'
            parent <= md.checkbox(touch_target="wrapper", id="checkbox-two")
            parent <= html.LABEL("Checkbox two", for_="checkbox-two")


if __name__ == '__main__':
    RadiantServer('BareMinimum',
                  brython_version='3.12.1',
                  modules=['md'],
                  port=5000,
                  )
