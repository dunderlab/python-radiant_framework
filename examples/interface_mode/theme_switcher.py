from radiant.framework.server import RadiantInterfaceApp
from browser import document, html


class ThemeSwitcher(RadiantInterfaceApp):
    def on_mount(self):
        # Create header title
        document <= html.H1("Theme Switcher")

        # Reference to the <body> element for styling
        self.body = document.select_one("body")

        # Create theme toggle buttons
        light_btn = html.BUTTON("Light Theme", id="light")
        dark_btn = html.BUTTON("Dark Theme", id="dark")

        # Bind buttons to theme-switching functions
        light_btn.bind("click", self.set_light)
        dark_btn.bind("click", self.set_dark)

        # Add buttons to the document
        document <= light_btn
        document <= dark_btn

    def set_light(self, ev):
        # Set light theme: white background and black text
        self.body.style.backgroundColor = "#ffffff"
        self.body.style.color = "#000000"

    def set_dark(self, ev):
        # Set dark theme: dark background and white text
        self.body.style.backgroundColor = "#1e1e1e"
        self.body.style.color = "#ffffff"


if __name__ == "__main__":
    # Start the app using Radiant's interface mode
    ThemeSwitcher.serve()
