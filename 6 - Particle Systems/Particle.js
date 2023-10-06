function Particle(loc) {
    this.loc = loc;
    this.vel = new JSVector(0, 5);
    this.angle = Math.random()*((5*Math.PI/6) - (Math.PI/6) + 1) + (Math.PI/6);
    this.vel.setDirection(angle);
    let shape = Math.floor(Math.random() * 2);
    let color = Math.floor(Math.random() * 7);
}

Particle.prototype.render = function () {//render the shapes 

    if (shape === 0) {//make it a circle 
        if (color === 0) {//red
            context.strokeStyle = "rgba(255, 19, 0, 1)";
            context.fillStyle = "rgba(255, 19, 0, 1)";
            context.beginPath();
            context.arc(this.loc.x, this.loc.y, 5, Math.PI * 2, 0, false);
            context.stroke();
            context.fill();
        }
        else if (color === 1) {//orange
            context.strokeStyle = "rgba(255, 142, 0, 1)";
            context.fillStyle = "rgba(255, 142, 0, 1)";
            context.beginPath();
            context.arc(this.loc.x, this.loc.y, 5, Math.PI * 2, 0, false);
            context.stroke();
            context.fill();
        }
        else if (color === 2) {//yellow
            context.strokeStyle = "rgba(255, 219, 0, 1)";
            context.fillStyle = "rgba(255, 219, 0, 1)";
            context.beginPath();
            context.arc(this.loc.x, this.loc.y, 5, Math.PI * 2, 0, false);
            context.stroke();
            context.fill();
        }
        else if (color === 3) {//green
            context.strokeStyle = "rgba(0, 255, 44, 1)";
            context.fillStyle = "rgba(0, 255, 44, 1)";
            context.beginPath();
            context.arc(this.loc.x, this.loc.y, 5, Math.PI * 2, 0, false);
            context.stroke();
            context.fill();
        }
        else if (color === 4) {//blue
            context.strokeStyle = "rgba(50, 148, 243, 1)";
            context.fillStyle = "rgba(50, 148, 243, 1)";
            context.beginPath();
            context.arc(this.loc.x, this.loc.y, 5, Math.PI * 2, 0, false);
            context.stroke();
            context.fill();
        }
        else if (color === 5) {//purple
            context.strokeStyle = "rgba(115, 62, 255, 1)";
            context.fillStyle = "rgba(115, 62, 255, 1)";
            context.beginPath();
            context.arc(this.loc.x, this.loc.y, 5, Math.PI * 2, 0, false);
            context.stroke();
            context.fill();
        }
        else if (color === 6) {//pink
            context.strokeStyle = "rgba(248, 39, 255, 1)";
            context.fillStyle = "rgba(248, 39, 255, 1)";
            context.beginPath();
            context.arc(this.loc.x, this.loc.y, 5, Math.PI * 2, 0, false);
            context.stroke();
            context.fill();
        }
    }
    else if (shape === 1) {//make a square 
        if (color === 0) {
            context.fillStyle = "rgba(255, 19, 0, 1)";
            context.beginPath();
            context.rect(200, 200, 10, 10);
            context.fill();
        }
        else if (color === 1) {
            context.fillStyle = "rgba(255, 142, 0, 1)";
            context.beginPath();
            context.rect(200, 200, 10, 10);
            context.fill();
        }
        else if (color === 2) {
            context.fillStyle = "rgba(255, 219, 0, 1)";
            context.beginPath();
            context.rect(200, 200, 10, 10);
            context.fill();
        }
        else if (color === 3) {
            context.fillStyle = "rgba(0, 255, 44, 1)";
            context.beginPath();
            context.rect(200, 200, 10, 10);
            context.fill();
        }
        else if (color === 4) {
            context.fillStyle = "rgba(50, 148, 243, 1)";
            context.beginPath();
            context.rect(200, 200, 10, 10);
            context.fill();
        }
        else if (color === 5) {
            context.fillStyle = "rgba(115, 62, 255, 1)";
            context.beginPath();
            context.rect(200, 200, 10, 10);
            context.fill();
        }
        else if (color === 6) {
            context.fillStyle = "rgba(248, 39, 255, 1)";
            context.beginPath();
            context.rect(200, 200, 10, 10);
            context.fill();
        }
    }
}