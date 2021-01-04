class Tree{
    constructor(x,y,width,height) {
    
        

     
      this.image=loadImage("images/tree.png")
      this.body = Bodies.rectangle(x,y,this.width,this.height);
      this.width=100,
      this.heighth=200
      World.add(world, this.body);
    }
    display(){
      var paperPos =this.body.position;

      push()
      translate(paperPos.x,paperPos.y)
      rectMode(CENTER)
      imageMode(CENTER);
      image(this.image,800,396,500,600)
      pop()
    }
  };
