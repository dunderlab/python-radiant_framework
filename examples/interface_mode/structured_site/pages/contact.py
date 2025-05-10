from radiant.framework.server import RadiantInterfaceApp
from browser import document, html


# Contact page of the application
class Contact(RadiantInterfaceApp):
    def on_mount(self):
        document <= html.H1("Contact Page")
        document <= html.P("Get in touch with us.")
        document <= html.A("Home", href="/")
        document <= html.BR()
        document <= html.A("About", href="/about")
