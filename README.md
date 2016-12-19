# Pyweb
Library for writing HTML5 games in Python.

## Stack
The library itself is written in Javascript and PIXI. It uses the Brython framework to compile your Python code into Javascript code which can be run by the browser. It is possible to use Pyweb without the Python component, however the framework is optimized for Python. 

## Technology

- Brython
  - Transpiles Python code into Javascript
- PIXI.js
  - Fast Canvas/WebGL renderer

## Example

The most basic example would be displaying a sprite on the screen. This can be achieved in a few lines.

```
from browser import window #imports the window

game = window.getLibrary() #gets the library
game.start() #starts the library

sprite = game.sprite("ship.png") #creates a sprite from "ship.png"
game.add(sprite) #adds it to the screen
```
