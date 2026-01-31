from radiant.core import select, html, Element


class BythonServer:
    select = select
    html = html

    def enhance(self, element):
        return Element(element)
