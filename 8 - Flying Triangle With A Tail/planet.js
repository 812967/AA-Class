function Planet(r) {
    this.loc = new JSVector(Math.random() * (canvas.width - 200 + 1) - 100, Math.random() * (canvas.height - 200 + 1) - 100);
    this.vel = new JSVector(0, 0);
    this.radius = r;
}

Planet.prototype.run = function () {
    this.update();
    this.checkEdges();
    this.render();
}

Planet.prototype.update = function () {//move away from ship if ship gets close 
    if (this.loc.distance(ship.loc) < 100) {
        this.vel = ship.vel.copy();
        this.vel.setMagnitude(this.vel.getMagnitude() * 0.75);
    }
    if (this.loc.distance(ship.loc) < 50) {
        this.loc.x = Math.random() * canvas.width;
        this.loc.y = Math.random() * canvas.height;
        this.vel = new JSVector(0, 0);
        pause = true;
    }
    this.loc = JSVector.addGetNew(this.loc, this.vel);
}

Planet.prototype.checkEdges = function () {
    if (this.loc.x > canvas.width) {
        this.loc.x = Math.random() * canvas.width;
        this.loc.y = Math.random() * canvas.height;
        this.vel = new JSVector(0, 0);
    }
    if (this.loc.x < 0) {
        this.loc.x = Math.random() * canvas.width;
        this.loc.y = Math.random() * canvas.height;
        this.vel = new JSVector(0, 0);
    }
    if (this.loc.y > canvas.height) {
        this.loc.x = Math.random() * canvas.width;
        this.loc.y = Math.random() * canvas.height;
        this.vel = new JSVector(0, 0);
    }
    if (this.loc.y < 0) {
        this.loc.x = Math.random() * canvas.width;
        this.loc.y = Math.random() * canvas.height;
        this.vel = new JSVector(0, 0);
    }
}

Planet.prototype.render = function () {
    context.fillStyle = "rgba(38, 91, 106, 1)";
    context.beginPath();
    context.arc(this.loc.x, this.loc.y, this.radius, Math.PI * 2, 0, false);
    context.closePath();
    context.fill();
}