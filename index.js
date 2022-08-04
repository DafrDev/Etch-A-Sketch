console.log("Working...");

function createGrid() {
  const gridContainer = document.querySelector(".grid-container");

  let id = 0;
  for (let c = 0; c < 16; c++) {
    for (let r = 0; r < 16; r++) {
      id++;
      const squareDiv = document.createElement("div");
      squareDiv.className = "square";
      squareDiv.setAttribute("id", id);
      gridContainer.append(squareDiv);
    }
  }
}

createGrid();
