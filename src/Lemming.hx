package;

import js.Browser;
import pixi.core.display.Container;
import pixi.core.textures.Texture;
import pixi.core.renderers.SystemRenderer;
import pixi.core.renderers.Detector;
import pixi.core.sprites.Sprite;

class Lemming{

    var update:Void->Void;

    var stage:Dynamic;
    var renderer:Dynamic;

    /* components */
    var create:LMCreate;
    var input:LMInput;

    public function new(){
        create = new LMCreate();
        input = new LMInput();

        Browser.console.log("[Lemming] Components Loaded.");
    }

    public function start(){
        var options:RenderingOptions = {};
        options.backgroundColor = 0x00ff00;
        options.resolution = 1;

        stage = new Container();
        renderer = Detector.autoDetectRenderer(800, 600, options);

        Browser.document.body.appendChild(renderer.view);
        Browser.window.requestAnimationFrame(cast render);
    }

    public function render(d:Int){
        if(update != null) update();

        renderer.render(stage);
        
        Browser.window.requestAnimationFrame(cast render);
    }

    public function loop(u:Void->Void){
        this.update = u;
    }

    public function log(msg:String){
        Browser.console.log(msg);
    }

    public function add(e:LMEntity){
        e.add(stage);
    }

    public static function get(){
        return new Lemming();
    }

    public static function main(){

    }

}