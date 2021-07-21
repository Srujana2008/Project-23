class PlayerBase{
    constructor(x,y,w,h){
        var options = {
            isStatic: true
        }
        this.image = loadImage("assets/base2.png");
        this.w = w;
        this.h = h;
        this.body = Bodies.rectangle(x,y,this.w,this.h, options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 200, 200, this.w, this.h);
        pop();
    }
}