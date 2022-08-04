const gridWidthBtn = document.querySelector(".gridWidth");

gridWidthBtn.addEventListener("click", createGridContainer);

function drawOnMouseOver(sqDiv) {
  sqDiv.addEventListener("mouseover", e => {
    sqDiv.className += " draw";
  });
}

function createGrid() {
  const gridContainer = document.querySelector(".grid-container");

  let id = 0;
  for (let c = 0; c < gridWidth; c++) {
    for (let r = 0; r < gridWidth; r++) {
      id++;
      const squareDiv = document.createElement("div");
      squareDiv.className = "square";
      squareDiv.setAttribute("id", id);
      gridContainer.append(squareDiv);

      drawOnMouseOver(squareDiv);
    }
  }
}

function createGridContainer() {
  const grid = document.querySelector(".grid-container");

  gridWidth = prompt("grid width");

  const gridContainerWidth = gridWidth * 16 + "px";
  const gridContainerHeight = gridWidth * 16 + "px";

  grid.style.cssText = `
    width: ${gridContainerWidth};
    height: ${gridContainerHeight};
  `;

  createGrid(gridWidth);
}
