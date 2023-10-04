function PS(x, y){
    this.particles = [];//array for all the particles 
    this.defaultLoc = new JSVector(x, y);//initial location of particles 
}

PS.prototype.run = function (){
    PS.add();//add a new particle to the particles array 
    PS.load();//load the particles on the screen 
}

PS.prototype.add = function (){
    
}