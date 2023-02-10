
// DOM VARIABLES
// Set DOM-related variables for background-color feature
let bckgColorSelected = document.querySelectorAll(".color-bckg");
let whiteBackground = document.querySelector("#white-background");
let redBackground = document.querySelector("#red-background");
let greenBackground = document.querySelector("#green-background");
let blueBackground = document.querySelector("#blue-background");
let gridPixels = document.querySelectorAll(".row");

// Set DOM-related variables for pen-color feature
let penColorSelected = document.querySelectorAll(".color-pen");
let colorPickPen = document.querySelector("#color-pick-pop");
let rainbowPen = document.querySelector("#rainbow-pen");
let eraser = document.querySelector("#eraser");
    // gridPixels will be re-used from background color section //


// NON-DOM VARIABLES
// Variable to store grid background color
let gridBackgroundColor = window.getComputedStyle(whiteBackground).backgroundColor;

// Variables for grid creation
let grid = document.querySelector(".grid");

// Slider position will update text-box and grid resolution via eventListener
let slider = document.querySelector("#grid-slider");
let sliderValue = document.querySelector(".resol-output");

// Variables related to drawing/coloring feature
let draw = false;
let rainbowPenColorRandom;
console.log(rainbowPenColorRandom);
let penColor = colorPickPen.value;
console.log(penColor);


// Event listener for updating slider value
slider.addEventListener("mouseup", updateSliderValue);


// UPDATE SLIDER
function updateSliderValue() {
    sliderValue.textContent = slider.value + " x " + slider.value;
    createGrid();
}


// RESETTING WITH REFRESH/PAGE-LOAD
function resetSketchBoard() {
    updateSliderValue();
    resetSelectedBckg();
    resetSelectedPen();
    defaultPenColor();
    defaultBackgroundColor();
    penColor = colorPickPen.value;
}

// Features used for resetting page when loading
function defaultPenColor() {
    colorPickPen.style.boxShadow = "0 0 0 2px rgba(232, 234, 237, 1)";
}

function defaultBackgroundColor() {
    whiteBackground.style.boxShadow = "0 0 0 2px rgba(232, 234, 237, 1)";
}

document.getElementsByTagName("body").onload = resetSketchBoard();

//RESETTING SKETCH BOARD WITH CLEAR BUTTON
let btnClear = document.querySelector(".btn-clear");
btnClear.addEventListener("click", clearSketchBoard);

function clearSketchBoard() {
    updateBackground();    
}

// GRID CREATION AND PIXEL COLORING
// Create grid by creating columns and rows and append to .grid parent.
function createGrid() {
    removeAllChildren();
    for (let i = 0; i < slider.value; i++) {
        let column = document.createElement("div"); // Create column
        column.className = "column";
        for (let j = 0; j < slider.value; j++) {
            let row = document.createElement("div"); // Create row
            row.className = "row";
            column.appendChild(row);

            row.addEventListener("mouseover", function() { // Color pixel if draw is true
                if (!draw) return;
                row.style.backgroundColor = penColor;
            })

            row.addEventListener("mousedown", function() { // Color pixel on mouse down
                row.style.backgroundColor = penColor;
                })
        }
        grid.appendChild(column);
        gridPixels = document.querySelectorAll(".row");
    }
    updateBackground();
}



// Remove all children from node .grid
function removeAllChildren() {
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }
}

// Setting draw to true on mousedown
window.addEventListener("mousedown", function() {
    draw = true;
})

// Setting draw to false on mouseup
window.addEventListener("mouseup", function() {
    draw = false;
})


// SET BACKGROUND COLOR
// Add event listeners for all background color options
whiteBackground.addEventListener("click", backgroundClicked);
redBackground.addEventListener("click", backgroundClicked);
greenBackground.addEventListener("click", backgroundClicked);
blueBackground.addEventListener("click", backgroundClicked);

// Update grid background color when grid is created or changed
function updateBackground() {
    gridPixels.forEach(pixelRow => {
        pixelRow.style.backgroundColor = gridBackgroundColor;
    }) 
}

// Set box shadow highlight for selected background color and get the background color
function backgroundClicked(e) {
    resetSelectedBckg();
    let target = e.target;
    target.style.boxShadow = "0 0 0 2px rgba(232, 234, 237, 1)";
    gridBackgroundColor = window.getComputedStyle(target).backgroundColor;
    console.log(gridBackgroundColor)
    colorBackground(gridBackgroundColor);
    }

// Reset boxshadow for background color selection
function resetSelectedBckg() {
    bckgColorSelected.forEach(background => {
        background.style.boxShadow = "none";
    })
}

// The chosen and parsed background color is applied to the grid
function colorBackground(gridBackgroundColor) {
    gridPixels.forEach(pixel => {
        pixel.style.backgroundColor = gridBackgroundColor;
    })
}


// PEN COLOR FEATURE INCL. ERASER
// Add event listeners for pen color options
colorPickPen.addEventListener("click", penClicked);
colorPickPen.addEventListener("input", updatePenColorValue);
rainbowPen.addEventListener("click", penClicked);
eraser.addEventListener("click", penClicked);

function penClicked(e) {
    resetSelectedPen();
    let target = e.target
    target.style.boxShadow = "0 0 0 2px rgba(232, 234, 237, 1)";
    if (target === eraser) {
        penColor = gridBackgroundColor;
    }
    else if (target === rainbowPen) {
        randomPenColor(r, g, b, a);
        penColor = rainbowPenColorRandom;
    }
    else {
        penColor = colorPickPen.value;
    }
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

function randomPenColor(r, g, b, a) {
    rainbowPenColorRandom = `rgba(${r},${g},${b},${a})`;
}


function updatePenColorValue() {
    penColor = colorPickPen.value;
}
