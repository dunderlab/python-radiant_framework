from typing import Any, Callable

from radiant.core import Element, html, select
from fake import Fake

from browser import ajax
from urllib.parse import urlencode
from browser import window
import json

from functools import wraps


class BythonServer:
    """
    Integration helper exposing Radiant core primitives.

    This class provides convenient access to HTML generation, element
    selection, and element enhancement utilities.
    """

    # Exposed core utilities as class attributes for easy access
    select = select
    html = html

    def enhance(self, element: Any) -> Element:
        """
        Enhance an existing element with Radiant helpers.

        Parameters
        ----------
        element : Any
            An HTML-like element to wrap.

        Returns
        -------
        Element
            An enhanced Element wrapper.
        """
        return Element(element)

    @classmethod
    def get(cls, route) -> Callable:
        """"""

        def decorator(fn):
            @wraps(fn)
            def wrapper(cls, **kwargs):
                if kwargs:
                    query = urlencode(kwargs, doseq=True)
                    url = f"{route}?{query}"
                else:
                    url = route
                return (
                    window.fetch(url)
                    .then(lambda r: r.text())
                    .then(lambda text: json.loads(text))
                )

            return wrapper

        return decorator

    @classmethod
    def post(cls, route):

        def decorator(fn):
            @wraps(fn)
            def wrapper(cls, **kwargs):
                body = json.dumps(kwargs)

                return (
                    window.fetch(
                        route,
                        {
                            "method": "POST",
                            "headers": {"Content-Type": "application/json"},
                            "body": body,
                        },
                    )
                    .then(lambda r: r.text())
                    .then(lambda text: json.loads(text))
                )

            return wrapper

        return decorator

    @classmethod
    def view(cls, route) -> Callable:
        def decorator(fn):
            @wraps(fn)
            def wrapper(*args, **kwargs):
                return fn(*args, **kwargs)

            return wrapper

        return decorator


json_response = Fake()
