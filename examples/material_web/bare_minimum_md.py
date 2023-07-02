from radiant.framework.server import RadiantAPI, RadiantServer, Environ
from browser import document, html

# Material 3
# https://m3.material.io/develop/web
import material_3 as md


# Configure Material Symbols
# https://fonts.google.com/icons?icon.set=Material+Symbols
# from material_symbols import configure
# configure('outlined', 0, 100, 0, 48)


########################################################################
class BareMinimum(RadiantAPI):

    # ----------------------------------------------------------------------
    def __init__(self, *args, **kwargs):
        """"""
        super().__init__(*args, **kwargs)
        body = document.select_one('body')
        container = document.select_one('body')

        section = html.SECTION()
        section <= html.P('Lorem ipsum...')
        section <= html.BR()
        section <= md.divider()
        section <= html.BR()
        section <= html.P('Lorem ipsum...')

        container <= section

        body <= html.H1('Radiant-Framework: Material 3')

        body <= md.icon('settings')
        body <= md.icon('check_box')
        body <= md.icon('house')

        body <= md.icon('settings', filled=True)
        body <= md.icon('check_box', filled=True)
        body <= md.icon('house', filled=True)
        body <= html.BR()

        body <= md.icon('settings', rounded=True)
        body <= md.icon('check_box', rounded=True)
        body <= md.icon('house', rounded=True)

        body <= md.icon('settings', filled=True, rounded=True)
        body <= md.icon('check_box', filled=True, rounded=True)
        body <= md.icon('house', filled=True, rounded=True)
        body <= html.BR()

        body <= md.icon('settings', rounded=True, sharp=True)
        body <= md.icon('check_box', rounded=True, sharp=True)
        body <= md.icon('house', rounded=True, sharp=True)

        body <= md.icon('settings', filled=True, rounded=True, sharp=True)
        body <= md.icon('check_box', filled=True, rounded=True, sharp=True)
        body <= md.icon('house', filled=True, rounded=True, sharp=True)
        body <= html.BR()

        body <= md.elevated_button('Elevated')
        body <= md.filled_button('Filled')
        body <= md.outlined_button('Oulined')
        body <= md.text_button('Text')
        body <= md.tonal_button('Tonal')
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

        # body <= md.fab(icon="add")
        # body <= md.fab_extended(label='Fab Extended', icon="search")
        # body <= html.BR()

        # menu_button = md.menu_button()
        # menu = md.menu(slot='menu')
        # menu <= md.menu_item(headline="Item 1")
        # menu <= md.menu_item(headline="Item 2")
        # menu <= md.menu_item(headline="Item 3")
        # menu <= md.menu_item(headline="Item 4")
        # menu_button <= md.standard_icon_button(slot="button", icon="more_vert")
        # menu_button <= menu
        # body <= menu_button
        # body <= html.BR()

        navigation_bar = md.navigation_bar()
        tab1 = md.navigation_tab(label="Home")
        tab1 <= md.icon('home', slot="activeIcon")
        tab1 <= md.icon('home', slot="inactiveIcon")
        tab2 = md.navigation_tab(
            label="Settings", badgeValue="New", showBadge="true")
        tab2 <= md.icon('settings', slot="activeIcon")
        tab2 <= md.icon('settings', slot="inactiveIcon")
        navigation_bar <= tab1
        navigation_bar <= tab2
        body <= navigation_bar
        body <= html.BR()

        # <md-standard-icon-button>check</md-standard-icon-button>
        # <md-filled-icon-button>check</md-filled-icon-button>
        # <md-filled-tonal-icon-button>check</md-filled-tonal-icon-button>
        # <md-outlined-icon-button>check</md-outlined-icon-button>

        body <= md.standard_icon_button('check')
        body <= md.filled_icon_button('check')
        body <= md.filled_tonal_icon_button('check')
        body <= md.outlined_icon_button('check')
        body <= html.BR()

        toggle_btn = md.standard_icon_button(toggle=True)
        toggle_btn <= html.SPAN('close')
        toggle_btn <= html.SPAN('check', slot="selectedIcon")
        body <= toggle_btn

        toggle_btn = md.filled_icon_button(toggle=True)
        toggle_btn <= html.SPAN('close')
        toggle_btn <= html.SPAN('check', slot="selectedIcon")
        body <= toggle_btn

        toggle_btn = md.filled_tonal_icon_button(toggle=True)
        toggle_btn <= html.SPAN('close')
        toggle_btn <= html.SPAN('check', slot="selectedIcon")
        body <= toggle_btn

        toggle_btn = md.outlined_icon_button(toggle=True)
        toggle_btn <= html.SPAN('close')
        toggle_btn <= html.SPAN('check', slot="selectedIcon")
        body <= toggle_btn

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

        body <= md.outlined_text_field(
            label="Label text for outlined text field", supportingText="Supporting text can be here")
        body <= html.BR()
        body <= md.filled_text_field(
            label="Label text for outlined text field")

        body <= html.BR()
        body <= md.linear_progress(progress="0.5")
        body <= html.BR()
        body <= md.linear_progress(indeterminate=True)
        body <= html.BR()

        body <= html.BR()
        body <= md.circular_progress(progress="0.75")
        body <= md.circular_progress(indeterminate=True)

        body <= html.BR()

        surface = html.DIV()
        surface.style = {
            'position': 'relative',
            'border-radius': '16px',
            'height': '64px',
            'width': '64px',
        }
        surface.style.setProperty('--md-elevation-level', '3')
        surface <= md.elevation()
        body <= surface

        print(Environ.modules)


if __name__ == '__main__':

    RadiantServer('BareMinimum',
                  port='5005',
                  brython_version='3.11.2',
                  modules=[
                      'md_git',  # to enable Material 3
                      # 'md',  # to enable Material 3
                      'material_symbols',  # to enable Material Symbols
                      'material_icons',  # to enable Material Icon
                  ],
                  environ={'HOLA': 'Mundo', }
                  )

