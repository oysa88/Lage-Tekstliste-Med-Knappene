input.onButtonPressed(Button.A, function () {
    note = teksttabell[index++]
    basic.showString("" + (note))
    basic.pause(100)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    for (let indeks = 0; indeks <= notetabell.length - 1; indeks++) {
        radio.sendString("" + (notetabell[indeks]))
    }
})
input.onButtonPressed(Button.AB, function () {
    notetabell = []
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    basic.pause(200)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    notetabell.push(note)
    index = 0
})
let note = ""
let teksttabell: string[] = []
let notetabell: string[] = []
let index = 0
notetabell = []
teksttabell = [
"C",
"D",
"E",
"F",
"G",
"A",
"H"
]
