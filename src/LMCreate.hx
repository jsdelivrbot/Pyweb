package;

class LMCreate{

    public function new(){

    }

    public function entity(){
        return new LMEntity();
    }

    public function sprite(path:String){
        return new LMSprite(path);
    }

}  