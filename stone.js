class Stone{
    constructor(x,y,r) {
    
      var options={

        
        
        
        restitution:0.8,
        friction:1,
        density:1.2

        
      }    

      this.x=x
      this.y=y
      this.r=r
      this.image=loadImage("images/stone.png")
      this.body = Bodies.circle(this.x,this.y,this.r/2,options);
      World.add(world, this.body);
    }
    display(){
      var paperPos =this.body.position;

      push()
      translate(paperPos.x,paperPos.y)
      rectMode(CENTER)
      strokeWeight(3)
      imageMode(CENTER);
      image(this.image,0,0,this.r,this.r);
      pop()
    }
  };