function PS(x, y) {
    this.particles = [];//array for all the particles 
    //this.life = 1;
    this.gravity = new JSVector(1,1);
    this.gravity.setDirection(-3 * Math.PI / 2);
    this.gravity.setMagnitude(0.08);
    this.loc = new JSVector(x, y);//initial location of particles 

}

PS.prototype.run = function () {
    this.addParticle();//add a new particle to this particle system 
    this.render();//load the particles of this particle system on the screen 
    this.update();//move the particles 

}

PS.prototype.render = function () {
    for (let i = 0; i < this.particles.length; i++) {
        this.particles[i].render();
    }
}

PS.prototype.update = function () {
    for (let i = 0; i < this.particles.length; i++) {
        this.particles[i].vel = new JSVector.addGetNew(this.particles[i].vel, this.gravity);
        this.particles[i].vel.limit(4);
        let newLoc = new JSVector.addGetNew(this.particles[i].loc, this.particles[i].vel);
        this.particles[i].loc = newLoc.copy();
    }
}

PS.prototype.addParticle = function () {//add a new particle to the particles array 
    this.particles.push(new Particle(this.loc));
}
