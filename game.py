from browser import window

game = window.getLibrary()
game.start()
game.clear("black")

sprite = game.sprite("ship.png")
text = game.text("Hello!")
text.font = "Arial";
text.y = 100

def update():

    if(game.input.check("W")):
        sprite.y -= 1

    if(game.input.check("S")):
        sprite.y += 1

    if(game.input.check("A")):
        sprite.x -= 1

    if(game.input.check("D")):
        sprite.x += 1

    game.clear("black")
    game.draw(sprite)
    game.draw(text)

game.loop(update)
