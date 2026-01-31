from browser import document, timer


# def autoiframe(id_, parent):
#     """"""
#     if iframe := document.select_one(f"#{id_}"):
#         if iframe.contentWindow.document.select_one(parent):
#             iframe.style.height = (
#                 f"{iframe.contentWindow.document.documentElement.scrollHeight}px"
#             )
#             return timer.set_timeout(lambda: autoiframe(id_, parent), 2000)
#     timer.set_timeout(lambda: autoiframe(id_, parent), 500)


def autoiframe(
    iframe_id: str,
    parent_selector: str,
    retry_delay: int = 500,
    success_delay: int = 2000,
) -> None:
    """
    Automatically adjust an iframe's height to match its content.

    The function periodically checks whether the iframe and its target
    content are available, then resizes the iframe to the document's
    scroll height.

    Parameters
    ----------
    iframe_id : str
        The ``id`` attribute of the iframe.
    parent_selector : str
        CSS selector expected to exist inside the iframe document.
    retry_delay : int, optional
        Delay (ms) before retrying when content is not ready.
    success_delay : int, optional
        Delay (ms) before the next resize after success.
    """
    iframe = document.select_one(f"#{iframe_id}")

    if iframe is None:
        # Retry until iframe becomes available
        timer.set_timeout(
            lambda: autoiframe(
                iframe_id,
                parent_selector,
                retry_delay,
                success_delay,
            ),
            retry_delay,
        )
        return

    try:
        inner_doc = iframe.contentWindow.document
    except Exception:
        # Guard against cross-origin or not-yet-ready iframe
        timer.set_timeout(
            lambda: autoiframe(
                iframe_id,
                parent_selector,
                retry_delay,
                success_delay,
            ),
            retry_delay,
        )
        return

    if inner_doc.select_one(parent_selector):
        # Resize iframe based on content height
        iframe.style.height = f"{inner_doc.documentElement.scrollHeight}px"

        timer.set_timeout(
            lambda: autoiframe(
                iframe_id,
                parent_selector,
                retry_delay,
                success_delay,
            ),
            success_delay,
        )
    else:
        timer.set_timeout(
            lambda: autoiframe(
                iframe_id,
                parent_selector,
                retry_delay,
                success_delay,
            ),
            retry_delay,
        )
