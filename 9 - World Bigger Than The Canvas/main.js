//World Bigger Than The Canvas - Started 10/24/2023 

let world;
window.onload = init;

function init() {
    world = new World();
    animate();
}

function animate() {
    world.run();
    requestAnimationFrame(animate);
}

