let pixels = document.querySelectorAll(".pxl");
let storedSize = 16;
let colorStyle = paintItRGB;
const canvas = document.querySelector(".canvas");
const slider = document.getElementById("grid-size");

slider.onchange = function() {
    createGrid(this.value);
    storedSize = this.value;
}

//Paints random colours
function paintItRGB(event) {
    //Check if it had any colour prior to event.
    if (event.target.style.backgroundColor == "rgba(0, 0, 0, 0)") {
        event.target.style.backgroundColor = `rgba(${randomNumber()},${randomNumber()},${randomNumber()},1)`;
    }
    else {
        event.target.style.backgroundColor = youWantItDarker(event.target.style.backgroundColor);
    }
}

//Creates a random number from 0-255
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
        }
        else {
            rgb[i] = parseInt(values[i]) - 25
        }
    }
    return `rgba(${rgb[0]},${rgb[1]},${rgb[2]},1)`;
}

//Turns the div black
function paintItBlack(event) {
    event.target.style.backgroundColor = "black";
}

//Creates the grid and adds event listener
function createGrid(size) {
    if(isNaN(size)) size = storedSize;

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
    // pixels.forEach(pixel => pixel.addEventListener("mouseenter", paintItRGB));
    pixels.forEach(pixel => pixel.addEventListener("mouseenter", colorStyle));
}

//Prompts user for grid size
function getCanvasSize() {
    let size = window.prompt("How big should the grid be? Please use numbers from between 2-100");

    if(isNaN(size) || size < 2 || size > 100){
        alert ("Not a valid number!");
        return;
    }
    return size;
}

function colorRGB(){
    colorStyle = paintItRGB;
    createGrid(storedSize);
}

function colorBlack(){
    colorStyle = paintItBlack;
    createGrid(storedSize);
}


createGrid(16);

