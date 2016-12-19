class PWSprite{
    constructor(src){
        this.image = new Image();
        this.image.src = src;
        this.x = 0;
        this.y = 0;
    }

    draw(c){
        c.drawImage(this.image, this.x, this.y);
    }
}

class PWText{
    constructor(text){
        this.text = text;
        this.x = 0;
        this.y = 0;
        this.size = 48;
        this.font = "serif";
        this.color = "white";
    }

    draw(c){
        c.fillStyle = this.color;
        c.font = this.size + "px " + this.font;
        c.fillText(this.text, this.x, this.y);
    }
}

class PWInput{
    constructor(){
        this.keys = {};
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

    }

    check(k){
        return this.keys[k];
    }
}

class PW{

        constructor(){
            console.log("Welcome!");

            //initialize components before the game starts
            this.input = new PWInput();
        }

        start(){
            this.con = document.createElement("canvas");
            this.con.width = 800;
            this.con.height = 600;
            document.body.appendChild(this.con);
            this.canvas = this.con.getContext('2d');
        }

        getWidth(){
            return this.con.width;
        }

        getHeight(){
            return this.con.height;
        }

        clear(color){
            this.canvas.fillStyle = color;
            this.canvas.fillRect(0, 0, 800, 600);
        }

        sprite(src){
            var s = new PWSprite(src);
            return s;
        }

        text(m){
            var m = new PWText(m);
            return m;
        }

        draw(e){
            e.draw(this.canvas);
        }

        drawRectangle(color, x, y, w, h){
            this.canvas.fillStyle = color;
            this.canvas.fillRect(x, y, w, h);
        }

        log(msg){
            console.log("Pyweb: " + msg);
        }

        loop(fn){
            function u(){
                fn();
                window.requestAnimationFrame(u);
            }
            window.requestAnimationFrame(u);
        }
}

function getLibrary(){
    return new PW();
}
