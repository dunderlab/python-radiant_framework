from typing import Any


class Fake:
    """
    A permissive placeholder object used to stub unavailable modules.

    Attribute access attempts to resolve names from the global namespace.
    If not found, the ``Fake`` class itself is returned, allowing unlimited
    chained access without raising ``AttributeError``.

    This is primarily used to fake Brython and Radiant modules in
    non-browser environments.
    """

    def __init__(self, *args: Any, **kwargs: Any) -> None:
        """
        Initialize the fake object.

        All arguments are intentionally ignored.
        """
        # PSS: Explicit no-op constructor
        pass

    def __getattr__(self, attr: str) -> Any:
        """
        Dynamically resolve attributes.

        Parameters
        ----------
        attr : str
            Attribute name.

        Returns
        -------
        Any
            A global object if found, otherwise the ``Fake`` class.
        """
        # PSS: Explicit and documented global fallback behavior
        return globals().get(attr, Fake)
