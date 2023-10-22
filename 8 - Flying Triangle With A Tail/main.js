
// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
let canvas, context;
let ship, planet; //ship and planet global variables 
let pause = false;
let time, fp = true;

function init() {
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");
    ship = new Ship(Math.random() * canvas.width, Math.random() * canvas.height);
    planet = new Planet(20);
    animate();      // kick off the animation
}

// every animation cycle
function animate() {
    // erase the HTMLCanvasElement
    if (pause === true) {
        if (fp) {//only set time once per pause 
            time = Date.now();
            fp = false;
        }
        if (Date.now() - time >= 100) {//stop pause after 1000 miliseconds (1 second) 
            pause = false;
            fp = true;
        }
        //creates poof 
        context.rect(0, 0, canvas.width, canvas.height);
        context.fillStyle = "rgba(255, 219, 0, 1)";
        context.fill();
        context.fillStyle = "rgba(255, 19, 0, 1)";
        context.font = "275px serif";
        context.fillText("POOF!", 0, 500);
        requestAnimationFrame(animate);
        /*if ((Date.now() - time) % 1000 === 0) {
            context.clearRect(0, 0, canvas.width, canvas.height);
            ship.run();
            planet.run();
            requestAnimationFrame(animate);
        }*/

    } else {
        context.clearRect(0, 0, canvas.width, canvas.height);
        ship.run();
        planet.run();
        requestAnimationFrame(animate); // next cycle
    }
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