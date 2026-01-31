from typing import Any

from browser import html


def _normalize_icon(icon: str, prefix: str) -> str:
    """
    Normalize an icon name by removing its prefix if present.
    """
    # PSS: Centralized prefix stripping logic
    return icon[len(prefix) :] if icon.startswith(prefix) else icon


# ----------------------------------------------------------------------
def fa(icon: str, mode: str = "solid", *args: Any, **kwargs: Any):
    """
    Create a Font Awesome icon element.

    Parameters
    ----------
    icon : str
        Icon name (e.g. ``"user"`` or ``"fa-user"``).
    mode : str, optional
        Font Awesome style (e.g. ``"solid"``, ``"regular"``, ``"brands"``).
    """
    icon = _normalize_icon(icon, "fa-")
    extra_class = kwargs.pop("Class", "")

    return html.I(
        Class=f"fa-{mode} fa-{icon} {extra_class}",
        *args,
        **kwargs,
    )


# ----------------------------------------------------------------------
def bi(icon: str, *args: Any, **kwargs: Any):
    """
    Create a Bootstrap Icons element.

    Parameters
    ----------
    icon : str
        Icon name (e.g. ``"alarm"`` or ``"bi-alarm"``).
    """
    icon = _normalize_icon(icon, "bi-")
    extra_class = kwargs.pop("Class", "")

    return html.I(
        Class=f"bi bi-{icon} {extra_class}",
        *args,
        **kwargs,
    )


# ----------------------------------------------------------------------
def mi(icon: str, size: int = 48, *args: Any, **kwargs: Any):
    """
    Create a Material Icons element.

    Parameters
    ----------
    icon : str
        Icon name (e.g. ``"home"`` or ``"md-home"``).
    size : int, optional
        Icon size modifier (default: 48).
    """
    icon = _normalize_icon(icon, "md-")
    extra_class = kwargs.pop("Class", "")

    return html.SPAN(
        icon,
        Class=f"material-icons md-{size} {extra_class}",
        *args,
        **kwargs,
    )
