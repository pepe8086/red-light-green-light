radio.onReceivedNumber(function (receivedNumber) {
    state = receivedNumber
})
let movement = 0
let state = 0
let NEWGAME = 0
let GREENLIGHT = 1
let REDLIGHT = 2
radio.setTransmitSerialNumber(true)
radio.setTransmitPower(3)
radio.setGroup(1)
basic.forever(function () {
    if (state == GREENLIGHT) {
        basic.showIcon(IconNames.Yes)
    } else if (state == REDLIGHT) {
        basic.showIcon(IconNames.No)
        movement = Math.abs(input.acceleration(Dimension.Strength) - 1000)
        if (movement >= 250) {
            game.gameOver()
            radio.sendValue("eliminated", control.deviceSerialNumber())
        }
    } else if (state == NEWGAME) {
        radio.sendValue("new", control.deviceSerialNumber())
    }
})
