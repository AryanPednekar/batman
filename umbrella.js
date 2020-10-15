class Umbrella {
    constructor(x,y,r){
        var options={
          isStatic:true
        }
        this.x=200;
        this.y=200;
        this.r=20
        this.color="blue";
        this.image=loadImage("images/Walking Frame/walking_1.png");
        this.body =Bodies.circle(x,y,this.r,options);
        
        World.add(world, this.body);

      }
      show(){
        var pos =this.body.position;
        var angle=this.body.angle;
        push ();
        translate(pos.x,pos.y);
        rotate (angle)
        imageMode(RADIUS);
        fill(this.color);
        image( this.image,200,200, this.r, this.r);
        pop ();
      }
    }
      
      
