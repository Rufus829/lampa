let Ljus = input.lightLevel()
basic.forever(function () {
    Ljus = input.lightLevel()
    Ljus = Ljus * 4
    basic.showNumber(Ljus)
    basic.pause(2000)
})
