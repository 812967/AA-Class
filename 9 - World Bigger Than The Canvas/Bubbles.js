function Bubble(loc, vel, d, ctx1, ctx2, worldWidth, worldHeight) {
    //mover properties
    this.loc = loc;
    this.vel = vel;
    this.diam = d;
    this.context1 = ctx1;
    this.context2 = ctx2;
    this.wWidth = worldWidth;
    this.wHeight = worldHeight;
    this.worldScale = new JSVector(this.wWidth, this.wHeight);

    this.color = "rgba(" + Math.floor(Math.random()*256) + ", " + Math.floor(Math.random()*256) + ", " + Math.floor(Math.random()*256) + ")";
}//++++++++++++++++++++++++++++++++ end mover constructor

//++++++++++++++++++++++++++++++++ mover methods
Bubble.prototype.run = function () {
    this.update();
    this.checkEdges();
    this.render();
}

Bubble.prototype.update = function () {
    this.loc.add(this.vel);
}

Bubble.prototype.checkEdges = function () {
    if (this.loc.x >= world.dims.width / 2 || this.loc.x <= -world.dims.width / 2) {
        this.vel.x *= -1;
    }
    if (this.loc.y >= world.dims.height / 2 || this.loc.y < -world.dims.height / 2) {
        this.vel.y *= -1;
    }
}

Bubble.prototype.render = function () {
    //  render balls in world
    this.context1.fillStyle = this.color;
    this.context1.beginPath();
    this.context1.arc(this.loc.x, this.loc.y, this.diam, Math.PI * 2, 0, false);
    this.context1.fill();
    this.context1.closePath();
    //  render balls in mini map
    this.context2.fillStyle = this.color;
    this.context2.beginPath();
    this.context2.arc(this.loc.x, this.loc.y, this.diam, Math.PI * 2, 0, false);
    this.context2.fill();
    this.context2.closePath();
}
