from typing import Any, Iterable, Callable, List, ClassVar, Optional, Dict

from browser import html as html_
from browser import document as document_


class style_context:
    """
    A wrapper class for managing CSS styles with Python-style attribute access.

    This class provides a proxy to an element's ``style`` object, allowing
    CSS properties to be accessed and modified using Python attribute syntax.
    Underscores in attribute names are automatically converted to hyphens.

    Parameters
    ----------
    element : Any
        An object exposing a writable ``style`` attribute.
    """

    def __init__(self, element: Any) -> None:
        """
        Initialize the style context.

        Parameters
        ----------
        element : Any
            An object with a ``style`` attribute.
        """
        # PSS: Explicitly allow internal assignment before interception
        super().__setattr__("_style", element.style)

    def __getattr__(self, attr: str) -> Any:
        """
        Retrieve a CSS style property.

        Converts Python-style attribute names (underscores) into CSS-style
        property names (hyphens) before accessing the underlying style object.

        Parameters
        ----------
        attr : str
            Python-style attribute name.

        Returns
        -------
        Any
            The value of the CSS property.
        """
        # PSS: Corrected invalid docstring and clarified behavior
        css_attr = attr.replace("_", "-")
        return getattr(self._style, css_attr)

    def __setattr__(self, attr: str, value: Any) -> None:
        """
        Set a CSS style property.

        Converts Python-style attribute names (underscores) into CSS-style
        property names (hyphens) before assignment.

        Parameters
        ----------
        attr : str
            Python-style attribute name.
        value : Any
            Value to assign to the CSS property.
        """
        # PSS: Prevented recursion by allowing internal attributes
        if attr.startswith("_"):
            super().__setattr__(attr, value)
            return

        css_attr = attr.replace("_", "-")
        setattr(self._style, css_attr, value)


class class_context(list[str]):
    """"""

    def __init__(self, element: Any, classes: str) -> None:
        """
        Initialize the class context.

        Parameters
        ----------
        element : Any
            An object with a ``class_name`` attribute.
        classes : str
            Space-separated class names.
        """
        super().__init__(cls for cls in classes.split() if cls)
        self.element: Any = element
        self._sync()

    def _sync(self) -> None:
        """Synchronize the element's ``class_name`` with the list contents."""
        self.element.class_name = " ".join(self)

    def __setitem__(self, index: int, value: str) -> None:
        """
        Set a class name at a specific index.

        Parameters
        ----------
        index : int
            List index.
        value : str
            New class name.
        """
        super().__setitem__(index, value.strip())
        self._sync()

    def append(self, item: str) -> None:
        """
        Append a class name.

        Parameters
        ----------
        item : str
            Class name to append.
        """
        super().append(item.strip())
        self._sync()

    def extend(self, items: Iterable[str]) -> None:
        """
        Extend the list with multiple class names.

        Parameters
        ----------
        items : Iterable[str]
            Iterable of class names.
        """
        super().extend(item.strip() for item in items if item.strip())
        self._sync()

    def insert(self, index: int, item: str) -> None:
        """
        Insert a class name at a given position.

        Parameters
        ----------
        index : int
            Position to insert at.
        item : str
            Class name to insert.
        """
        super().insert(index, item.strip())
        self._sync()

    def remove(self, value: str) -> None:
        """
        Remove a class name if it exists.

        Parameters
        ----------
        value : str
            Class name to remove.
        """
        super().remove(value.strip())
        self._sync()


class select(list):
    """
    A list-like proxy object that applies attribute access, method calls,
    and mutations across multiple DOM elements selected by a selector.

    This class enables vectorized-style operations over selected elements.
    """

    def __init__(self, selector: str) -> None:
        """
        Initialize the selection.

        Parameters
        ----------
        selector : str
            Selector string used to query the document.
        """
        super().__init__(document_.select(selector))

    def __getattr__(self, attr: str) -> Callable[..., List[Any]]:
        """
        Proxy attribute access and method calls to all selected elements.

        Special attributes are mapped to helper contexts.
        """
        if attr == "style":
            return self._style()

        if attr == "styles":
            return self._styles()

        if attr == "classes":
            return self._classes()

        if attr == "bind":
            return self._bind()

        def proxy(*args: Any, **kwargs: Any) -> List[Any]:
            return [
                getattr(element, attr)(*args, **kwargs)
                for element in self
                if hasattr(element, attr)
            ]

        return proxy

    def __setattr__(self, attr: str, value: Any) -> None:
        """
        Set an attribute on all selected elements.

        Internal attributes are set on the Select instance itself.
        """
        if attr.startswith("_"):
            super().__setattr__(attr, value)
            return

        for element in self:
            setattr(element, attr, value)

    def _style(self) -> Any:
        """
        Return a style proxy that assigns style attributes to all elements.
        """

        class Style:
            def __setattr__(cls, attr: str, value: Any) -> None:
                for element in self:
                    setattr(element.style, attr, value)

        return Style()

    def _classes(self) -> Any:
        """
        Return a class proxy that applies class mutations to all elements.
        """

        class Classes:
            def __getattr__(cls, attr: str) -> Callable[..., List[Any]]:
                # PSS: Ensured class_context is initialized once per element
                for element in self:
                    if not hasattr(element, "classes"):
                        element.classes = class_context(element, element.class_name)

                def proxy(*args: Any, **kwargs: Any) -> List[Any]:
                    return [
                        getattr(element.classes, attr)(*args, **kwargs)
                        for element in self
                    ]

                return proxy

        return Classes()

    def _styles(self) -> Any:
        """
        Return a style context proxy for batch style manipulation.
        """

        class Styles:
            def __getattr__(cls, attr: str) -> List[Any]:
                for element in self:
                    if not hasattr(element, "styles"):
                        element.styles = style_context(element)
                return [getattr(element.styles, attr) for element in self]

            def __setattr__(cls, attr: str, value: Any) -> None:
                for element in self:
                    if not hasattr(element, "styles"):
                        element.styles = style_context(element)
                    setattr(element.styles, attr, value)

        return Styles()

    def _bind(self) -> Any:
        """
        Return an event binding proxy.
        """

        class Bind:
            def __call__(cls, event: str, fn: Callable[..., Any]) -> List[Any]:
                return [element.bind(event, fn) for element in self]

        return Bind()

    def __le__(self, other: Any) -> None:
        """
        Apply the ``<=`` operator to all selected elements.
        """
        for element in self:
            element <= other


