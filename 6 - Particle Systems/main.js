
// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
let canvas, context;
let particleSystems = []; //array for particle systems 
let firstTime = true;
let ind = 0;

function init() {
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");
    loadParticles();
    animate();      // kick off the animation
}

// every animation cycle
function animate() {
    // erase the HTMLCanvasElement
    context.clearRect(0, 0, canvas.width, canvas.height);
    runParticles();
    requestAnimationFrame(animate); // next cycle
}

function loadParticles() {
    if (firstTime) {//creates an initial particle system when first opened 
        particleSystems.push(new PS(400, 300, ind));
    }
}

function runParticles() {//renders and updates particles in all particle systems 
    for (let i = 0; i < particleSystems.length; i++) {
        particleSystems[i].run();
    }
}


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