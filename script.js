const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};
const button = document.getElementById("black");
const purple = document.getElementById("purple");


button.addEventListener("click", askUser);
purple.addEventListener("click", askUserPurple);


function askUserPurple(){
    let numberOfRows = parseInt(prompt("Please Enter Pixel Size (max:100)"));
    if (numberOfRows > 100)
        prompt("Max Pixel Size is 100, Enter Pixel Size Again (max:100)")
    else {
        makeRows(numberOfRows, numberOfRows);
        var cells = document.getElementsByClassName("grid-item")
        var i = cells.length;
        while (i--){
            cells[i].addEventListener("mouseenter", function(e){
                e.target.style.backgroundColor = "purple";
            });
        }

    }
}

function askUser(){    
    let numberOfRows = parseInt(prompt("Please Enter Pixel Size (max:100)"));
    if (numberOfRows > 100)
        prompt("Max Pixel Size is 100, Enter Pixel Size Again (max:100)")
    else {
        makeRows(numberOfRows, numberOfRows);
        var cells = document.getElementsByClassName("grid-item")
        var i = cells.length;
        while (i--){
            cells[i].addEventListener("mouseenter", function(e){
                e.target.style.backgroundColor = "black";
            });  
        }
    }
   
} 


 



//different way to create a grid
/*container.innerHTML = `<div class="row">${'<div class="cell"></div>'.repeat(n)}</div>`
    .repeat(n);
*/
