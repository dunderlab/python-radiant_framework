from radiant.framework.server import RadiantInterfaceApp
from browser import document, html


class CounterApp(RadiantInterfaceApp):
    def on_mount(self):
        # Initialize internal state
        self.count = 0

        # Create display element for the counter value
        self.counter_display = html.H2(f"Count: {self.count}")

        # Create button and bind click event to increment function
        increment_button = html.BUTTON("Increment")
        increment_button.bind("click", self.increment)

        # Render header, display, and button into the document
        document <= html.H1("Counter App")
        document <= self.counter_display
        document <= increment_button

    def increment(self, ev):
        # Update internal state and refresh display text
        self.count += 1
        self.counter_display.text = f"Count: {self.count}"


if __name__ == "__main__":
    # Launch the application using the Radiant interface mode
    CounterApp(port=5001).serve()
