function Creature(x, y){
    this.loc = new JSVector(x, y);
    this.vel = new JSVector(1, 1);
    let rA = Math.random()*Math.PI*2;
    this.vel.setDirection(rA);
    let rV = Math.random()*5 - 2.5;
    this.vel.setMagnitude(rV);
}

Creature.prototype.run = function(){
    this.update();
    this.checkEdges();
    this.render();
}

Creature.prototype.update = function (){
    this.loc = JSVector.addGetNew(this.loc, this.vel);
}

Creature.prototype.checkEdges = function (){
    if (this.loc.x > canvas.width) {
        this.vel.x *= -1;
      }
      if (this.loc.x < 0) {
        this.vel.x *= -1;
      }
      if (this.loc.y > canvas.height) {
        this.vel.y *= -1;
      }
      if (this.loc.y < 0) {
        this.vel.y *= -1;
      }
}

Creature.prototype.render = function(){
    context.strokeStyle = "rgba(255, 219, 0, 1)";
    context.fillStyle = "rgba(255, 219, 0, 1,)";
    context.beginPath();
    context.arc(this.loc.x, this.loc.y, 60, Math.PI * 2, 0, false);
    context.stroke();
    context.fill();
}

