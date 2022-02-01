let pixels = document.querySelectorAll(".pxl");
let size;

const canvas = document.querySelector(".canvas");

pixels.forEach(pixel => pixel.addEventListener("mouseenter", paintItBlack));

function paintItRGB(event) {
    // console.log(event.target.style.backgroundColor);
    //Check if it had any colour prior to event.
    if (event.target.style.backgroundColor == "rgba(0, 0, 0, 0)") {
        event.target.style.backgroundColor = `rgba(${randomNumber()},${randomNumber()},${randomNumber()},1)`;
    }
    else {
        event.target.style.backgroundColor = youWantItDarker(event.target.style.backgroundColor);
    }
}

function randomNumber() {
    return Math.floor(Math.random() * 256)
}

//Takes a rgba string and makes it darker
function youWantItDarker(rgbaString) { //We kill the flame
    let rgb = [0, 0, 0];

    let values = rgbaString.split("(");
    values = values[1].split(",");
    for (let i = 0; i < 3; i++) {
        if (parseInt(values[i]) < 25) {
            rgb[i] = 0;
            // console.log("yep");
        }
        else {
            rgb[i] = parseInt(values[i]) - 25
            // console.log("nop");
        }
    }
    console.log(`rgba(${rgb[0]},${rgb[1]},${rgb[2]},1)`);
    return `rgba(${rgb[0]},${rgb[1]},${rgb[2]},1)`;
}

function paintItBlack(event) {
    event.target.style.backgroundColor = "black";
}

function createGrid(size) {
    
    if(isNaN(size)) return;

    let oldCanvas = document.querySelector(".canvas");
    while (oldCanvas.firstChild) {
        oldCanvas.removeChild(oldCanvas.firstChild);
    }

    for (let i = 0; i < size; i++) {
        let div = document.createElement("div");
        div.classList.add("row");

        for (let j = 0; j < size; j++) {
            let pxldiv = document.createElement("div");
            pxldiv.classList.add('pxl');
            pxldiv.style.height = 500 / size + "px";
            pxldiv.style.width = 500 / size + "px";
            pxldiv.style.backgroundColor = "rgba(0,0,0,0)";
            div.appendChild(pxldiv);
        }
        canvas.appendChild(div);
    }
    pixels = document.querySelectorAll(".pxl");
    //TODO Make button to change eventlistener
    // pixels.forEach(pixel => pixel.addEventListener("mouseenter", paintItBlack));
    pixels.forEach(pixel => pixel.addEventListener("mouseenter", paintItRGB));
}

function getCanvasSize() {
    let size = window.prompt("How big should the grid be? Please use numbers from between 2-100");

    if(isNaN(size) || size < 2 || size > 100){
        alert ("Not a valid number!");
        return;
    }
    return size;
}

createGrid(16);

