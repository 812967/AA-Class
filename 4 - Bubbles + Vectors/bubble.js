//  Bubble constructor function +++++++++++++++++++++++++++++
function Bubble(x, y, diam) {
  this.loc = new JSVector(x, y);
  this.vel = new JSVector(Math.random() * 3 - 1.5, Math.random() * 3 - 1.5);
  this.acc = new JSVector(0, 0);
  this.diam = diam;
}

//  placing methods in the prototype (every ball shares functions)
Bubble.prototype.run = function () {
  this.render();
  this.update();
  this.checkEdges();

}

//  Check to see if buuble leaves canvas area and reposition if necessary
Bubble.prototype.checkEdges = function () {
  if (this.loc.x > canvas.width) {
    this.loc.x = 0;
    this.loc.y = Math.random() * canvas.height;
  }
  if (this.loc.x < 0) {
    this.loc.x = canvas.width;
    this.loc.y = Math.random() * canvas.height;
  }
  if (this.loc.y > canvas.height) {
    this.loc.y = 0;
    this.loc.x = Math.random() * canvas.width;
  }
  if (this.loc.y < 0) {
    this.loc.y = canvas.height;
    this.loc.x = Math.random() * canvas.width;
  }
}

Bubble.prototype.render = function () {
  if (this === atr) {
    context.strokeStyle = "rgba(0, 255, 45, 0.8)";
    context.fillStyle = "rgba(0, 255, 45, 0.8)";
    context.beginPath();
    context.arc(this.loc.x, this.loc.y, this.diam, Math.PI * 2, 0, false);
    context.stroke();
    context.fill();
  } else if (this === rep) {
    context.strokeStyle = "rgba(180, 0, 0, 0.8)";
    context.fillStyle = "rgba(255, 0, 0, 0.8)";
    context.beginPath();
    context.arc(this.loc.x, this.loc.y, this.diam, Math.PI * 2, 0, false);
    context.stroke();
    context.fill();
  } else {
    context.strokeStyle = "rgba(55, 139, 46, 100)";
    context.fillStyle = "rgba(55, 139, 46, 100)";
    context.beginPath();
    context.arc(this.loc.x, this.loc.y, this.diam, Math.PI * 2, 0, false);
    context.stroke();
    context.fill();
  }
}

//  update bubble every animation frame
Bubble.prototype.update = function () {
  this.acc = new JSVector(0, 0)
  if (this === atr || this === rep) {
    this.vel.multiply(4000);
  }
  else if (y === true) {
    if (this.loc.distance(atr.loc) <= 300) {
      this.acc = JSVector.subGetNew(atr.loc, this.loc);
      this.acc.normalize();
      this.acc.multiply(0.25);
    }
    if (this.loc.distance(rep.loc) <= 300) {
      this.acc = JSVector.subGetNew(this.loc, rep.loc);
      this.acc.normalize();
      this.acc.multiply(0.25);
    }
  }
  this.vel.add(this.acc)
  this.vel.limit(3);
  this.loc.add(this.vel);
}

