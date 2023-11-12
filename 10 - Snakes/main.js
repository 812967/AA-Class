
// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
let canvas, context;
let snakes = []; //array of snakes

function init() {
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");
    //load snakes into array 
    loadSnakes();
    animate();      // kick off the animation
}

// every animation cycle
function animate() {
    // erase the HTMLCanvasElement
    context.clearRect(0, 0, canvas.width, canvas.height);
    //run snakes every frame 
    // for (let i = 0; i < snakes.length; i++) {
    //     snakes[i].run();
    // }
    snakes[0].run();
    requestAnimationFrame(animate); // next cycle
}

function loadSnakes() {//load snakes into array 
    snakes[0] = new Snake(new JSVector(50, 150), 9);
}


/*
window.addEventListener("click", newPS);//adds a new particle system wherever clicked 

function newPS(e) {
    ind++;
    particleSystems.push(new PS(e.offsetX, e.offsetY));
}

/*
making a triangle 
    context.beginPath();
    context.moveTo(200, 200);
    context.lineTo(250, 250);
    context.moveTo(200, 250);
    context.lineTo(250, 250);
    context.lineTo(200, 200);
    context.fillStyle = "rgba(248, 39, 255, 1)";
    context.fill();
    context.strokeStyle = "rgba(0, 255, 44, 1)";
    context.stroke();
    
make a rectangle  
    context.fillStyle = "rgba(248, 39, 255, 1)";
    context.beginPath();
    context.rect(200, 200, 10, 10);
    context.fill();

make a cirlce 
context.strokeStyle = "rgba(248, 39, 255, 1)";
    context.fillStyle = "rgba(248, 39, 255, 1)";
    context.beginPath();
    context.arc(this.loc.x, this.loc.y, 5, Math.PI * 2, 0, false);
    context.stroke();
    context.fill();

make a rectanlge with round corners 
    context.fillStyle = "rgba(248, 39, 255, 1)";
    context.beginPath();
    context.roundRect(200, 200, 100, 100, 10);
    context.fill();
    */