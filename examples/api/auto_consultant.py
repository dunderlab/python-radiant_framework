from radiant import BrythonServer, json_response


class App(BrythonServer):

    def __init__(self):
        print("Hello World")
        self.document <= self.html.H1("Minimal Interface App")
        self.document <= self.html.P("This is a single-page app using Radiant.")

        self.document <= self.html.P("Check the console output")

        self.test_get.call(a=1).then(lambda data: print(dict(data)))
        self.test_post.call(b=1).then(lambda data: print(dict(data)))

    @BrythonServer.view("/page")
    def test_html(self):
        self.document <= self.html.H1("Subpage")
        self.document <= self.html.P("This is a single-page app using Radiant.")

    @BrythonServer.get("/api/test")
    def test_get(**kwargs):
        """Python rendered function"""
        data = {
            "test_get": "ok",
            **kwargs,
        }
        return json_response(data)

    @BrythonServer.post("/on_post")
    def test_post(**kwargs):
        """Python rendered function"""
        data = {
            "test_post": "ok",
            **kwargs,
        }
        return json_response(data)


if __name__ == "__main__":
    App.serve()
