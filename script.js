//



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

// Reset page when refreshing/loading
document.getElementsByTagName("body").onload = updateSliderValue(); 

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

// let colorPickBtn = document.querySelector(".btn-color");
// colorPickBtn.addEventListener("click", openColorPicker())

// Show pen color chosen in color-picker
let penColor = document.querySelector("#pen-color");
let colorPickPop = document.querySelector(".color-pick-pop");

colorPickPop.addEventListener("change", function () {
    penColor.style.backgroundColor = this.value;
});

// Set background color on grid
let whiteBackground = document.querySelector("#white-background");
let redBackground = document.querySelector("#red-background");
let greenBackground = document.querySelector("#green-background");
let blueBackground = document.querySelector("#blue-background");

whiteBackground.addEventListener("click", setBackgroundColor());


function setBackGroundColor() {
    
}





