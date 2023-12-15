function Particle(loc) {
    this.loc = loc;
    this.vel = new JSVector(0, 5);
    this.angle = Math.random() * Math.PI * 2;
    this.vel.setDirection(this.angle * -1);
    this.opacity = 1;
}

Particle.prototype.render = function () {//green rectangle with round edges 
    context.save();
    context.translate(this.loc.x, this.loc.y);
    context.fillStyle = "rgba(12, 131, 48, " + this.opacity + ")";
    context.beginPath();
    context.moveTo(0, 20);
    context.lineTo(10, 0);
    context.lineTo(-10, 0);
    context.moveTo(0, -20);
    context.lineTo(10, 0);
    context.lineTo(-10, 0);
    context.fill();
    context.restore();

}