// JSVector -- a Javascript 2D vector class

// The class constructor
function JSVector(x = 0,y = 0){
  // called with two arguments
  this.x = x;
  this.y = y;
}

// Set the magnitude of the vector,
// retaining the angle (direction).
JSVector.prototype.setMagnitude = function(mag){
let theta = this.getDirection();
this.x = mag * Math.cos(theta);
this.y = mag * Math.sin(theta);
}

// Get the magnitude of the vector using pythagorean theorem
JSVector.prototype.getMagnitude = function(){
mag = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
return mag;
}

// Set the angle (direction) of the vector,
// retaining the magnitude.
JSVector.prototype.setDirection = function(angle){
this.x = this.getMagnitude() * Math.cos(angle);
this.y = this.getMagnitude() * Math.sin(angle);
}

// Get the direction (angle) of the vector
JSVector.prototype.getDirection = function(){
return Math.atan2(this.y, this.x);
}

// Add another vector to this vector
JSVector.prototype.add = function(v2){
this.x += v2.x;
this.y += v2.y;
}

// Subtract another vector from this vector
JSVector.prototype.sub = function(v2){
this.x -= v2.x;
this.y -= v2.y;
}

// Class method to return a new vector that is the sum of two vectors
JSVector.addGetNew = function(v1,v2){
return new JSVector(v1.x + v2.x, v1.y + v2.y);
}

// Class method to return a new vector that is the difference of two vectors
JSVector.subGetNew = function(v1,v2){
return new JSVector(v1.x - v2.x, v1.y - v2.y);
}

// Multiply this vector by a scalar
JSVector.prototype.multiply = function(scalar){
this.x *= scalar;
this.y *= scalar;
}

// Divide this vector by a scalar
JSVector.prototype.divide = function(scalar){
this.x /= scalar;
this.y /= scalar;
}

// Normalize this vector so that it has a magnitude of 1
JSVector.prototype.normalize = function(){
this.setMagnitude(1);
}

// Limit the magnitude of this vector
JSVector.prototype.limit = function(lim){
if(this.getMagnitude()>lim){
this.setMagnitude(lim);
}
}

// Get the distance between this vector and another one
JSVector.prototype.distance = function(v2){
return Math.sqrt(this.distanceSquared(v2));
}

// Get square of the distance between this vector and another one
JSVector.prototype.distanceSquared = function(v2){
return Math.pow(this.x-v2.x, 2) + Math.pow(this.y-v2.y, 2);
}

// Rotate this vector by some number of radians
// using the rotation matrix |  cos   -sin  |
//                           |  sin   +cos  |

JSVector.prototype.rotate = function(angle) {
let x = this.x;
let y = this.y;
let cos = Math.cos(angle);
let sin = Math.sin(angle);
this.x = x*cos - sin * y;
this.y = x*sin + cos*y; 
return this;
}


// Get the angle between this vector and another one
JSVector.prototype.angleBetween = function(v2){
return this.getDirection() - v2.getDirection();
}

// Make a copy of this vector
JSVector.prototype.copy = function(){
let v2 = new JSVector(this.x, this.y);
v2.setMagnitude(this.getMagnitude());
v2.setDirection(this.getDirection());
return v2;
}

// Override inherited toString() to describe this instance
JSVector.prototype.toString = function() {
return "x = " + this.x + " y = " + this.y + " Magnitude = " + this.getMagnitude() + " Angle = " + this.getDirection()/Math.PI * 180;
}
