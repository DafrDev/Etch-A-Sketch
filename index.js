const squareSizeSlider = document.querySelector("#squareSize");
squareSizeSlider.addEventListener("change", getSquareQuantity);
squareSizeSlider.addEventListener("input", showValueOnScreen);

function showValueOnScreen(event) {
  const value = event.target.value;
  const rangeLabel = document.querySelector("#rangeLabel");

  rangeLabel.textContent = `Grid Size: ${value}x${value}`;
}

function removeOldValue(parent) {
  parent.textContent = "";
}

function drawOnMouseOver(sqDiv) {
  sqDiv.addEventListener("mouseover", () => {
    sqDiv.className += " draw";
  });
}

function createSquare(gridContainer, id, squareQty) {
  const squareDiv = document.createElement("div");
  squareDiv.className = "square";
  squareDiv.setAttribute("id", id);
  gridContainer.append(squareDiv);
  gridContainer.style.gridTemplateColumns = `repeat(${squareQty}, 1fr)`;

  drawOnMouseOver(squareDiv);
}

function createGrid(squareQty) {
  const gridContainer = document.querySelector(".grid-container");
  const contain = gridContainer.childNodes;

  if (contain.length >= 1) {
    removeOldValue(gridContainer);
  }

  let id = 0;
  for (let c = 0; c < squareQty; c++) {
    for (let r = 0; r < squareQty; r++) {
      id++;
      createSquare(gridContainer, id, squareQty);
    }
  }
}

function getSquareQuantity(event) {
  const squareQty = event.target.value;

  createGrid(squareQty);
}

createGrid(16);
