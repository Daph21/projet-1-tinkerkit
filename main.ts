basic.forever(function () {
    if (tinkercademy.ADKeyboard(ADKeys.A, AnalogPin.P2)) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else if (tinkercademy.ADKeyboard(ADKeys.B, AnalogPin.P2)) {
        music.playTone(349, music.beat(BeatFraction.Whole))
    } else if (tinkercademy.ADKeyboard(ADKeys.C, AnalogPin.P2)) {
        music.playTone(196, music.beat(BeatFraction.Whole))
    } else if (tinkercademy.ADKeyboard(ADKeys.D, AnalogPin.P2)) {
        music.playTone(659, music.beat(BeatFraction.Whole))
    } else if (tinkercademy.ADKeyboard(ADKeys.E, AnalogPin.P2)) {
        music.playTone(880, music.beat(BeatFraction.Whole))
    }
})
