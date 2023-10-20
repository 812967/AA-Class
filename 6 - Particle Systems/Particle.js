function Particle(loc) {
    this.loc = loc;
    this.vel = new JSVector(0, 5);
    this.angle = Math.random() * ((5 * Math.PI / 6) - (Math.PI / 6)) + (Math.PI / 6);
    this.vel.setDirection(this.angle * -1);
    this.shape = Math.floor(Math.random() * 3);
    this.color = Math.floor(Math.random() * 7);
    this.opacity = 1;
}

Particle.prototype.render = function () {//render the shapes 

    if (this.shape === 0) {//make it a circle 
        if (this.color === 0) {//red
            context.fillStyle = "rgba(255, 19, 0, " + this.opacity + ")";
            context.beginPath();
            context.arc(this.loc.x, this.loc.y, 5, Math.PI * 2, 0, false);
            context.fill();
        }
        else if (this.color === 1) {//orange
            context.fillStyle = "rgba(255, 142, 0, " + this.opacity + ")";
            context.beginPath();
            context.arc(this.loc.x, this.loc.y, 5, Math.PI * 2, 0, false);
            context.fill();
        }
        else if (this.color === 2) {//yellow
            context.fillStyle = "rgba(255, 219, 0, " + this.opacity + ")";
            context.beginPath();
            context.arc(this.loc.x, this.loc.y, 5, Math.PI * 2, 0, false);
            context.fill();
        }
        else if (this.color === 3) {//green
            context.fillStyle = "rgba(0, 255, 44, " + this.opacity + ")";
            context.beginPath();
            context.arc(this.loc.x, this.loc.y, 5, Math.PI * 2, 0, false);
            context.fill();
        }
        else if (this.color === 4) {//blue
            context.fillStyle = "rgba(50, 148, 243, " + this.opacity + ")";
            context.beginPath();
            context.arc(this.loc.x, this.loc.y, 5, Math.PI * 2, 0, false);
            context.fill();
        }
        else if (this.color === 5) {//purple
            context.fillStyle = "rgba(115, 62, 255, " + this.opacity + ")";
            context.beginPath();
            context.arc(this.loc.x, this.loc.y, 5, Math.PI * 2, 0, false);
            context.fill();
        }
        else if (this.color === 6) {//pink
            context.fillStyle = "rgba(248, 39, 255, " + this.opacity + ")";
            context.beginPath();
            context.arc(this.loc.x, this.loc.y, 5, Math.PI * 2, 0, false);
            context.fill();
        }
    }
    else if (this.shape === 1) {//make a square 
        if (this.color === 0) {//red
            context.save();
            context.translate(this.loc.x, this.loc.y);
            let rA = this.vel.getDirection();
            context.rotate(rA);
            context.fillStyle = "rgba(255, 19, 0, " + this.opacity + ")";
            context.beginPath();
            context.rect(0, 0, 10, 10);
            context.fill();
            context.closePath();
            context.restore();
        }
        else if (this.color === 1) {//orange
            context.save();
            context.translate(this.loc.x, this.loc.y);
            let rA = this.vel.getDirection();
            context.rotate(rA);
            context.fillStyle = "rgba(255, 142, 0, " + this.opacity + ")";
            context.beginPath();
            context.rect(0, 0, 10, 10);
            context.fill();
            context.closePath();
            context.restore();
        }
        else if (this.color === 2) {//yellow
            context.save();
            context.translate(this.loc.x, this.loc.y);
            let rA = this.vel.getDirection();
            context.rotate(rA);
            context.fillStyle = "rgba(255, 219, 0, " + this.opacity + ")";
            context.beginPath();
            context.rect(0, 0, 10, 10);
            context.fill();
            context.closePath();
            context.restore();
        }
        else if (this.color === 3) {//green
            context.save();
            context.translate(this.loc.x, this.loc.y);
            let rA = this.vel.getDirection();
            context.rotate(rA);
            context.fillStyle = "rgba(0, 255, 44, " + this.opacity + ")";
            context.beginPath();
            context.rect(0, 0, 10, 10);
            context.fill();
            context.closePath();
            context.restore();
        }
        else if (this.color === 4) {//blue
            context.save();
            context.translate(this.loc.x, this.loc.y);
            let rA = this.vel.getDirection();
            context.rotate(rA);
            context.fillStyle = "rgba(50, 148, 243, " + this.opacity + ")";
            context.beginPath();
            context.rect(0, 0, 10, 10);
            context.fill();
            context.closePath();
            context.restore();
        }
        else if (this.color === 5) {//purple
            context.save();
            context.translate(this.loc.x, this.loc.y);
            let rA = this.vel.getDirection();
            context.rotate(rA);
            context.fillStyle = "rgba(115, 62, 255, " + this.opacity + ")";
            context.beginPath();
            context.rect(0, 0, 10, 10);
            context.fill();
            context.closePath();
            context.restore();
        }
        else if (this.color === 6) {//pink
            context.save();
            context.translate(this.loc.x, this.loc.y);
            let rA = this.vel.getDirection();
            context.rotate(rA);
            context.fillStyle = "rgba(248, 39, 255, " + this.opacity + ")";
            context.beginPath();
            context.rect(0, 0, 10, 10);
            context.fill();
            context.closePath();
            context.restore();
        }
    }
    else if(this.shape === 2){
        if(this.color === 0){
            context.save();
            context.translate(this.loc.x, this.loc.y);
            let rA = this.vel.getDirection();
            context.rotate(rA);
            context.moveTo(15, 0);
            context.lineTo(0, 0);
            context.lineTo(0, 15);
            context.fillStyle = "rgba(255, 19, 0, " + this.opacity + ")";
            context.fill();
            context.restore();
        }
        else if(this.color === 1){
            context.save();
            context.translate(this.loc.x, this.loc.y);
            let rA = this.vel.getDirection();
            context.rotate(rA);
            context.moveTo(15, 0);
            context.lineTo(0, 0);
            context.lineTo(0, 15);
            context.fillStyle = "rgba(255, 142, 0, " + this.opacity + ")";
            context.fill();
            context.restore();
        }
        else if(this.color === 2){
            context.save();
            context.translate(this.loc.x, this.loc.y);
            let rA = this.vel.getDirection();
            context.rotate(rA);
            context.moveTo(15, 0);
            context.lineTo(0, 0);
            context.lineTo(0, 15);
            context.fillStyle = "rgba(255, 219, 0, " + this.opacity + ")";
            context.fill();
            context.restore();
        }
        else if(this.color === 3){
            context.save();
            context.translate(this.loc.x, this.loc.y);
            let rA = this.vel.getDirection();
            context.rotate(rA);
            context.moveTo(15, 0);
            context.lineTo(0, 0);
            context.lineTo(0, 15);
            context.fillStyle = "rgba(0, 255, 44, " + this.opacity + ")";
            context.fill();
            context.restore();
        }
        else if(this.color === 4){
            context.save();
            context.translate(this.loc.x, this.loc.y);
            let rA = this.vel.getDirection();
            context.rotate(rA);
            context.moveTo(15, 0);
            context.lineTo(0, 0);
            context.lineTo(0, 15);
            context.fillStyle = "rgba(50, 148, 243, " + this.opacity + ")";
            context.fill();
            context.restore();
        }
        else if(this.color === 5){
            context.save();
            context.translate(this.loc.x, this.loc.y);
            let rA = this.vel.getDirection();
            context.rotate(rA);
            context.moveTo(15, 0);
            context.lineTo(0, 0);
            context.lineTo(0, 15);
            context.fillStyle = "rgba(115, 62, 255, " + this.opacity + ")";
            context.fill();
            context.restore();
        }
        else if(this.color === 6){
            context.save();
            context.translate(this.loc.x, this.loc.y);
            let rA = this.vel.getDirection();
            context.rotate(rA);
            context.moveTo(15, 0);
            context.lineTo(0, 0);
            context.lineTo(0, 15);
            context.fillStyle = "rgba(248, 39, 255, " + this.opacity + ")";
            context.fill();
            context.restore();
        }
    }
}