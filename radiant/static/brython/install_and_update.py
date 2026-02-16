import os
import subprocess
from typing import List
import shutil


def dist_name() -> str:
    """
    Get the Brython distribution name based on the installed version.

    Returns
    -------
    str
        Distribution directory name (e.g. ``brython-3.13.1``).
    """
    command: List[str] = ["brython-cli", "--version"]

    result = subprocess.run(
        command,
        capture_output=True,
        text=True,
        check=True,
    )

    return result.stdout.strip().replace(" version ", "-")


def run_command_on_dir(command: List[str], dir_name: str) -> None:
    """
    Run a shell command inside a specific directory.

    Parameters
    ----------
    command : list[str]
        Command to execute.
    dir_name : str
        Target directory.
    """
    original_dir = os.getcwd()
    try:
        os.chdir(dir_name)
        result = subprocess.run(command, capture_output=True, text=True)
        print(result.stdout)
    finally:
        os.chdir(original_dir)


def install_brython_dist(dir_name: str) -> None:
    """
    Ensure a Brython distribution directory exists and is populated.

    Parameters
    ----------
    dir_name : str
        Distribution directory name.
    update : bool, optional
        Whether to update an existing distribution.
    """
    if os.path.exists(dir_name):
        shutil.rmtree(dir_name)

    os.mkdir(dir_name)

    run_command_on_dir(
        ["brython-cli", "install"],
        dir_name,
    )


def main() -> None:
    """
    Prepare Brython distribution directories.
    """
    versioned_dir = dist_name()
    install_brython_dist(versioned_dir)
    install_brython_dist("Brython-latest")


if __name__ == "__main__":
    main()
