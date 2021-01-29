const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drops;
var maxDrops = 100;

function preload(){
    
}

function setup(){
   createCanvas(400, 650);

   engine = Engine.create();
   world = engine.world;

   for(var i = 0;i < maxDrops;i++){
    drops.push(new createDrop(random(0,400), random(0,400)));
}
   
}

function draw(){
    background("black");
    Engine.update(engine);
    reposition();

    drops.display();
}   

function reposition() {
        if(this.rain.positiony > height){
            Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
        }
}