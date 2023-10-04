//  Mover Function Class Thingy 
function Mover(x, y, rad, orbN) {
  this.loc = new JSVector(x, y);
  this.vel = new JSVector(Math.random() * 5 - 2.5, Math.random() * 5 - 2.5);
  this.rad = rad;
  this.angs = [];
  for(let i = 0; i<numOrb; i++){
    this.ang = i*(Math.PI*2/numOrb);
  }
  this.orbs = [];
  for(let i = 0; i<orbN; i++){
    this.orbs[i] = new Orbiter(this, orbN, rad/2, 100);//make orbiter
  }
}

//  placing methods in the prototype (every mover shares functions)
Mover.prototype.run = function () {
  this.render();
  this.update();
  this.checkEdges();
}

//  Check to see if mover leaves canvas area and reposition in necessary
Mover.prototype.checkEdges = function () {
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

Mover.prototype.render = function () {
  context.strokeStyle = "rgba(46, 1, 56, 100)";
  context.fillStyle = "rgba(91, 41, 113)";
  context.beginPath();
  context.arc(this.loc.x, this.loc.y, this.rad, Math.PI * 2, 0, false);
  context.stroke();
  context.fill();
}

//  update mover and orbiters every animation frame
Mover.prototype.update = function () {
  for(let i = 0; i<this.orbs.length; i++){
    this.orbs[i].run();
  }
  this.loc.add(this.vel);
}

