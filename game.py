from browser import window

app = window.getLibrary()
app.start()

speed = 3

left = app.sprite("paddle.png")
left.setX(8)
app.add(left)

right = app.sprite("paddle.png")
right.setX(800 - 24)
app.add(right)

def update():
    if(app.input.check("W")):
        left.setY(left.getY() - speed)

    if(app.input.check("S")):
        left.setY(left.getY() + speed)

    if(app.input.check("I")):
        right.setY(right.getY() - speed)

    if(app.input.check("K")):
        right.setY(right.getY() + speed)

app.loop(update)
