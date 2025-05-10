from radiant.framework.server import AppRouter
from browser import document, html


# Define route for homepage
@AppRouter.get_route("/")
def home():
    document <= html.H1("Custom Server Config")
    document <= html.P("This app is running on a custom host and port.")


# Define route for a subpage
@AppRouter.get_route("/info")
def info():
    document <= html.H2("More Information")
    document <= html.P("This route is served under a custom domain prefix.")


# Launch the app with custom server configuration
if __name__ == "__main__":
    AppRouter.configure(
        host="0.0.0.0",
        port=5051,
        domain="/custom",
    ).serve()
