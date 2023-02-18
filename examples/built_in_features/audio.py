from radiant.framework.server import RadiantAPI, RadiantServer
from radiant.framework.sound import Audio

from browser import document, html

from mdc.MDCButton import MDCButton
from mdc.MDCFormField import MDCSelect


########################################################################
class MainApp(RadiantAPI):

    # ----------------------------------------------------------------------
    def __init__(self, *args, **kwargs):
        """"""
        super().__init__(*args, **kwargs)
        audio = Audio('mixkit-sports-rock-78.mp3')

        style = {
            'margin-top': '25vh',
            'width': '30vw',
            'display': 'grid',
            'grid-auto-flow': 'unset',
            'grid-row-gap': '10px',
            'margin-left': '35vw',
        }
        parent = html.DIV(style=style)

        # select = MDCSelect(
        # 'Tone', note_values.items(), outline=True, selected='B4'
        # )
        play_button = MDCButton("Play", raised=True)
        play_button.bind('click', audio.play)
        parent <= play_button

        pause_button = MDCButton("Pause", raised=True)
        pause_button.bind('click', audio.pause)
        parent <= pause_button

        stop_button = MDCButton("Stop", raised=True)
        stop_button.bind('click', audio.stop)
        parent <= stop_button

        audio1_button = MDCButton("Audio-1", raised=True)
        audio1_button.bind(
            'click', lambda *args: audio.load('mixkit-sports-rock-78.mp3')
        )
        parent <= audio1_button

        audio2_button = MDCButton("Audio-2", raised=True)
        audio2_button.bind(
            'click', lambda *args: audio.load('mixkit-daredevil-80.mp3')
        )
        parent <= audio2_button

        for volume in [0, 25, 50, 100]:
            volume_button = MDCButton(f"Volume {volume}%", raised=True)
            volume_button.bind('click', lambda evt, volume=volume: audio.set_gain(volume / 100))
            parent <= volume_button

        document <= parent


if __name__ == '__main__':
    RadiantServer('MainApp',
                  brython_version='3.10.5',
                  modules=['mdc']
                  )
