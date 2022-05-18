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
let REDLIGHT = 0
let GREENLIGHT = 0
basic.showString(control.deviceName())
GREENLIGHT = 1
REDLIGHT = 2
radio.setGroup(1)
basic.forever(function () {
    radio.sendNumber(state)
})
