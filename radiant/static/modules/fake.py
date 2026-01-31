class fake:
    def __init__(self, *args, **kwargs):
        """"""

    def __getattr__(self, attr):
        if attr in globals():
            return globals()[attr]
        else:
            return fake
