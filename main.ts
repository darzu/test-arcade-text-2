let num = 0
scene.setBackgroundColor(3)
let textSprite = textsprite.create("WAVE 1")
textSprite.setOutline(3, 6)
textSprite.setMaxFontHeight(32)
textSprite.setPosition(58, 71)
let textSprite2 = textsprite.create("world 水")
textSprite2.setPosition(63, 25)
textSprite2.setOutline(2, 6)
textSprite.setVelocity(10, 10)
controller.moveSprite(textSprite2)
textSprite.setFlag(SpriteFlag.BounceOnWall, true)
game.onUpdateInterval(200, function () {
    textSprite.setText("WAVE" + num)
    num += 1
})
