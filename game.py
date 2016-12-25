from browser import window

app = window.Lemming.get()
app.start()

obj = app.create.sprite("floor.png")
obj.setX(10)
obj.setY(10)
app.add(obj)

def update():
    if(app.input.check("w")):
        obj.move(0, -1)
    
    if(app.input.check("s")):
        obj.move(0, 1)

    if(app.input.check("a")):
        obj.move(-1, 0)

    if(app.input.check("d")):
        obj.move(1, 0)

app.loop(update)

