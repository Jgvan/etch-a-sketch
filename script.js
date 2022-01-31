let pixels = document.querySelectorAll(".pxl");
let size;

const canvas = document.querySelector(".canvas");

pixels.forEach(pixel => pixel.addEventListener("mouseenter", paintItBlack));

function paintItBlack(event) {
    console.log(event.target);
    event.target.style.backgroundColor = "black";
}

function createGrid(size) {
    
    let oldCanvas = document.querySelector(".canvas");
    while(oldCanvas.firstChild) {
        oldCanvas.removeChild(oldCanvas.firstChild);
    }

    for(let i = 0; i < size; i++){
        let div = document.createElement("div");
        div.classList.add("row");

        for(let j = 0; j < size; j++){
            let pxldiv = document.createElement("div");
            pxldiv.classList.add('pxl');
            pxldiv.style.height = 500/size + "px";
            pxldiv.style.width = 500/size + "px";
            div.appendChild(pxldiv);
        }
        canvas.appendChild(div);
    }
    pixels = document.querySelectorAll(".pxl");
    pixels.forEach(pixel => pixel.addEventListener("mouseenter", paintItBlack));
}

function getCanvasSize(){
    let size = window.prompt("How big should the grid be? Please use numbers from between 2-100");
    return size;
}

createGrid(getCanvasSize());