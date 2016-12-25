package;

import pixi.core.textures.Texture;
import pixi.core.sprites.Sprite;
import pixi.core.display.Container;

class LMSprite extends LMEntity{

    var texture:Texture;
    var sprite:Sprite;

    public function new(path:String){
        super();

        this.texture = Texture.fromImage(path);
        this.sprite = new Sprite(texture);
    }  

    override function _updatePosition(){
        this.sprite.x = this.x;
        this.sprite.y = this.y;
    }

    override function add(stage:Container){
        stage.addChild(this.sprite);
    }

}