class Box{
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      
      this.height = height;
      World.add(world, this.body);
      this.image = loadImage("sprites/dustbingreen.png");
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("green");
       rect(pos.x, pos.y, this.width, this.height);
      imageMode(CENTER)
      image(this.image,600,580,230,230)
       
    }
  }; 