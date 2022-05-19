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
function debugMessage (name: string, value: number) {
    basic.showString(name)
    basic.showString("" + (value))
}
input.onButtonPressed(Button.B, function () {
    state = REDLIGHT
    basic.showIcon(IconNames.No)
    music.playMelody("E C D C E D C D ", 40)
})
radio.onReceivedValue(function (name, value) {
    debugMessage(name, value)
    if (name == "new" && state == 0) {
        players.push(value)
    } else if (name == "new" && state == 2) {
        players.removeAt(players.indexOf(value))
    }
    basic.showNumber(players.length)
})
let players: number[] = []
let state = 0
let REDLIGHT = 0
let GREENLIGHT = 0
let NEWGAME = 0
NEWGAME = 0
GREENLIGHT = 1
REDLIGHT = 2
state = NEWGAME
radio.setGroup(1)
radio.setTransmitSerialNumber(true)
players = []
basic.forever(function () {
    radio.sendValue("state", state)
    basic.pause(100)
})
