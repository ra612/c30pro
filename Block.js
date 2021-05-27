class Block{
  constructor(x, y, width, height) {
      var options = {
        
        restitution :0.4,
          friction :0.0,
      }
      this.image=loadImage("block.png");
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    this.visiblity=255;
    }
    display(){
      push();
  if(this.body.speed>3){
World.remove(world,this.body);
this.visiblity=this.visiblity-5;
tint(255,this.visiblity);
image(this.image,this.body.position.x,this.body.position.y,50,50);
}

else{
imageMode(CENTER)  
image(this.image ,this.body.position.x,this.body.position.y,40,40);

}
pop();
}

      
      
     
    }
