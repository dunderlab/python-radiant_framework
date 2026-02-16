from radiant import BrythonServer


class App(BrythonServer):

    def __init__(self):
        # Create the main container
        container = self.html.DIV()
        # Attach it to the document
        self.document <= container

        # First nesting level
        # The Context Manager (.context) maintains a reference to the current container
        # allowing for clean and organized nesting of elements
        with container.context as main_container:
            # Add content to the main container
            main_container <= self.html.H1("Main Container")

            # Second nesting level
            # Create a new DIV and use its context manager to maintain scope
            with self.html.DIV().context as second_container:
                # Add content to the second container
                second_container <= self.html.H2("Second Container")

                # Third nesting level
                # The context manager allows creating deeply nested structures
                # while maintaining clear scope for each container
                with self.html.DIV().context as third_container:
                    # Add content to the third container
                    third_container <= self.html.H3("Third Container")

        # Once outside the context managers, we can apply styles to all DIVs
        # The containers have been created maintaining the correct hierarchy
        divs = self.select("div")
        divs.styles.border = "1px solid black"
        divs.styles.padding = "20px"


if __name__ == "__main__":
    App.serve()
