# Core Radiant runtime and optional JSON utilities
from radiant import BrythonServer, json_response


class App(BrythonServer):
    # Example application demonstrating classic browser navigation
    # with server-rendered views using Radiant.

    def __init__(self):
        # Executed on each page load
        print("Application request received")

        # Main page content
        self.document <= self.html.H1("Radiant · Server-Rendered Views")
        self.document <= self.html.P(
            "This example demonstrates browser-controlled navigation "
            "with full page reloads, where each route renders a new view "
            "handled by the Radiant server."
        )

        # Navigation links triggering full page reloads
        self.document <= self.html.A("Open View 1", href="/page1")
        self.document <= self.html.BR()
        self.document <= self.html.A("Open View 2", href="/page2")
        self.document <= self.html.BR()
        self.document <= self.html.A("Open View 3", href="/page3")

    @BrythonServer.view("/page1")
    def page1(self):
        # View rendered after a full page reload
        self.document <= self.html.H1("View 1")
        self.document <= self.html.P(
            "This page was rendered after a full browser reload "
            "and handled by the Radiant server."
        )
        self.document <= self.html.A("Back to Home", href="/")

    @BrythonServer.view("/page2")
    def page2(self):
        # View rendered after a full page reload
        self.document <= self.html.H1("View 2")
        self.document <= self.html.P(
            "Each navigation request loads a new document "
            "and executes the associated view handler."
        )
        self.document <= self.html.A("Back to Home", href="/")

    @BrythonServer.view("/page3")
    def page3(self):
        # View rendered after a full page reload
        self.document <= self.html.H1("View 3")
        self.document <= self.html.P(
            "Routing is controlled by the browser, while Radiant "
            "is responsible for rendering the requested view."
        )
        self.document <= self.html.A("Back to Home", href="/")


if __name__ == "__main__":
    # Start the application using default server settings
    App.serve()
