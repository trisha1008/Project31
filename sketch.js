const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint

var engine, world;
var box1;
var score=0

function preload(){
    polygonimg=loadImage("polygon.png")
}



function setup(){
    var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(370,380,40,40);
    box2 = new Box(410,380,40,40);
    box3 = new Box(450,380,40,40);
    box4 = new Box(490,380,40,40);
    box5 = new Box(530,380,40,40);
    box6 = new Box(570,380,40,40);
    box7 = new Box(610,380,40,40); 
    box8 = new Box(650,380,40,40);
    box9 = new Box(410,340,40,40);
    box10 = new Box(450,340,40,40);
    box11 = new Box(490,340,40,40);
    box12 = new Box(530,340,40,40);
    box13 = new Box(570,340,40,40);
    box14 = new Box(610,340,40,40);
    box15 = new Box(450,300,40,40);
    box16 = new Box(490,300,40,40);
    box17 = new Box(530,300,40,40);
    box18 = new Box(570,300,40,40);
    box19 = new Box(490,260,40,40);
    box20 = new Box(530,260,40,40);
    
    

    ground=new Ground(500,400,400,20)
    polygon=Bodies.circle(50,200,20)
    World.add(world,polygon)
    slingshot=new SlingShot(this.polygon,{x:100,y:200})
}

function draw(){
    background(0);
    Engine.update(engine);
    textSize(15)
    text("score"+score,550)
    ground.display();

    fill("pink");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();  
    box8.display();
    fill("blue")
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    fill("purple")
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    fill("orange")
    box19.display();
    box20.display();
    score.display();

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();


    slingshot.display();

    imageMode(CENTER)
    image(polygonimg,polygon.position.x,polygon.position.y,40,40)

    
    
   
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(this.polygon);
    }
}

