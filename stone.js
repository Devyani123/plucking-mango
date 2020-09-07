class stone{

  constructor(x,y,radius){
       var options={
           isStatic:false,
           restitution:0,
           density:1.2,
           friction:1.0

       }
       this.radius=radius;
       this.body=Bodies.circle(x,y,(this.radius-20)/2,options);
      
       this.image=loadImage("stone.png");
       
      World.add(world ,this.body);
       
  }
display(){
  var pos=this.body.position;
  push ()
  translate(pos.x,pos.y);
rectMode(CENTER);
  
imageMode (CENTER);
  image(this.image,0,0,this.radius,this.radius);
pop()

}

}