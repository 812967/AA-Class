
// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
let canvas, context;
let movers = [];

function init() {
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");
    loadMovers(1);
    animate();      // kick off the animation
}

// every animation cycle
function animate() {
    // erase the HTMLCanvasElement
    context.clearRect(0, 0, canvas.width, canvas.height);
    runMovers(); 
    movers[0].run();  // run bubbles
    requestAnimationFrame(animate); // next cycle
}

function loadMovers(n) {
    for (let i = 0; i < n; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        movers[i] = new Mover(x, y, 10, 8);
    }
}

// move the circle to a new location
function runMovers() {
    for (let i = 0; i < movers.length; i++) {
        movers[i].run();
    }
}

