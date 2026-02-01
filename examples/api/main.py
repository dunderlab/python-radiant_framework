from radiant import BrythonServer, json_response


class App(BrythonServer):

    @BrythonServer.get("/api/get")
    def get_api(**kwargs):
        """Python rendered function"""
        data = {
            "on_get": "ok",
            **kwargs,
        }
        return json_response(data)

    @BrythonServer.post("/api/post")
    def post_api(**kwargs):
        """Python rendered function"""
        data = {
            "on_post": "ok",
            **kwargs,
        }
        return json_response(data)


if __name__ == "__main__":
    App.serve()
