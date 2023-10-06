function PS(x, y) {
    this.particles = [];//array for all the particles 
    this.life = 1;
    this.acc = new JSVector(0,-0.2);
    this.loc = new JSVector(x, y);//initial location of particles 
}

PS.prototype.run = function () {
    PS.add();//add a new particle to this particle system 
    PS.render();//load the particles of this particle system on the screen 
    PS.update();//move the particles 

}

PS.prototype.render = function () {
    for (let i = 0; i < this.particles.length; i++) {
        this.particles[i].render();
    }
}

PS.prototype.update = function () {
    for(let i = 0; i<this.particles.length; i++){
        this.vel = new JSVector.addGetNew(this.particles[i].vel, this.acc);
        this.vel.limit(5)
        let newLoc = new JSVector.addGetNew(this.particles[i].loc, this.vel);
        this.particles[i].loc = newLoc.copy();
    }
}

PS.prototype.add = function () {//add a new particle to the particles array 
    this.particles.push(new Particle(this.loc));
}