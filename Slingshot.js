class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10

        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.Image1= loadImage("sprites/sling1.png");
        this.Image2= loadImage("sprites/sling2.png");
        this.Image3= loadImage("sprites/sling3.png");
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.Image1,200,20)
        image(this.Image2,175,20)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke("#301608")
            if(pointA.x<220){

            
            line(pointA.x-20, pointA.y, pointB.x, pointB.y);
            line(pointA.x-20, pointA.y,235,50)
            image(this.Image3,pointA.x-30,pointA.y-10,15,30)
            }else{
                line(pointA.x+20, pointA.y, pointB.x, pointB.y);
                line(pointA.x+20, pointA.y,235,50)
                image(this.Image3,pointA.x+20,pointA.y-10,15,30)    
            }
        }
    }
    
}