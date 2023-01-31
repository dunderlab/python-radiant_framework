#!pyscript

from radiant.framework.server import RadiantAPI


########################################################################
class BareMinimum(RadiantAPI):

    # ----------------------------------------------------------------------
    def __init__(self):
        print('Radiant-Framework')


if __name__ == '__main__':
    BareMinimum()
