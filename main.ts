input.onButtonPressed(Button.A, function () {
    if (Start2 == 1) {
        if (ABAB == 1) {
            basic.clearScreen()
            basic.showNumber((input.runningTime() - Timer) / 1000)
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    if (Start2 == 1) {
        if (ABAB == 3) {
            basic.clearScreen()
            basic.showNumber((input.runningTime() - Timer) / 1000)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (Start2 == 1) {
        if (ABAB == 2) {
            basic.clearScreen()
            basic.showNumber((input.runningTime() - Timer) / 1000)
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    Picker()
})
function Picker () {
    if (Start2 == 1) {
        basic.clearScreen()
        Timer = 0
        ABAB = randint(1, 3)
        if (ABAB == 1) {
            basic.showString("A")
            Timer = input.runningTime()
        }
        if (ABAB == 2) {
            basic.showString("B")
            Timer = input.runningTime()
        }
        if (ABAB == 3) {
            basic.showString("AB")
            Timer = input.runningTime()
        }
    }
}
let ABAB = 0
let Start2 = 0
let Timer = 0
Timer = 0
Start2 = 1
Picker()
basic.forever(function () {
	
})
