function Snake(loc, vel, segments) {
    this.loc = loc;
    this.vel = vel;
    this.segments = segments;
}

Snake.prototype.run = function () {
    this.update();
    this.render();
}

Snake.prototype.update = function () {

}

Snake.prototype.render = function () {

}