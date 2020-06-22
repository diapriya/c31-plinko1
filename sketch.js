
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var division1,division2,division3,division4,division5;
var particals = [];
var plinkos = [];
var divisions = []; 


function setup() {
	createCanvas(480, 800);
 
	engine = Engine.create();
	world = engine.world;
	
  ground = new Ground(width/2,720,480,10);

  division1 = new Divisions(0,620,10,190);
  division2 = new Divisions(80,620,10,190);
  division3 = new Divisions(160,620,10,190);
  division4 = new Divisions(240,620,10,190);
  division5 = new Divisions(320,620,10,190);
  division6 = new Divisions(400,620,10,190);
  division7 = new Divisions(480,620,10,190);
  division8 = new Divisions(560,620,10,190);

  plinko1 = new Plinko(10,80,10);
  plinko2 = new Plinko(80,80,10);
  plinko3 = new Plinko(150,80,10);
  plinko4 = new Plinko(220,80,10);
  plinko5 = new Plinko(290,80,10);
  plinko6 = new Plinko(360,80,10);
  plinko7 = new Plinko(430,80,10);
  
  plinko8 = new Plinko(35,180,10);
  plinko9 = new Plinko(115,180,10);
  plinko10 = new Plinko(195,180,10);
  plinko11 = new Plinko(275,180,10);
  plinko12 = new Plinko(345,180,10);
  plinko13 = new Plinko(425,180,10);

  plinko14 = new Plinko(10,280,10);
  plinko15 = new Plinko(80,280,10);
  plinko16 = new Plinko(150,280,10);
  plinko17 = new Plinko(220,280,10);
  plinko18 = new Plinko(290,280,10);
  plinko19 = new Plinko(360,280,10);
  plinko20 = new Plinko(430,280,10);
  
  plinko21 = new Plinko(35,380,10);
  plinko22 = new Plinko(115,380,10);
  plinko23 = new Plinko(195,380,10);
  plinko24 = new Plinko(275,380,10);
  plinko25 = new Plinko(345,380,10);
  plinko26 = new Plinko(425,380,10);

  
  for (i = 0; i < 10; i++){

    x =  random(1,480);
 
    particals[i] = new Particle(x, 10, 10);
  
  }
  

  
	Engine.run(engine);  

}

function draw() {
	
  background(0); 
  
  ground.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  division8.display();




  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();
  plinko7.display();


  plinko8.display();
  plinko9.display();
  plinko10.display();
  plinko11.display();
  plinko12.display();
  plinko13.display();

  plinko14.display();
  plinko15.display();
  plinko16.display();
  plinko17.display();
  plinko18.display();
  plinko19.display();
  plinko20.display();

  plinko21.display();
  plinko22.display();
  plinko23.display();
  plinko24.display();
  plinko25.display();
  plinko26.display();

for (i = 0; i < particals.length; i++){
  particals[i].display();
}
  

  if(frameCount % 30 === 0){
   x =  random(1,480);
    particals.push(new Particle(x,10,10));
  }

  particals[particals.length - 1].display();


 
}
    
  



 


