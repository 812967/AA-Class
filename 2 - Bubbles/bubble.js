//  Bubble constructor function +++++++++++++++++++++++++++++
function Bubble(x, y, diam) {
  this.x = x;
  this.y = y;
  this.diam = diam;
  this.clr = "rgba(255,255,255,255)";
  this.isOverlapping = false;
}

//  placing methods in the prototype (every ball shares functions)
Bubble.prototype.run = function () {
  this.checkEdges();
  this.checkOverlapping()
  this.update();
  this.render();
}

//  Check to see if buuble leaves canvas area and reposition in necessary
Bubble.prototype.checkEdges = function () {
  if(this.x > canvas.width){
    this.x = 0;
  }
  if(this.x < 0){
    this.x = canvas.width;
  }
  if(this.y > canvas.height){
    this.y = 0;
  }
  if(this.y < 0){
    this.x = canvas.height;
  }
}

//  Sets "this.isOverlapping" to true if bubbles are overlapping
Bubble.prototype.checkOverlapping = function () {
  this.isOverLapping = false;
  for(let i = 0; i<bubbles.length; i++){
    if(this !== bubbles[i]){
      let distance = Math.sqrt(Math.pow(this.x - bubbles[i].x, 2) + Math.pow(this.y - bubbles[i].y, 2));
      if(distance <= this.diam + bubbles[i].diam){
        this.isOverLapping = true; 
        return;
      }
    }
  }
}

// renders a bubble to the canvas
Bubble.prototype.render = function () {
  if(this.isOverLapping){
    context.strokeStyle = "rgba(210, 67, 141, 0.8)";
    context.fillStyle = "rgba(210, 67, 141, 0.8)";
    context.beginPath();
    context.arc(this.x, this.y, this.diam, Math.PI*2, 0, false);
    context.stroke();
    context.fill();
  }else{
    context.strokeStyle = "rgba(67, 162, 210, 0.8";
    context.fillStyle = "rgba(67, 162, 210, 0.8";
    context.beginPath();
    context.arc(this.x, this.y, this.diam, Math.PI*2, 0, false);
    context.stroke();
    context.fill();
  }
}

//  update bubble every animation frame
Bubble.prototype.update = function () {
  this.x -= Math.random()*3 - 1.5;
  this.y -= Math.random()*3 - 1.5;
}

