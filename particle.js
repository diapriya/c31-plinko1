class Particle {

  constructor(x,y,radius){
    var options ={
      restitution:0.4, 
    }

    this.radius=radius;
    this.x = x;
    this.y = y;

    this.body =Bodies.circle(x,y,this.radius,options);
    this.color=color(random(0,255), random(0,255), random(0,255));
    World.add(world, this.body);
    
  }

  display(){
    var pos = this.body.position;

    push();
 
    noStroke();
    fill (this.color)
    ellipseMode(RADIUS);
    ellipse(pos.x,pos.y,10);
    pop();
  }



}