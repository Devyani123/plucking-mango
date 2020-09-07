class mango{
   
  constructor(x,y,radius){
    var options={
        isStatic:true,
        restitution:0,
        friction:1
    }
    this.radius=radius;
    this.body=Bodies.circle(x,y,(this.radius-20)/2,options);
    this.image=loadImage("mango.png");
    World.add(world,this.body);
  }
  display(){
    var pos=this.body.position;
    image (this.image,pos.x,pos.y,this.radius,this.radius);


  }




}