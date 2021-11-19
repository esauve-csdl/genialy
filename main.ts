let Applaudissements = 0
input.onButtonPressed(Button.A, function () {
    Applaudissements = 1
})
basic.forever(function () {
    Applaudissements = 0
    basic.showString("Musique")
    for (let index = 0; index < 2; index++) {
        music.playTone(330, music.beat(BeatFraction.Whole))
        music.playTone(311, music.beat(BeatFraction.Whole))
    }
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(247, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(220, music.beat(BeatFraction.Whole))
    basic.pause(2000)
})
basic.forever(function () {
    if (Applaudissements == 1) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
