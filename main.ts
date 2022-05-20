input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    players = []
    state = NEWGAME
    sendState("state", state)
    music.playMelody("D - D - D - C5 C5 ", 100)
    basic.pause(1000)
    music.stopAllSounds()
    basic.showNumber(players.length)
})
input.onButtonPressed(Button.A, function () {
    state = GREENLIGHT
    sendState("state", state)
    basic.showIcon(IconNames.Yes)
    music.playMelody("E C D C E D C D ", 323)
    music.stopAllSounds()
})
function debugMessage (name: string, value: number) {
    basic.showString(name)
    basic.showString("" + (value))
}
input.onButtonPressed(Button.B, function () {
    state = REDLIGHT
    sendState("state", state)
    basic.showIcon(IconNames.No)
    music.playMelody("E C D C E D C D ", 42)
    basic.pause(2000)
    music.stopAllSounds()
    basic.showNumber(players.length)
})
radio.onReceivedValue(function (name, value) {
    if (name == "new" && state == NEWGAME) {
        if (players.indexOf(value) == -1) {
            players.push(value)
        }
    } else if (name == "eliminated") {
        basic.showString(name)
        players.removeAt(players.indexOf(value))
        basic.showNumber(players.length)
    }
})
function sendState (text: string, num: number) {
    radio.sendValue(text, num)
}
let players: number[] = []
let state = 0
let NEWGAME = 0
let REDLIGHT = 0
let GREENLIGHT = 0
GREENLIGHT = 1
REDLIGHT = 2
NEWGAME = 3
let PATIENCE = 4
state = PATIENCE
radio.setGroup(1)
radio.setTransmitSerialNumber(true)
players = []
music.playTone(262, music.beat(BeatFraction.Whole))
basic.showIcon(IconNames.Ghost)
