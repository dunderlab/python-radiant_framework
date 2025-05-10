from radiant.framework.server import RadiantInterfaceApp
from browser import document, html


# About page of the application
class About(RadiantInterfaceApp):
    def on_mount(self):
        document <= html.H1("About Page")
        document <= html.P("This page explains the purpose of the app.")
        document <= html.A("Back to Home", href="/")
        document <= html.BR()
        document <= html.A("Contact us", href="/contact")
