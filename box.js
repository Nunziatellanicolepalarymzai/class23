class  Box {
    constructor(x,y,width,height){
        var box_options ={
            restitution:0.8,
            friction:0.3,
            density:1.0
        }
    this.width=width;
    this.height=height;
    
       this.box = Bodies.rectangle(x,y,width,height,box_options);
        World.add(world,this.box);
    
    
    }
    
    display(){

        var pos=this.box.position;

        var angle=this.box.angle;
push();

//translate shifts the origine of the cancvas from(0,0)to pos.x,pos.y
        translate(pos.x,pos.y)

        rotate(angle);
        fill("pink")


        rectMode(CENTER);
        rect(0,0,this.width,this.height);
    
    pop();
    
    }
    }