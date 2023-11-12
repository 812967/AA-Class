function Snake(loc, segments) {
    this.loc = loc;
    this.acc = [];
    for(let i = 0; i<segments; i++){
        this.acc[i] = new JSVector(0,0);
    }
    this.vel = [];
    for (let i = 0; i<segments; i++){
        this.vel[i] = new JSVector(-1, -1);
    }
    this.segments = [];//each segment has a vector 
    for (let i = 0; i < segments; i++) {
        this.segments[i] = new JSVector(this.loc.x + i * 50 + 10, this.loc.y + i * 50 + 10);
    }
    this.baseDis = this.segments[0].distance(this.segments[1]);
}

Snake.prototype.run = function () {
    this.update();
    this.checkEdges();
    this.render();
}

Snake.prototype.update = function () {
    for(let i = 0; i<this.segments.length; i++){
        this.vel[i] = JSVector.addGetNew(this.vel[i], this.acc[i]);
        this.segments[i] = JSVector.addGetNew(this.segments[i], this.vel[i]);
    }
}

Snake.prototype.checkEdges = function (){
    //check edges of head 
    if(this.segments[0].x<10){
    this.vel[0].x*=-1;
    }
    if(this.segments[0].x>canvas.width -10){
        this.vel[0].x*=-1; 
    }
    if(this.segments[0].y<10){
        this.vel[0].y*=-1; 
    }
    if(this.segments[0].y>canvas.height-10){
            this.vel[0].y*=-1;
    }
    for(let i = 1; i<this.segments.length; i++){
        if(this.segments[i-1].distance(this.segments[i])!== this.baseDis){
            this.acc[i] = this.vel[i-1].copy();
            this.acc[i].normalize();
            this.acc[i].multiply(0.5);
            let newVec = JSVector.addGetNew(this.vel[i], this.acc[i]);
            newVec.limit(1);
            this.vel[i] = newVec;
        }
        if(this.segments)
    }
}

Snake.prototype.render = function () {

    for (let i = 0; i < this.segments.length - 1; i++) {//draw sections of snake 
        context.beginPath();
        context.lineWidth = 20;
        context.lineCap = "round";
        context.strokeStyle = "rgba(80, 230, 180, 0.5)";
        context.moveTo(this.segments[i].x, this.segments[i].y);
        context.lineTo(this.segments[i + 1].x + 5, this.segments[i + 1].y + 5);
        context.stroke();
        context.closePath();
    }

}