class html_context:
    """
    Context manager for building hierarchical HTML-like structures.

    This class enables implicit parent-child relationships between elements
    using Python's ``with`` statement.

    The most recently entered element becomes the parent of subsequently
    entered elements unless overridden explicitly.
    """

    _context_stack: ClassVar[List[Any]] = []

    def __init__(self, element: Any) -> None:
        """
        Initialize the HTML context.

        Parameters
        ----------
        element : Any
            An element that supports the ``<=`` operator for parent-child
            attachment and may optionally expose a ``child_`` attribute.
        """
        self._element: Any = element
        self._parent: Optional[Any] = (
            self._context_stack[-1] if self._context_stack else None
        )

    def __enter__(self) -> Any:
        """
        Enter the HTML context.

        Automatically attaches the current element to the active parent
        and pushes it onto the context stack.

        Returns
        -------
        Any
            The active element for this context.
        """
        if hasattr(self._element, "child_"):
            self._element = self._element.child_

        if self._parent is not None:
            self._parent <= self._element

        self._context_stack.append(self._element)
        return self._element

    def __exit__(
        self,
        exc_type: type | None,
        exc_val: BaseException | None,
        exc_tb: Any,
    ) -> None:
        """
        Exit the HTML context and restore the previous parent.
        """
        if self._context_stack:
            self._context_stack.pop()

    def __setattr__(self, attr: str, value: Any) -> None:
        """
        Delegate attribute assignment to the underlying element when possible.
        """
        if attr.startswith("_"):
            super().__setattr__(attr, value)
            return

        if hasattr(self._element, attr):
            setattr(self._element, attr, value)
        else:
            super().__setattr__(attr, value)

    def __call__(self, parent: Any) -> "html_context":
        """
        Explicitly attach this context's element to a parent element.

        Parameters
        ----------
        parent : Any
            The parent element.

        Returns
        -------
        html_context
            The current context instance.
        """
        # PSS: Allowed manual parent override outside context stack
        self._parent = parent
        self._parent <= self._element
        return self


class Element:
    """
    Dynamic HTML element factory and initializer.

    This class allows HTML tags to be created via attribute access
    (e.g. ``html.DIV(...)``) while automatically wiring class, style,
    and context helpers.
    """

    def __init__(self, element: Any | None = None) -> None:
        """
        Initialize the Element wrapper.

        Parameters
        ----------
        element : Any, optional
            An existing HTML element to wrap.
        """
        self._element: Any | None = element

    def __getattr__(self, attr: str) -> Callable[..., Any]:
        """
        Dynamically create or wrap an HTML element.

        Attribute access is interpreted as an HTML tag factory.
        """

        # intercepting internal attribute access and breaking Python internals
        def factory(*args: Any, **kwargs: Any) -> Any:
            # Convert Python-style kwargs to HTML-style attributes
            attrs: Dict[str, Any] = {
                key.removesuffix("_").replace("_", "-"): value
                for key, value in kwargs.items()
            }

            if self._element is not None:
                html_element = self._element
            else:
                html_element = getattr(html_, attr)(*args, **attrs)

            html_element.classes = class_context(html_element, attrs.get("class", ""))
            html_element.context = html_context(html_element)

            try:
                html_element.styles = style_context(html_element)
            except AttributeError:
                html_element.styles = None

            return html_element

        return factory

    def __call__(self, element: Any) -> Any:
        """
        Wrap an element inside a container element.

        Parameters
        ----------
        element : Any
            Element to wrap.

        Returns
        -------
        Any
            Container element with ``child_`` reference.
        """
        container = html.DIV(element)
        container.child_ = element
        return container


html = Element()
