// GRID CREATION
// Variables for grid creation
let grid = document.querySelector(".grid");

// Slider position will update text-box and grid resolution via eventListener
let slider = document.querySelector("#grid-slider");
let sliderValue = document.querySelector(".resol-output");
slider.addEventListener("mouseup", updateSliderValue);


function updateSliderValue() {
    sliderValue.textContent = slider.value + " x " + slider.value;
    createGrid();
}

// RESETTING WITH REFRESH/PAGE-LOAD
// Reset page when refreshing/loading
document.getElementsByTagName("body").onload = resetSketchBoard();


function resetSketchBoard() {
    updateSliderValue();


    
}


// Remove all children from node .grid
function removeAllChildren() {
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }
}

// Create grid by creating columns and rows and append to .grid parent.
function createGrid() {
    removeAllChildren();
    for (let i = 0; i < slider.value; i++) {
        let column = document.createElement("div"); // create column
        column.className = "column";
        for (let j = 0; j < slider.value; j++) {
            let row = document.createElement("div"); // create row
            row.className = "row";
            column.appendChild(row);
        }
        grid.appendChild(column);
    }
}


// SET BACKGROUND COLOR
// Set DOM-related variables
let bckgColorSelected = document.querySelectorAll(".color-bckg");
let whiteBackground = document.querySelector("#white-background");
let redBackground = document.querySelector("#red-background");
let greenBackground = document.querySelector("#green-background");
let blueBackground = document.querySelector("#blue-background");
let gridPixels = document.querySelectorAll(".row");

// Add event listeners for all background color options
whiteBackground.addEventListener("click", backgroundClicked);
redBackground.addEventListener("click", backgroundClicked);
greenBackground.addEventListener("click", backgroundClicked);
blueBackground.addEventListener("click", backgroundClicked);

// Add event listener for when setting new grid resolution
slider.addEventListener("click", updateBackground);

// Update grid background when slider is clicked
function updateBackground() {
    
}

// Set box shadow highlight for selected background color and get the background color
function backgroundClicked(e) {
    resetSelectedBckg();
    let target = e.target;
    target.style.boxShadow = "0 0 0 2px rgba(232, 234, 237, 1)";
    let selectedColor = window.getComputedStyle(target).backgroundColor;
    colorBackground(selectedColor);
    }

// Reset boxshadow for background color selection
function resetSelectedBckg() {
    bckgColorSelected.forEach(background => {
        background.style.boxShadow = "none";
    })
}

// The chosen and parsed background color is applied to the grid
function colorBackground(selectedColor) {
    gridPixels.forEach(pixel => {
        pixel.style.backgroundColor = selectedColor;
    })
}


// PEN COLOR FEATURE INCL. ERASER
// Set DOM-related variables
let penColorSelected = document.querySelectorAll(".color-pen");
let colorPickPen = document.querySelector("#color-pick-pop");
let rainbowPen = document.querySelector("#rainbow-pen");
let eraser = document.querySelector("#eraser");
    // gridPixels will be re-used from background color section //

// Add event listeners for pen color options
colorPickPen.addEventListener("click", penClicked);
rainbowPen.addEventListener("click", penClicked);
eraser.addEventListener("click", penClicked);

function penClicked(e) {
    resetSelectedPen();
    let target = e.target
    target.style.boxShadow = "0 0 0 2px rgba(232, 234, 237, 1)";

}

function resetSelectedPen() {
    penColorSelected.forEach(pen => {
        pen.style.boxShadow = "none";
    })
}

// Random generation of RGBA-colors
let rgbMaxNum = 255;
let r = Math.floor(Math.random() * rgbMaxNum);
let g = Math.floor(Math.random() * rgbMaxNum);
let b = Math.floor(Math.random() * rgbMaxNum);
let a = Number(Math.random().toFixed(2));



function randomRGBA(r, g, b, a) {
    return `rgba(${r},${g},${b},${a})`;
}


