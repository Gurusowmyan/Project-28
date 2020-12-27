class Stone {

constructor(x,y,radius,bodyA,bodypointB){
    var options={
        isStatic: false,
        restitution:0,
        friction:1,
        density:1.2,
        bodyA:bodyA,
        pointB:pointB,
    }  
}
    fly() {

        this.stone.bodyA = null;
        
    }

}
display(); {

    if(this.sling.bodyA) {

    
    var pointA = this.stone.bodyA.position;
    var pointB = this.stone.pointB;
    strokeWeight(4);
    line(pointA.x, pointA.y, pointB.x, pointB.y);
}
}







