package;

import js.Browser;
import js.html.KeyboardEvent;

class LMInput{

    private var keys = [];

    public function new(){  
        for(i in 0...256){
            keys.push(false);
        }

        Browser.document.onkeydown = _keyDown;
        Browser.document.onkeyup = _keyUp;
    }

    public function check(k:String){
        k = k.toUpperCase();
        var key = k.charCodeAt(0);
        return keys[key];
    }  

    private function _keyDown(e:KeyboardEvent){
        keys[e.keyCode] = true;
    }

    private function _keyUp(e:KeyboardEvent){
        keys[e.keyCode] = false;
    }

}