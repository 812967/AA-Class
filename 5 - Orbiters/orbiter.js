//  Orbiter Function Class Thingy 
function Orbiter(mover, numOrb, rad, orbR, ang) {
    this.m = mover;
    this.loc = new JSVector(1, 1);
    this.loc.setMagnitude(rad);
    this.ang = ang;
    this.angVel = 0.02;
    this.loc.setDirection(0);
    this.rad = rad;
    this.orbitalRadius = orbR;
}

//  placing methods in the prototype (every ball shares functions)
Orbiter.prototype.run = function () {
    this.update();
    // this.checkEdges();
    this.render();
}

Orbiter.prototype.render = function () {
    context.strokeStyle = "rgba(36, 96, 104)";
    context.fillStyle = "rgba(36, 96, 104)";
    context.beginPath();
    context.arc(this.loc.x, this.loc.y, this.rad, Math.PI * 2, 0, false);
    context.stroke();
    context.fill();
}

// Orbiter.prototype.checkEdges= function () {
//     if (this.loc.x > canvas.width) {
//         this.loc.x = 0;
//       }
//       if (this.loc.x < 0) {
//         this.loc.x = canvas.height;
//       }
//       if (this.loc.y > canvas.height) {
//         this.loc.y = 0;
//       }
//       if (this.loc.y < 0) {
//         this.loc.y = canvas.height;
//       }
// }

//  update bubble every animation frame
Orbiter.prototype.update = function () {
    this.loc = new JSVector(1,1);
    this.loc.x = this.m.loc.x+this.orbitalRadius*Math.cos(this.ang);
    this.loc.y = this.m.loc.y+this.orbitalRadius*Math.sin(this.ang);
    this.ang += this.angVel;
}

