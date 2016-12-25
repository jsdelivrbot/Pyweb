class PWGroup{
    constructor(){
        this.members = [];
    }

    push(e){
        this.members.push(e);
    }

    add(e){
        for(var m = 0; m < this.members.length; m++){
            this.members[m].add(e);
        }
    }
}

class PWSprite{
    constructor(src){
        if(src != null){
            this.texture = PIXI.Texture.fromImage(src);
            this.sprite = new PIXI.Sprite(this.texture);
        }
    }

    add(s){
        s.addChild(this.sprite);
    }

    fromTexture(t){
        this.texture = t;
        this.sprite = new PIXI.Sprite(this.texture);
    }

    setPosition(x, y){
        this.sprite.x = x;
        this.sprite.y = y;
    }

    setX(x){
        this.sprite.x = x;
    }

    getX(){
        return this.sprite.x;
    }

    setY(y){
        this.sprite.y = y;
    }

    getY(){
        return this.sprite.y;
    }

    getWidth(){
        return this.sprite.width;
    }

    getHeight(){
        return this.sprite.height;
    }
}

class PWText{
    constructor(text){
        this.text = text;
        this.font = "Arial";
        this.size = "36px";
        this.style = {
            fontFamily : this.font,
            fontSize : this.size
        };

        this.textObject = new PIXI.Text(this.text, this.style);
    }

    add(s){
        s.addChild(this.textObject);
    }

    setPosition(x, y){
        this.textObject.x = x;
        this.textObject.y = y;
    }

    setX(x){
        this.textObject.x = x;
    }

    getX(){
        return this.textObject.x;
    }

    setY(y){
        this.textObject.y = y;
    }

    getY(){
        return this.textObject.y;
    }
}

class PWInput{
    constructor(renderer){
        this.width = renderer.width;
        this.height = renderer.height;
        this.keys = {};
        this.mouse = {
            down: false,
            x: -1,
            y: -1
        };

        var self = this;

        document.onkeydown = function(e) {
            try{
                var tk = String.fromCharCode(e.keyCode);
                self.keys[tk] = true;
            }catch(e){
                console.log(e);
            }
        }

        document.onkeyup = function(e) {
            try{
                var tk = String.fromCharCode(e.keyCode);
                self.keys[tk] = false;
            }catch(e){
                console.log(e);
            }
        }

        document.onmousedown = function(e){
            self.mouse.down = true;
        }

        document.onmouseup = function(e){
            self.mouse.down = false;
        }

    }

    check(k){
        return this.keys[k];
    }
}

class PWTexture{

    constructor(src){
        this.texture = PIXI.Texture.fromImage(src);
    }

}

class PW{

        constructor(){
            console.log("PW");
        }

        setSize(w, h){
            this.w = w;
            this.h = h;
        }

        start(){
            if(this.w == null || this.h == null){
                this.w = 800;
                this.h = 600;
            }

            this.renderer = PIXI.autoDetectRenderer(this.w, this.h, {
                backgroundColor : 0x000000
            });

            this.input = new PWInput(this.renderer);

            this.stage = new PIXI.Container();

            document.body.appendChild(this.renderer.view);
        }

        getWidth(){
            //return this.con.width;
        }

        getHeight(){
            //return this.con.height;
        }

        sprite(src){
            var s = new PWSprite(src);
            return s;
        }

        text(m){
            var m = new PWText(m);
            return m;
        }

        texture(src){
            var t = new PWTexture(src);
            return t;
        }

        add(e){
            e.add(this.stage);
        }

        log(msg){
            console.log("[Pyweb] " + msg);
        }

        loop(fn){
            var self = this;
            function u(){
                self.renderer.render(self.stage);
                fn();
                window.requestAnimationFrame(u);
            }
            window.requestAnimationFrame(u);
        }
}

var lib;
function getLibrary(){
    if(lib == null){
        lib = new PW();
        return lib;
    }else{
        return lib;
    }
}
