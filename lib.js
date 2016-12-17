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

class PW{

        constructor(){
            console.log("Welcome!");
        }

        start(){
            this.con = document.createElement("canvas");
            this.con.width = 800;
            this.con.height = 600;
            document.body.appendChild(this.con);
            this.canvas = this.con.getContext('2d');
        }

        clear(color){
            this.canvas.fillStyle = color;
            this.canvas.fillRect(0, 0, 800, 600);
        }

        sprite(src){
            var s = new PWSprite(src);
            return s;
        }

        draw(e){
            e.draw(this.canvas);
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
