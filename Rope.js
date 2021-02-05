class Rope{
    constructor(bodyA,pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length: 250
        }
        this.pointB = pointB
        this.sling = Constraint.create(options)
        World.add(world, this.sling)



    }
    attach(body){
        this.sling.bodyA = body
    }
    fly(){
        this.sling.bodyA=null
    }
    display(){
        if(this.sling.bodyA){
            push()
            strokeWeight(2)
            line(this.pointB.x, this.pointB.y, this.sling.bodyA.position.x, this.sling.bodyA.position.y)
            pop()

        }
    }
}