from radiant.framework.server import RadiantAPI, RadiantServer
from radiant.framework import html
from interpreter import Interpreter


########################################################################
class BareMinimum(RadiantAPI):

    # ----------------------------------------------------------------------
    def __init__(self, *args, **kwargs):
        """"""
        super().__init__(*args, **kwargs)
        self.welcome()


if __name__ == '__main__':
    BareMinimum()
