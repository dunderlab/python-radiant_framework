from radiant.framework.server import RadiantCore


########################################################################
class BareMinimum(RadiantCore):

    # ----------------------------------------------------------------------
    def __init__(self, *args, **kwargs):
        """"""
        super().__init__(*args, **kwargs)
        self.welcome()


if __name__ == '__main__':
    BareMinimum()
