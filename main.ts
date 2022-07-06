input.onButtonPressed(Button.A, function () {
    strip.shift(1)
    strip.show()
})
input.onButtonPressed(Button.B, function () {
    strip.rotate(1)
    strip.show()
})
let strip: neopixel.Strip = null
music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Forever)
strip = neopixel.create(DigitalPin.P0, 6, NeoPixelMode.RGB)
strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Orange))
strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Yellow))
strip.setPixelColor(3, neopixel.rgb(0, 255, 0))
strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Blue))
strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Indigo))
strip.show()
basic.forever(function () {
    strip.rotate(1)
    strip.show()
    basic.pause(1)
})
