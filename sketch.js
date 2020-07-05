const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,ball;
var slingShot;

function setup(){
    var canvas = createCanvas(1200,400);
    //engine = Engine.create();
    //world = engine.world;
engine=Engine.create()
world=engine.world;
   // ground1= new Ground(1000,150,170,20);
    ground2 = new Ground(975,250,150,20);
    box1=new Box(945,240,20,50)
    box2=new Box(975,210,20,50)
    box3=new Box(1000,220,20,50)
    box4=new Box(975,100,60,20)
    box5=new Box(957,150,20,50)
    box7=new Box(993,150,20,50)
    ball= new Ball(20,30)
    slingShot=new Slingshot(ball.body,{x:100,y:80});

   
}

function draw(){
    background("yellow");
    Engine.update(engine);
    fill("pink")
    ground2.display();
    fill("orange")
    box7.display();
    fill("green")
    box5.display();
    fill("white")
    box3.display();
    fill("yellow")
    box2.display();
    fill("grey")
    box1.display();
    fill("purple")
    box4.display();``
    ball.display();
   
}






function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    slingShot.fly();
}