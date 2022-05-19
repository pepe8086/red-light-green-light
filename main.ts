input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    list = []
    state = NEWGAME
    basic.pause(1000)
    music.playMelody("D - D - D - C5 C5 ", 100)
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
let state = 0
let list: number[] = []
let REDLIGHT = 0
let GREENLIGHT = 0
let NEWGAME = 0
basic.showString(control.deviceName())
NEWGAME = 0
GREENLIGHT = 1
REDLIGHT = 2
radio.setGroup(1)
radio.setTransmitSerialNumber(true)
list = []
basic.forever(function () {
    radio.sendNumber(state)
})
