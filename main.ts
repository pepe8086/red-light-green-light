radio.onReceivedValue(function (name, value) {
    if (name == "winner") {
        music.stopAllSounds()
        if (value == control.deviceSerialNumber()) {
            basic.showIcon(IconNames.Happy)
            music.playMelody("F G A B B - B C5 ", 120)
            music.stopAllSounds()
        }
    }
    if (name == "state") {
        state = value
        if (state == GREENLIGHT) {
            basic.showIcon(IconNames.Yes)
        } else if (state == REDLIGHT) {
            basic.showIcon(IconNames.No)
        } else if (state == NEWGAME) {
            basic.showIcon(IconNames.Heart)
            game.addLife(1)
            radio.sendValue("new", control.deviceSerialNumber())
            basic.pause(randint(10, 500))
        }
    }
})
let rychlost = 0
let state = 0
let NEWGAME = 0
let REDLIGHT = 0
let GREENLIGHT = 0
GREENLIGHT = 1
REDLIGHT = 2
NEWGAME = 3
let PATIENCE = 4
radio.setTransmitSerialNumber(true)
radio.setTransmitPower(3)
radio.setGroup(1)
state = PATIENCE
basic.showIcon(IconNames.House)
basic.forever(function () {
    rychlost = Math.abs(input.acceleration(Dimension.Strength) - 1000)
    if (state == REDLIGHT && rychlost >= 250) {
        radio.sendValue("eliminated", control.deviceSerialNumber())
        state = PATIENCE
        basic.showIcon(IconNames.Skull)
        basic.showIcon(IconNames.Skull)
        basic.showIcon(IconNames.Skull)
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
        game.removeLife(1)
        music.stopAllSounds()
    }
})
