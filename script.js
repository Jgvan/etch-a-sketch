const pixels = document.querySelectorAll(".pxl");

pixels.forEach(pixel => pixel.addEventListener("mouseenter", paintItBlack))

function paintItBlack(event){
    console.log(event.target);
    event.target.style.backgroundColor = "black";
}