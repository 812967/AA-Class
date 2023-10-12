function PS(x, y, index) {
    this.particles = [];//array for all the particles 
    //this.life = 1;
    this.gravity = new JSVector(1, 1);
    this.gravity.setDirection(-3 * Math.PI / 2);
    this.gravity.setMagnitude(0.08);
    this.loc = new JSVector(x, y);//initial location of particles 
    this.life = 600;
    this.index = index;

}

PS.prototype.run = function () {
    if(this.life%100 === 0){
        this.addParticle();
    }
    this.render();//load the particles of this particle system on the screen 
    this.update();//move the particles 
    if(this.particles.length === 0){
        particleSystems.splice(this.index, 1);
    }
    this.life--;
}

PS.prototype.render = function () {
    for (let i = 0; i < this.particles.length; i++) {
        this.particles[i].render();
    }
}

PS.prototype.update = function () {
    for (let i = this.particles.length - 1; i >= 0; i--) {
        this.particles[i].vel.setMagnitude(this.particles[i].vel.getMagnitude()-0.1);
        let newLoc = new JSVector.addGetNew(this.particles[i].loc, this.particles[i].vel);
        this.particles[i].loc = newLoc.copy();//add gravity to the velocity of the particles 
        if (this.particles[i].loc.y > 1010)
            this.particles.splice(i, 1);
    }
}

PS.prototype.addParticle = function () {//add a new particle to the particles array 
    if (this.life > 0) {
        this.particles.push(new Particle(this.loc));
    }
}
