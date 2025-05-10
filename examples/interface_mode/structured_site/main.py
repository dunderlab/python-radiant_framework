"""
Radiant Modular Multipage Example – Entry Point

This script serves as the main launcher for a structured multipage application
built using the Radiant framework. Configuration details such as host, port,
pages, and Brython version are centralized in `settings.py`.

The application structure separates routing (urls.py), configuration (settings.py),
and page definitions (under pages/) to support maintainability and scalability.

Execution begins here by loading the settings and launching the Radiant server.
"""

# Load configuration and launch server

from radiant.framework.server import launch_from_settings
import settings


launch_from_settings(settings)
