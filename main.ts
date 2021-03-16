input.onButtonPressed(Button.A, function () {
    sprite.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    sprite.change(LedSpriteProperty.Y, 1)
})
let score = 0
let empty_obstacles = 0
let ticks = 0
let sprite: game.LedSprite = null
let obstacles: game.LedSprite[] = []
sprite = game.createSprite(0, 2)
sprite.set(LedSpriteProperty.Blink, 300)
basic.forever(function () {
    while (obstacles.length > 0 && obstacles[0].get(LedSpriteProperty.X) == 0) {
        obstacles.removeAt(0).delete()
    }
    for (let obstacle of obstacles) {
        obstacle.change(LedSpriteProperty.X, -1)
    }
    if (ticks % 3 == 0) {
        empty_obstacles = randint(0, 4)
        for (let index = 0; index <= 4; index++) {
            if (index != empty_obstacles) {
                obstacles.push(game.createSprite(4, index))
            }
        }
    }
    for (let obstacle2 of obstacles) {
        if (obstacle2.get(LedSpriteProperty.X) == sprite.get(LedSpriteProperty.X) && obstacle2.get(LedSpriteProperty.Y) == sprite.get(LedSpriteProperty.Y)) {
            basic.showNumber(score)
            basic.showNumber(score)
            basic.showNumber(score)
            game.gameOver()
        }
    }
    ticks += 1
    score += 1
    basic.pause(1000 - ticks * 10)
})
