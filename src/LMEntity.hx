package;

import pixi.core.display.Container;

class LMEntity{

    public var x:Int = 0;

    public var y:Int = 0;

    public function new(){

    }

    private function _updatePosition(){
        
    }

    public function getPosition(){
        return [this.x, this.y];
    }

    public function setPosition(x:Int, y:Int){
        this.x = x;
        this.y = y;
        _updatePosition();
        
    }  

    public function move(x:Int, y:Int){
        this.x += x;
        this.y += y;

        _updatePosition();
    }

    public function getX():Int{
        return this.x;
    }

    public function setX(n:Int):Int{
        this.x = n;
        _updatePosition();
        return this.x;
    }

    public function getY():Int{
        return this.y;
    }

    public function setY(n:Int):Int{
        this.y = n;
        _updatePosition();
        return this.y;
    }

    public function add(stage:Container){
        
    }

}