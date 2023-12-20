from radiant.framework.server import RadiantAPI
from radiant.framework import html, select
# from browser import document
from interpreter import Inspector


########################################################################
class BareMinimum(RadiantAPI):

    # ----------------------------------------------------------------------
    def __init__(self, *args, **kwargs):
        """"""
        super().__init__(*args, **kwargs)

        title = html.H1('Radiant-Framework', Class='my-class')

        print(title.classes)
        title.classes.append('new-class')
        print(title.classes)
        title.classes.extend(['new-new-class', 'new-new-new-class'])
        print(title.classes)

        title.style = {'color': 'red'}
        title.style.color = 'blue'
        # title.style.background_color = 'red'

        self.body <= title

        self.body <= html.H1('Radiant-Framework-2', Class='my-class')
        self.body <= html.H1('Radiant-Framework-3', Class='my-class')
        self.body <= html.H1('Radiant-Framework-4', Class='my-class')
        self.body <= html.H1('Radiant-Framework-5', Class='my-class')
        self.body <= html.H1('Radiant-Framework-6', Class='my-class')

        selection = select('.my-class')

        selection.bind('mouseover', lambda evt: print(evt))

        # title.style.color = 'cyan'
        setattr(title.style, 'color', 'cyan')

        selection.style.color = 'cyan'

        selection.style = {'background-color': 'red', }
        # Inspector()

        # with htmlc.DIV(style={'background-color': 'blue'}) as div_principal:
            # with htmlc.DIV():
                # with htmlc.SPAN() as span:
                    # span.html = "Texto de ejemplo"

        with html.DIV(style={'background-color': 'blue'}).context(self.body):
            with html.DIV().context:
                with html.SPAN().context as span:
                    span.html = "Texto de ejemplo"

        # self.body <= div_principal


if __name__ == '__main__':
    BareMinimum()


