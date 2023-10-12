function Particle(loc) {
    this.loc = loc;
    this.vel = new JSVector(0, 5);
    this.angle = Math.random() * Math.PI * 2;
    this.vel.setDirection(this.angle * -1);
    this.opacity = 1;
}

Particle.prototype.render = function () {//green rectangle with round edges 
    context.fillStyle = "rgba(12, 131, 48, " + this.opacity + ")";
    context.beginPath();
    context.roundRect(this.loc.x, this.loc.y, 25, 25, 5);
    context.fill();

}