//  Orbiter Function Class Thingy 
function Orbiter(mover, rad) {
    this.m = mover;
    this.loc = new JSVector(1, 1);
    this.loc.setMagnitude(rad);
    this.ang = Math.random() * Math.PI*2;
    this.loc.setDirection(0);
    this.rad = rad;
}

//  placing methods in the prototype (every ball shares functions)
Orbiter.prototype.run = function () {
    this.update();
    // this.checkEdges();
    this.render();
}

Orbiter.prototype.render = function () {
    context.strokeStyle = "rgba(210, 72, 184, 100)";
    context.fillStyle = "rgba(210, 72, 184, 100)";
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
    this.loc = new JSVector(this.rad * 10, this.rad * 10);
    this.loc.x = this.loc.x+this.m.loc.x*Math.cos(this.ang+(Math.random()*0.2));
    this.loc.y = this.loc.y+this.m.loc.y*Math.sin(this.ang+(Math.random()*0.2));
    this.loc = JSVector.addGetNew(this.m.loc, this.loc);
}

