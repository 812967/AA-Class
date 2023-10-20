function Ship(x, y){
    this.loc = new JSVector(x, y);
    this.vel = new JSVector(3, 3);
    this.acc = new JSVector(0,0);
}

Ship.prototype.run = function (){
    this.update();
    this.checkEdges();
    this.render();
}

Ship.prototype.update = function (){
    this.acc = JSVector.subGetNew(planet.loc, this.loc);
    this.acc.normalize();
    this.acc.multiply(0.03);
    this.vel = JSVector.addGetNew(this.vel, this.acc);
    this.vel.limit(2);
    this.loc = JSVector.addGetNew(this.loc, this.vel);
}

Ship.prototype.checkEdges = function () {
    if (this.loc.x > canvas.width) {
        this.loc.x = 0;
    }
    if (this.loc.x < 0) {
        this.loc.x = canvas.width;
    }
    if (this.loc.y > canvas.height) {
      this.loc.y = 0;
    }
    if (this.loc.y < 0) {
      this.loc.y = canvas.height;
    }
  }

Ship.prototype.render = function (){
    let rotateAngle = this.vel.getDirection();
    context.save();
    //Ship
    context.translate(this.loc.x, this.loc.y);
    context.rotate(rotateAngle);
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
    let fl = this.vel.getMagnitude()*30;
    let opacity = Math.random();
    context.beginPath();
    context.moveTo(-10, 0);
    context.lineTo(-15, 5);
    context.lineTo(-10-fl, 0);
    context.closePath();
    context.fillStyle = "rgba(170, 114, 57, " + opacity + ")";
    context.fill();
    context.beginPath();
    context.moveTo(-10, 0);
    context.lineTo(-15, -5);
    context.lineTo(-10-fl, 0);
    context.closePath();
    context.fillStyle = "rgba(170, 114, 57, " + opacity + ")";
    context.fill();
    context.restore(); 

}