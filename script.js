//

//Create grid by creating columns and rows



let columns = document.querySelector("#grid-slider").value // value from slider
console.log(columns);
let rows = document.querySelector("#grid-slider").value // value from slider
console.log(rows);

let grid = document.createElement("div"); // create grid container
grid.className = "grid";

for (let i = 0; i < columns; i++) {
    let column = document.createElement("div"); // create column
    column.className = "column";
    for (let j = 0; j < rows; j++) {
        let row = document.createElement("div"); // create row
        row.className = "row";
        //row.textContent = i + "-" + j;
        column.appendChild(row);
    }
    grid.appendChild(column);
}

let getGridContainer = document.querySelector(".grid-container");
getGridContainer.prepend(grid); // insert grid in the correct place in DOM