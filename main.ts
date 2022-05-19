input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    players = []
    state = NEWGAME
    basic.pause(1000)
    music.playMelody("D - D - D - C5 C5 ", 100)
    basic.showNumber(players.length)
    basic.pause(1000)
})
input.onButtonPressed(Button.A, function () {
    state = GREENLIGHT
    basic.showIcon(IconNames.Yes)
    music.playMelody("E C D C E D C D ", 329)
})
input.onButtonPressed(Button.B, function () {
    state = REDLIGHT
    basic.showIcon(IconNames.No)
})
radio.onReceivedValue(function (name, value) {
    basic.showString(name)
    basic.showString("" + (value))
    if (name == "new") {
        players.push(value)
    } else if (name == "eliminated") {
        players.removeAt(players.indexOf(value))
        basic.showNumber(players.length)
    }
})
let state = 0
let players: number[] = []
let REDLIGHT = 0
let GREENLIGHT = 0
let NEWGAME = 0
basic.showString(control.deviceName())
NEWGAME = 0
GREENLIGHT = 1
REDLIGHT = 2
radio.setGroup(1)
radio.setTransmitSerialNumber(true)
players = []
basic.forever(function () {
    radio.sendNumber(state)
})
