from radiant.framework.server import RadiantServer
import settings

# ----------------------------------------------------------------------
def passs(*args, **kwargs):
    """"""


# ----------------------------------------------------------------------
def main(*args, **kwargs):
    """"""
    RadiantServer(**{k.lower(): getattr(settings, k) for k in dir(settings)})


if __name__ == '__main__':
    main()

