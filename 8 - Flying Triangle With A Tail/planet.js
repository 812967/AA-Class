function Planet(r){
    this.loc = new JSVector(Math.random()*canvas.width, Math.random()*canvas.height);
    this.vel = new JSVector(0,0);
    this.radius = r;
}

Planet.prototype.run = function (){
    this.update();
    this.render();
}

Planet.prototype.update = function (){//move away from ship if ship gets close 
    if(this.loc.distanceSquared(ship.loc)<200){
        this.vel = ship.vel;
    }else{this.vel.setMagnitude(0);}
    this.loc = JSVector.addGetNew(this.loc, this.vel);
}

Planet.prototype.render = function (){
    context.fillStyle = "rgba(38, 91, 106, 1)";
    context.beginPath();
    context.arc(this.loc.x, this.loc.y, this.radius, Math.PI * 2, 0, false);
    context.closePath();
    context.fill();
}