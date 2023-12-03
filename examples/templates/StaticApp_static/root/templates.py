from radiant.framework.server import RadiantAPI, RadiantServer, render
from browser import html
from browser.template import Template


########################################################################
class StaticApp(RadiantAPI):

    # ----------------------------------------------------------------------
    def __init__(self, *args, **kwargs):
        """"""
        super().__init__(*args, **kwargs)
        self.body <= html.H1('Radiant-Framework')

        self.body <= self.main()

        # Template("menu").render()

    # ----------------------------------------------------------------------
    def main(self):
        """"""
        context = {
            'title': 'TITULO',
            'titles': ["Rendered",
                       "Radiant",
                       "Framework",
                       "Layout",
                       ],
        }

        return render('main.html', context)


if __name__ == '__main__':
    RadiantServer('StaticApp',
                  template='layout.html',
                  static_app=True,
                  )
