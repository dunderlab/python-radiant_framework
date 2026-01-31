import json
from typing import Any, Callable

from browser import timer, websocket


class WebSocket:
    """
    A lightweight WebSocket client wrapper for Brython.

    Handles connection lifecycle, automatic send retry until connected,
    and JSON serialization for non-string payloads.
    """

    def __init__(self, ip: str) -> None:
        """
        Initialize the WebSocket connection.

        Parameters
        ----------
        ip : str
            WebSocket URL (e.g. ``ws://localhost:8888`` or ``wss://example/ws``).
        """
        if not websocket.supported:
            raise RuntimeError("WebSocket is not supported by your browser")

        self.ip_: str = ip
        self.ws = websocket.WebSocket(ip)

        # Bind WebSocket events
        self.ws.bind("open", self.on_open)
        self.ws.bind("error", self.on_error)
        self.ws.bind("message", self.on_message)
        self.ws.bind("close", self.on_close)

        # PSS: Clarified endpoint parsing
        endpoint = ip.replace("wss://", "").replace("ws://", "").replace("/ws", "")

        self.endpoint: str = endpoint
        self.protocol: str = "wss" if ip.startswith("wss://") else "ws"

    # ---------------- Event handlers ---------------- #

    def on_open(self, evt: Any) -> None:
        """
        Called when the WebSocket connection opens.
        """
        pass

    def on_error(self, evt: Any) -> None:
        """
        Called when a WebSocket error occurs.
        """
        pass

    def on_message(self, evt: Any) -> None:
        """
        Called when a message is received.
        """
        pass

    def on_close(self, evt: Any) -> None:
        """
        Called when the WebSocket connection closes.
        """
        pass

    # ---------------- Public API ---------------- #

    def send(self, data: Any) -> None:
        """
        Send data through the WebSocket.

        Automatically waits for the connection to be ready.

        Parameters
        ----------
        data : Any
            Data to send. Objects are JSON-serialized.
        """
        self._wait_for_connection(self._send, data)

    def close_connection(self) -> None:
        """
        Close the WebSocket connection.
        """
        self.ws.close()

    # ---------------- Internal helpers ---------------- #

    def _wait_for_connection(
        self,
        callback: Callable[[Any], None],
        data: Any,
        delay: int = 1000,
    ) -> None:
        """
        Wait until the WebSocket is open before sending data.

        Parameters
        ----------
        callback : callable
            Function to call once connected.
        data : Any
            Data to pass to the callback.
        delay : int, optional
            Retry delay in milliseconds.
        """
        # Explicit readyState check (1 = OPEN)
        if self.ws.readyState == 1:
            callback(data)
        else:
            timer.set_timeout(
                lambda: self._wait_for_connection(callback, data, delay),
                delay,
            )

    def _send(self, data: Any) -> None:
        """
        Send data immediately through the WebSocket.
        """
        if data is None:
            return

        # Explicit JSON serialization for non-string payloads
        if isinstance(data, (str, bytes)):
            self.ws.send(data)
        else:
            self.ws.send(json.dumps(data))
