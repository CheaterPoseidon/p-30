class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.visibility=(255)
      this.image=loadImage("wood1.png")

    }

    display(){
      var pos= this.body.position
      
      if(this.body.speed>3){
        World.remove(world,this.body)
        push()
        tint(255,this.visibility)
        this.visibility=this.visibility-3
        image(this.image, pos.x, pos.y, this.width, this.height);
        pop()
      }
      else{
        rectMode(CENTER)
        fill("brown")
        image(this.image, pos.x, pos.y, this.width, this.height);
        
      }
      
  
    }
  
  };
  