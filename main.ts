input.onButtonPressed(Button.A, function () {
    sprite = randint(0, 5)
    if (sprite == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (sprite == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # . # .
            . . . . .
            . . . . .
            `)
    } else if (sprite == 2) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . . . . .
            . # . # .
            . . . . .
            `)
    } else if (sprite == 3) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            `)
    } else if (sprite == 4) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . # # # .
            . . . . .
            . # # # .
            . . . . .
            `)
    }
})
let sprite = 0
basic.showString("Hello world")
music.playMelody("C5 B A G F E D C ", 120)
music.playMelody("C D E F G A B C5 ", 120)
music.playMelody("E B C5 A B G A F ", 120)
music.playMelody("A F E F D G E F ", 120)
music.playMelody("C5 A B G A F G E ", 120)
music.playMelody("G B A G C5 B A B ", 120)
music.playMelody("B A G A G F A C5 ", 120)
music.playMelody("G F G A - F E D ", 120)
