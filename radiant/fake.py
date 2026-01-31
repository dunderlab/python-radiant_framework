import sys
from typing import Iterable, Any


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


def _inject_fake_modules(prefix: str, modules: Iterable[str]) -> None:
    """
    Inject fake modules into ``sys.modules``.

    Parameters
    ----------
    prefix : str
        Module namespace prefix.
    modules : Iterable[str]
        Module names to stub.
    """
    # PSS: Centralized sys.modules injection logic
    for module in modules:
        sys.modules[f"{prefix}{module}"] = Fake()


# ---------------- Brython stubs ---------------- #

BRYTHON_MODULES = [
    "browser",
    "browser.template",
    "browser.html",
    "browser.local_storage",
    "interpreter",
]

_inject_fake_modules("", BRYTHON_MODULES)


# ---------------- Radiant stubs ---------------- #

RADIANT_MODULES = [
    # "sound",
    # "icons",
    # "framework",
    # "framework.sound",
    "core",
]

_inject_fake_modules("radiant.", RADIANT_MODULES)
