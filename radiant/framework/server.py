import sys
from . import RadiantAPI, RadiantServer, RadiantHandler, pyscript, PyScriptAPI, pyscript_globals, pyscript_init, delay


class fake:
    def __init__(self, *args, **kwargs):
        """"""

    def __getattr__(self, attr):
        return fake


brython = ['browser', 'browser.template', 'js', 'bootstrap', 'md', 'material_symbols']
for module in brython:
    sys.modules[f"{module}"] = fake()

modules = ['sound', 'icons', 'utils']
for module in modules:
    sys.modules[f"radiant.{module}"] = fake()

    components = [
        'MDCButton',
        'MDCChips',
        'MDCDialog',
        'MDCFormField',
        'MDCIcon',
        'MDCLayoutGrid',
        'MDCList',
        'MDCShape',
        'MDCTab',
        'MDCCard',
        'MDCComponent',
        'MDCDrawer',
        'MDCGridList',
        'MDCImageList',
        'MDCLinearProgress',
        'MDCMenu',
        'MDCSnackbar',
        'MDCTopAppBar',
    ]

for component in components:
    sys.modules[f"mdc.{component}"] = fake()

components = [
    'btn',
]
for component in components:
    sys.modules[f"bootstrap.{component}"] = fake()
