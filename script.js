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
whiteBackground.addEventListener("click", clicked);
redBackground.addEventListener("click", clicked);
greenBackground.addEventListener("click", clicked);
blueBackground.addEventListener("click", clicked);


// Reset boxshadow for background color selection
function resetSelectedBckg() {
    bckgColorSelected.forEach(background => {
        background.style.boxShadow = "none";
    })
}

// Set box shadow highlight for selected background color and get the background color
function clicked(e) {
    resetSelectedBckg();
    let target = e.target;
    target.style.boxShadow = "0 0 0 2px rgba(232, 234, 237, 1)";
    let selectedColor = window.getComputedStyle(target).backgroundColor;
    console.log(selectedColor);
    modifyPixels(selectedColor);
    }

// The chosen and parsed background color is applied to the grid
function modifyPixels(selectedColor) {
    gridPixels.forEach(pixel => {
        pixel.style.backgroundColor = selectedColor;
    })
}


// PEN COLOR FEATURE INCL. ERASER
// Set DOM-related variables


// RESETTING WITH REFRESH/PAGE-LOAD
// Reset page when refreshing/loading
document.getElementsByTagName("body").onload = resetSketchBoard();


function resetSketchBoard() {
    updateSliderValue();


    
}