#!bryhton

from radiant.framework.server import RadiantAPI, RadiantServer
from browser import document, html

# Material 3
# https://m3.material.io/develop/web
import md


# Configure Material Symbols
# https://fonts.google.com/icons?icon.set=Material+Symbols
from material_symbols import configure, ms
configure('outlined', 0, 100, 0, 48)


########################################################################
class BareMinimum(RadiantAPI):

    # ----------------------------------------------------------------------
    def __init__(self, *args, **kwargs):
        """"""
        super().__init__(*args, **kwargs)
        body = document.select_one('body')

        body <= html.H1('Radiant-Framework: Material 3')

        body <= md.elevated_button(label='Elevated')
        body <= md.filled_button(label='Filled')
        body <= md.outlined_button(label='Oulined')
        body <= md.text_button(label='Text')
        body <= md.tonal_button(label='Tonal')
        body <= html.BR()

        body <= html.P('Lorem ipsum...')
        body <= md.divider()
        body <= html.P('Lorem ipsum...')
        body <= md.divider(inset=True)
        body <= html.P('Lorem ipsum...')
        body <= md.divider(inset_start=True)
        body <= html.P('Lorem ipsum...')
        body <= html.BR()

        body <= md.checkbox()
        body <= md.checkbox(indeterminate=True)
        body <= md.checkbox(checked=True)
        body <= html.BR()

        body <= md.fab(icon="add")
        body <= md.fab_extended(label='Fab Extended', icon="search")
        body <= html.BR()

        menu_button = md.menu_button()
        menu = md.menu(slot='menu')
        menu <= md.menu_item(headline="Item 1")
        menu <= md.menu_item(headline="Item 2")
        menu <= md.menu_item(headline="Item 3")
        menu <= md.menu_item(headline="Item 4")
        menu_button <= md.standard_icon_button(slot="button", icon="more_vert")
        menu_button <= menu
        body <= menu_button
        body <= html.BR()

        navigation_bar = md.navigation_bar()
        tab1 = md.navigation_tab(label="Home")
        tab1 <= md.icon('home', slot="activeIcon")
        tab1 <= md.icon('home', slot="inactiveIcon")
        tab2 = md.navigation_tab(label="Settings", badgeValue="New", showBadge="true")
        tab2 <= md.icon('settings', slot="activeIcon")
        tab2 <= md.icon('settings', slot="inactiveIcon")
        navigation_bar <= tab1
        navigation_bar <= tab2
        body <= navigation_bar
        body <= html.BR()

        sb = md.outlined_segmented_button_set(multiselect=True)
        sb <= md.outlined_segmented_button(label="Songs")
        sb <= md.outlined_segmented_button(label="Albums")
        sb <= md.outlined_segmented_button(label="Podcasts")
        body <= sb
        body <= html.BR()

        body <= md.radio(name="radiotest")
        body <= md.radio(name="radiotest", checked=True)
        body <= md.radio(name="radiotest")
        body <= html.BR()

        body <= md.switch()
        body <= html.BR()

        md.outlined_text_field(label="Label text for outlined text field", supportingText="Supporting text can be here")
        md.filled_text_field(label="Label text for outlined text field")


if __name__ == '__main__':

    RadiantServer('BareMinimum',
                  brython_version='3.10.5',
                  modules=[
                      'md',  # to enable Material 3
                      'material_symbols',  # to enable Material Symbols
                      'material_icons',  # to enable Material Icon
                  ],
                  )
