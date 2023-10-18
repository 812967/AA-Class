function Ship(x, y){
    this.loc = new JSVector(x, y);
    this.vel = new JSVector(3, 3);
    this.acc = new JSVector(0,0);
}

Ship.prototype.run = function (){
    this.update();
    this.render();
}

Ship.prototype.update = function (){
    this.acc = JSVector.subGetNew(planet.loc, this.loc);
    this.acc.normalize();
    this.acc.multiply(0.05);
    this.vel = JSVector.addGetNew(this.vel, this.acc);
    this.vel.limit(3);
    this.loc = JSVector.addGetNew(this.loc, this.vel);
}

Ship.prototype.render = function (){
    context.save();
    //Ship
    context.translate(this.loc.x, this.loc.y);
    context.beginPath();
    context.moveTo(20, 0);
    context.lineTo(-10, 10);
    context.lineTo(-1, 0);
    context.lineTo(-10, -10);
    context.closePath();
    context.fillStyle = "rgba(170, 72, 57, 1)";
    context.strokeStyle = "rgba(170, 114, 57, 1)";
    context.fill();
    context.stroke();
    //Flame
    let fl = this.vel.getMagnitude()*5;
    let opacity = Math.random();
    context.beginPath();
    context.moveTo(-10, 0);
    context.lineTo(-15, 5);
    context.lineTo(-60-fl, 0);
    context.closePath();
    context.fillStyle = "rgba(170, 114, 57, " + opacity + ")";
    context.fill();
    context.beginPath();
    context.moveTo(-10, 0);
    context.lineTo(-15, -5);
    context.lineTo(-60-fl, 0);
    context.closePath();
    context.fillStyle = "rgba(170, 114, 57, " + opacity + ")";
    context.fill();
    context.restore(); 

}