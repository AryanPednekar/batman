const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var um;
var maxDrops=100;
var drps=[];
//function preload(){
    
//}

function setup(){
    createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;

    um =new Umbrella();    
   for (var j = 0;j <=maxDrops ; j=j+1) {
  
     drps.push(new drops( random(width/2-10,width/2+10),10,10));
   
 }
}

function draw(){
    
  background(0,0,0);  
  Engine.update(engine);
    um.show();
  for(var j=0;j<maxDrops;j++){
     drps[j].display();
     drps[j].updateY();
      }
}   

