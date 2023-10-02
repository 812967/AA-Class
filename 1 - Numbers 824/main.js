
// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
let canvas, context;

function init() {
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");
    let nm = loadNumbers(1, 100, 20);
    console.log(nm);
    console.log("Mean: " + getMean(nm)); // mean 
    console.log("Mode: " + getMode(100, nm)); // mode 
    console.log(sortArray(nm)); // sort 
    console.log("Median: " + getMed(nm)); // median 
}

function loadNumbers(a, b, n){
    let numbers = [];
    for(let u = 0; u<n; u++){
        let num = Math.floor(Math.random()*(b-a+1)+a);
        numbers[u] = num;
    }
    return numbers;
}

