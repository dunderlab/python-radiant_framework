from typing import Any

from radiant.core import Element, html, select
from fake import Fake

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

    def get(cls, *args, **kwargs):
        """"""
        return Fake


json_response = Fake()
# html_response = Fake()
