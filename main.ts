let Distance = 0
basic.forever(function () {
    Distance = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    if (Distance > 10) {
        rekabit.runMotor(MotorChannel.All, MotorDirection.Forward, 85)
        rekabit.setAllRgbPixelsColor(0x007fff)
    } else {
        rekabit.brakeMotor(MotorChannel.All)
        rekabit.setAllRgbPixelsColor(0xff0000)
        basic.pause(300)
        rekabit.runMotor(MotorChannel.All, MotorDirection.Backward, 85)
        basic.pause(1200)
        rekabit.brakeMotor(MotorChannel.M1)
        rekabit.runMotor(MotorChannel.M2, MotorDirection.Forward, 85)
        basic.pause(1500)
    }
})
