"""
Example of a minimal single-page application using RadiantInterfaceApp.

This script demonstrates:
- Mounting basic HTML content to the browser DOM.
- Linking a custom HTML template (`custom_template.html`).
- Applying external CSS styles from `custom_styles.css`.
"""

from radiant.framework.server import RadiantInterfaceApp
from browser import document, html


class MinimalApp(RadiantInterfaceApp):
    """
    Called when the application is mounted. It injects HTML content
    and attaches a custom CSS file.
    """

    def on_mount(self):
        document <= html.H1("Radiant Demo")
        document <= html.P(
            "This page is rendered using a custom HTML template and styled with CSS."
        )
        self.add_css_file("custom_styles.css")


# Launch the app with default settings
if __name__ == "__main__":
    # Start the application using the specified HTML template
    MinimalApp(
        template="custom_template.html",
    ).serve()
