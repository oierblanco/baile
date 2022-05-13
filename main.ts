input.onButtonPressed(Button.A, function () {
    led2 = 1
    for (let index = 0; index < 4; index++) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 75)
        basic.pause(500)
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
        basic.pause(100)
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, 75)
        basic.pause(500)
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
        basic.pause(100)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 75)
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CCW, 75)
        basic.pause(275)
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
        basic.pause(100)
    }
    DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 75)
    basic.pause(2200)
    DFRobotMaqueenPlus.mototStop(Motors.ALL)
    basic.pause(100)
    basic.showIcon(IconNames.Square)
    basic.pause(100)
    basic.showIcon(IconNames.SmallSquare)
    basic.pause(100)
    basic.showIcon(IconNames.Square)
    basic.pause(100)
    basic.showIcon(IconNames.SmallSquare)
    basic.pause(100)
    for (let index = 0; index < 2; index++) {
        basic.showIcon(IconNames.Confused)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . # . #
            . # . # .
            `)
    }
    for (let index = 0; index < 3; index++) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 75)
        basic.pause(100)
        DFRobotMaqueenPlus.mototStop(Motors.M1)
        basic.pause(100)
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, 75)
        basic.pause(100)
        DFRobotMaqueenPlus.mototStop(Motors.M1)
        basic.pause(100)
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 75)
        basic.pause(100)
        DFRobotMaqueenPlus.mototStop(Motors.M1)
        basic.pause(100)
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, 75)
        basic.pause(100)
        DFRobotMaqueenPlus.mototStop(Motors.M1)
        basic.pause(100)
    }
    DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 75)
    DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CCW, 75)
    basic.pause(2150)
    DFRobotMaqueenPlus.mototStop(Motors.ALL)
    basic.pause(100)
    DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 75)
    DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, 75)
    basic.pause(2075)
    DFRobotMaqueenPlus.mototStop(Motors.ALL)
    basic.pause(100)
})
let led2 = 0
DFRobotMaqueenPlus.I2CInit()
led2 = 0
basic.forever(function () {
    while (led2 == 1) {
        for (let index = 0; index < 4; index++) {
            DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.CYAN)
            basic.pause(100)
            DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.RED)
            basic.pause(100)
        }
    }
})
