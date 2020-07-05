class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        this.pointB=pointB;
        World.add(world, this.sling);
 
    }
        fly (){
            this.sling.bodyA=null;
        }

    display(){
        
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        push ()
        strokeWeight(8);
        stroke("red")
        line(pointA.x, pointA.y, pointB.x, pointB.y);
       pop ()
    }
    
}
