from radiant.framework.server import RadiantInterfaceApp
from browser import document, html


# Define a simple application using RadiantInterfaceApp
class MinimalApp(RadiantInterfaceApp):

    def on_mount(self):
        self.welcome()


# Launch the app with default settings
if __name__ == "__main__":
    MinimalApp.serve()
