from browser import window

app = window.getLibrary()
app.start()

sprite = app.sprite("ship.png")
app.add(sprite)

def update():
    if(app.input.check("W")):
        sprite.setY(sprite.getY() - 1)

    if(app.input.check("S")):
        sprite.setY(sprite.getY() + 1)

    if(app.input.check("A")):
        sprite.setX(sprite.getX() - 1)

    if(app.input.check("D")):
        sprite.setX(sprite.getX() + 1)

    if(app.input.mouse.down):
        app.log("Downnnnn")

app.loop(update)
