from radiant.framework.server import AppRouter
from browser import document, html, ajax


# Define route for root form page
@AppRouter.get_route("/")
def form_page():

    form = html.FORM()

    form <= html.LABEL("Name:")
    form <= html.INPUT(type="text", id="name", name="name")

    form <= html.BR()

    form <= html.LABEL("Age:")
    form <= html.INPUT(type="number", id="age", name="age")

    form <= html.BR()

    submit = html.BUTTON("Enviar", type="submit")
    form <= submit
    form.bind("submit", submit_form)

    document <= form
    document <= html.DIV(id="response")


# Handle form submission using AJAX POST
def submit_form(evt):
    evt.preventDefault()

    name = document["name"].value
    age = document["age"].value

    data = {
        "name": name,
        "age": age,
    }

    def on_complete(req):
        if req.status == 200:
            document["response"].text = f"Servidor respondió: {req.text}"

    ajax.post(
        "/submit",
        data=data,
        oncomplete=on_complete,
    )


# Define server-side POST handler for /submit
@AppRouter.post_route("/submit")
def handle_submission(name, age):
    return {"status": "ok", "message": f"Hello {name}, age {age}"}


# Start the application
if __name__ == "__main__":
    AppRouter.serve()
