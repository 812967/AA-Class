
// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
let canvas, context;
let particles = []; //array for particle systems 

function init() {
    canvas = document.getElementById("cnv");

    loadParticles();
    animate();      // kick off the animation
}

// every animation cycle
function animate() {
    // erase the HTMLCanvasElement
    context.clearRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(animate); // next cycle
}

function loadParticles() {
    for (let i = 0; i < particles.length; i++) {
        particles[i].run();
    }
}

window.addEventListener("click", newPS());

function newPS() {
    particles.push(new PS(offsetX, offsetY));
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
    context = canvas.getContext("2d");
    context.fillStyle = "rgba(248, 39, 255, 1)";
    context.beginPath();
    context.roundRect(200, 200, 100, 100, 10);
    context.fill();
    */