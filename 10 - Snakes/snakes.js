function Snake(loc, vel, segments) {
    this.loc = loc;
    this.vel = vel;
    this.segments = [];
    for(let i = 0; i<segments; i++){
        this.segments[i] = new JSVector(i*50, i*50);
    }
}

Snake.prototype.run = function () {
   // this.update();
    this.render();
}

Snake.prototype.update = function () {

}

Snake.prototype.render = function () {
    context.beginPath();
    context.moveTo(this.segments[0].x, this.segments[0].y);
    context.lineTo(this.segments[0].x + 10, this.segments[0].y);
    context.lineTo(this.segments[0].x, this.segments[0] + 40);
    context.moveTo(this.segments[0].x + 10, this.segments[0] + 40);
    context.lineTo(this.segments[0].x + 10, this.segments[0].y);
    context.lineTo(this.segments[0].x, this.segments[0] + 40);
    context.fill();
    context.closePath();
}