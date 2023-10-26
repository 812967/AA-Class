function World() {
    //Main canvas showing part of world 
    this.canvasMain = document.getElementById('cnv1');
    this.contextMain = this.canvasMain.getContext('2d');
    //Mini canvas showing the whole world 
    this.canvasMini = document.getElementById('cnv2');
    this.contextMini = this.canvasMini.getContext('2d');
    //move Canvas relative to the world 
    this.canvasMainLoc = new JSVector(0, 0);
    //object holding limits of the whole world 
    this.dims = {
        top: -1500,
        left: -2000,
        bottom: 1500,
        right: 2000,
        width: 4000,
        height: 3000
    }
    //create bubbles 
    this.bubbles = [];
    this.loadBubbles(100, this.contextMain, this.contextMini, this.dims.width, this.dims.height);
    //make world fit in Mini canvas 
    this.scaleX = 0.5;
    this.scaleY = 0.5;
    //make Main canvas move in world with wasd keys 
    window.addEventListener("keypress", function (event) {
        switch (event.code) {
            case "KeyW":
                if (world.canvasMainLoc.y + 100 > world.dims.top)
                    world.canvasMainLoc.y -= 20;
                break;
            case "KeyS":
                if (world.canvasMainLoc.y + world.canvasMain.height - 100 < world.dims.bottom)
                    world.canvasMainLoc.y += 20;
                break;
            case "KeyA":
                if (world.canvasMainLoc.x + 100 > world.dims.left)
                    world.canvasMainLoc.y -= 20;
                break;
            case "KeyD":
                if (world.canvasMainLoc.x + world.canvasMain.width - 100 < world.dims.right)
                    world.canvasMainLoc.y += 20;
                break;
        }
    }, false);
}

World.prototype.run = function(){
    //clear the canvas
    this.contextMain.clearRect(0, 0, this.canvasMain.width, this.canvasMain.height);

    //run bubbles 
    for(let i = 0; i<this.bubbles.length; i++){
        this.bubbles[i].run();
    }
  //  save the context for the main Canvas
  //  move the main canvas inside of the world (translate according to this.cnvMainLoc)
  //  clear the mini rect
  //  save the miniContext
  //  scale world to fit in mini canvas (this.scaleX and this.scaleY)
  //  center rect in the miniCanvas
  //  run all of the movers
  //  restore the main and mini contexts
    this.contextMain.save();
    this.contextMain.translate(this.canvasMainLoc.x, this.canvasMainLoc.y);
    this.contextMini.clearRect(0, 0, this.canvasMini.width, this.canvasMini.height);
    this.contextMini.save();
    this.contextMain.scale(this.scaleX, this.scaleY);
    this.contextMain.translate(this.contextMain.width, this.contextMain.height);
    for(let i = 0; i<this.bubbles.length; i++){
        this.bubbles[i].run();
    }
    this.contextMini.restore();
    this.contextMain.restore();
  //+++    Draw the main and mini Canvas with bounds and axes
    this.contextMain.save();
    this.contextMain.translate(this.canvasMainLoc.x, this.canvasMainLoc.y);

  // save the main context
  // translate cnvMain according to the location of the canvas in the world
  // draw the bounds of the world in cnvMain
  // Add axis in the main Canvas
  //draw x and y axes on miniMap
  // scale cnvMini - contain the entire world (scaleX, and scaleY)
  //center cnvMini in world
  //outline box inside of cnvMini
  //draw x and y axes on miniMap
  // restore both ctxMain and ctxMini



}


World.prototype.loadBubbles = function (number, context1, context2, width, height) {
    for (let i = 0; i < number; i++) {
        let diam = 20;
        let x = Math.random() * (this.dims.width - 2 * diam) + diam - this.dims.width / 2;
        let y = Math.random() * (this.dims.height - 2 * diam) + diam - this.dims.height / 2;
        let loc = new JSVector(x, y);
        let vel = new JSVector(Math.random() * 5 - 2.5, Math.random() * 5 - 2.5);
        this.bubbles.push(new Bubble(loc, vel, diam, context1, context2, width, height));
    }
}