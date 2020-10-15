class drops{
    constructor(x,y) {
      var options = {
         friction:0.1
          
      }
      this.r = 10;
      this.body =Bodies.circle(x,y,this.r,options);
      this.color=(random(0,255),random(0,255),random(0,255));
      
      World.add(world, this.body);
    }
    updateY(){
      if(this.body.position.y>800){
      Matter.Body.setPosition(this.body,{x:random(0,480),y:random(0,800)})
      }
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      push ();
      translate(pos.x,pos.y);
      rotate (angle)
      noStroke();
      fill("blue");
      ellipseMode(RADIUS);
     
      ellipse(this.body.position.x, this.body.position.y, this.r, this.r);
      pop ();
    }
    };