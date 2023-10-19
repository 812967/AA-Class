
// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
let canvas, context;
let particleSystems = []; //array for particle systems 
let creatures = [];
let firstTime = true;
let ind = 0;
let time = 0;
let color = 255;
let addC = false;

function init() {
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");
    loadParticles();
    loadCreatures();
    animate();      // kick off the animation
}

// every animation cycle
function animate() {
    // erase the HTMLCanvasElement
    time++;
    context.clearRect(0, 0, canvas.width, canvas.height);
    NightnDay();
    runParticles();
    runCreatures();
    if(time%600===0){
        particleSystems.push(new PS(Math.random()*canvas.width, Math.random()*canvas.height));
    }
    requestAnimationFrame(animate); // next cycle
}

function loadCreatures(){
    let stop = Math.random()*(8-2+1) + 2;
    for(let i = 0; i<stop; i++){
        creatures[i] = new Creature(Math.random()*canvas.width, Math.random()*canvas.height);
    }
}

function runCreatures(){
    for(let i = 0; i<creatures.length; i++){
        creatures[i].run();
    }
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

function NightnDay(){
    if(color === 0){
        addC = true;
    }
    if(color === 255){
        addC = false;
    }
    if(addC){
        color+=0.5;
    }
    else{
        color-=0.5;
    }
    context.rect(0,0, canvas.width, canvas.height);
    context.fillStyle = "rgb(" + color +","+color+","+color+")";
    context.fill()
}