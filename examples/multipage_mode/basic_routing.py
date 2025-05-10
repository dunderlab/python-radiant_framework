from radiant.framework.server import AppRouter
from browser import document, html


# Define route for root path
@AppRouter.get_route("/")
def home():
    document <= html.H1("Welcome to Radiant")
    document <= html.P("This is the home page.")


# Define route for about page
@AppRouter.get_route("/about")
def about():
    document <= html.H1("About Radiant")
    document <= html.P("Radiant is a hybrid Python–Brython framework.")


# Launch the server with default settings
if __name__ == "__main__":
    AppRouter.serve()
