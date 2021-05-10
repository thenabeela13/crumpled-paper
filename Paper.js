class Paper {
    constructor(){
        var options = {
           isStatic : false,
           restitution :0.8,
           friction : 0.5,
           density : 1.2
        }

        this.body = Bodies.circle(100,100,20);
        World.add(world,this.body);

    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        fill(255);
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(0,0,20, 20 );
        pop();
        
    }
}