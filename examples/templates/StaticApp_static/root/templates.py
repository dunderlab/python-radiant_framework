from radiant.framework.server import RadiantAPI, RadiantServer, render
from radiant.framework import html

########################################################################


class StaticApp(RadiantAPI):

    # ----------------------------------------------------------------------
    def __init__(self, *args, **kwargs):
        """"""
        super().__init__(*args, **kwargs)
        self.body <= html.H1('Radiant-Framework')
        self.body <= self.main()

    # ----------------------------------------------------------------------
    def main(self):
        """"""
        context = {
            'title': 'TITULO',
            'items': [f'item-{i}' for i in range(10)],
        }

        return render('main.html', context)


if __name__ == '__main__':
    RadiantServer('StaticApp',
                  # template='layout.html',
                  static_app=True,
                  )
