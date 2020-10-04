class Dustbin{
    //retain only (x,y) inside consrtuctor
    constructor(x, y, width, height){

        //you don't need this!
       /* var options ={
            isStatic: true,
            friction: 0.3
        }*/ 

        
       this.body = Bodies.rectangle(x, y, width, height);//options);
       //include -- "this.x=x; this.y = y;" after this line.
       //and give fixed width, height and thinkness for the dustbin

       //but create separate rectangle bodies for each of its sides like: (bottomBody, leftWall, rightWall)
      
      
      /* this.width = width;
       this.height = height;*/

       //add (bottomBody, leftWall, rightWall) separately in "World.add(world,this.bottombody)"; etc....
       World.add(world, this.body);
    }

    display(){

        //position to be set for each of them separately again -- var posBottom =this.bottomBody.position
        var pos =this.body.position;

        //do the below mentioned steps for each of the bodies of the dustbin.

        //add push() ;
        //translate x and y positions: translate(posBottom.x, posBottom.y);
        rectMode(CENTER);
        fill("white");

        //give it like this instead: rect(0,0,this.wallThickness, this.dustbinHeight);
        rect(pos.x, pos.y, this.width, this.height);

        //add pop();
    }
}