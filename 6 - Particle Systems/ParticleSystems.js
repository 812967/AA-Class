function PS(x, y) {
    this.particles = [];//array for all the particles 
    this.life = 1;
    this.loc = new JSVector(x, y);//initial location of particles 
}

PS.prototype.run = function () {
    PS.add();//add a new particle to this particle system 
    PS.load();//load the particles of this particle system on the screen 
}

PS.prototype.load = function (){

}

PS.prototype.add = function () {//add a new particle to the particles array 
    let shape = Math.floor(Math.random() * 3);
    let color = Math.floor(Math.random() * 7);
    if (shape === 0) {//make it a circle 
        if(color === 0){//red
        context.strokeStyle = "rgba(255, 19, 0, 1)";
        context.fillStyle = "rgba(255, 19, 0, 1)";
        context.beginPath();
        context.arc(this.loc.x, this.loc.y, 5, Math.PI * 2, 0, false);
        context.stroke();
        context.fill();
        }
        if(color === 1){//orange
            context.strokeStyle = "rgba(255, 142, 0, 1)";
            context.fillStyle = "rgba(255, 142, 0, 1)";
            context.beginPath();
            context.arc(this.loc.x, this.loc.y, 5, Math.PI * 2, 0, false);
            context.stroke();
            context.fill();
        }
        if(color === 2){//yellow
            context.strokeStyle = "rgba(255, 219, 0, 1)";
            context.fillStyle = "rgba(255, 219, 0, 1)";
            context.beginPath();
            context.arc(this.loc.x, this.loc.y, 5, Math.PI * 2, 0, false);
            context.stroke();
            context.fill();
        }
        if(color === 3){//green
            context.strokeStyle = "rgba(0, 255, 44, 1)";
            context.fillStyle = "rgba(0, 255, 44, 1)";
            context.beginPath();
            context.arc(this.loc.x, this.loc.y, 5, Math.PI * 2, 0, false);
            context.stroke();
            context.fill();
        }
        if(color === 4){//blue
            context.strokeStyle = "rgba(50, 148, 243, 1)";
            context.fillStyle = "rgba(50, 148, 243, 1)";
            context.beginPath();
            context.arc(this.loc.x, this.loc.y, 5, Math.PI * 2, 0, false);
            context.stroke();
            context.fill();
        }
        if(color === 5){//purple
            context.strokeStyle = "rgba(115, 62, 255, 1)";
            context.fillStyle = "rgba(115, 62, 255, 1)";
            context.beginPath();
            context.arc(this.loc.x, this.loc.y, 5, Math.PI * 2, 0, false);
            context.stroke();
            context.fill();
        }
        if(color === 6){//pink
            context.strokeStyle = "rgba(248, 39, 255, 1)";
            context.fillStyle = "rgba(248, 39, 255, 1)";
            context.beginPath();
            context.arc(this.loc.x, this.loc.y, 5, Math.PI * 2, 0, false);
            context.stroke();
            context.fill();
        }
    }
    else if (shape ===1) {//make a square 

    }
    else {//make a triangle 

    }
}