from radiant.framework.server import RadiantInterfaceApp
from browser import document, html


# Home page of the application
class Home(RadiantInterfaceApp):
    def on_mount(self):
        document <= html.H1("Home Page")
        document <= html.P("Welcome to the homepage of this Radiant app.")
        document <= html.A("Go to About", href="/about")
        document <= html.BR()
        document <= html.A("Contact us", href="/contact")
