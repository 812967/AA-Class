function Snake(loc, vel, segments) {
    this.loc = loc;
    this.vel = vel;
    this.segments = [];
    for (let i = 0; i < segments; i++) {
        this.segments[i] = new JSVector(i * 50 + 50, i * 50 + 50);
    }
}

Snake.prototype.run = function () {
    this.update();
    this.render();
}

Snake.prototype.update = function () {

}

Snake.prototype.render = function () {

    for (let i = 0; i < this.segments.length - 1; i++) {
        context.beginPath();
        context.lineWidth = 20;
        context.lineCap = "round";
        context.strokeStyle = "rgba(80, 230, 180, 0.5)";
        context.moveTo(this.segments[i].x, this.segments[i].y);
        context.lineTo(this.segments[i + 1].x + 5, this.segments[i + 1].y + 5);
        context.stroke();
        context.closePath();
    }

}