from browser import window

game = window.getLibrary()
game.start()
game.clear("black")

sprite = game.sprite("ship.png")
sprite.x = 10
sprite.y = 10

def update():
    game.clear("black")
    sprite.x += 1
    sprite.y += 1
    game.draw(sprite)

game.loop(update)
