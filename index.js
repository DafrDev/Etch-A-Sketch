const gridContainer = document.querySelector(".grid-container");

const squareSizeSlider = document.querySelector("#squareSize");
squareSizeSlider.addEventListener("change", getSquareQuantity);
squareSizeSlider.addEventListener("input", showValueOnScreen);

const colorPicker = document.querySelector("#colorPicker");
colorPicker.addEventListener("change", getColor);

const cleanGrid = document.querySelector("#cleanGrid");
cleanGrid.addEventListener("click", () => {
  createGrid(squareSizeSlider.value);
});

// black color
let color = "#000000";

function getColor(event) {
  color = event.target.value;
}

function showValueOnScreen(event) {
  const value = event.target.value;
  const rangeLabel = document.querySelector("#rangeLabel");

  rangeLabel.textContent = `Grid Size: ${value}x${value}`;
}

function removeOldValue(parent) {
  parent.textContent = "";
}

let drawing = false;
let erase = false;
function drawOnGrid(sqDiv) {
  const leftMouseBtn = 0;
  const rightMouseBtn = 2;

  sqDiv.addEventListener("mousedown", e => {
    if (leftMouseBtn === e.button) {
      sqDiv.style.background = `${color}`;
      drawing = true;
    }

    if (rightMouseBtn === e.button) {
      sqDiv.style.background = "";
      erase = true;
    }
  });

  sqDiv.addEventListener("mousemove", e => {
    if (drawing) {
      sqDiv.style.background = `${color}`;
    }

    if (erase) {
      sqDiv.style.background = "";
    }
  });

  sqDiv.addEventListener("mouseup", () => {
    drawing = false;
    erase = false;
  });
}

function createSquare(gridContainer, id, squareQty) {
  const squareDiv = document.createElement("div");
  squareDiv.className = "square";
  squareDiv.setAttribute("id", id);
  gridContainer.append(squareDiv);
  gridContainer.style.gridTemplateColumns = `repeat(${squareQty}, 1fr)`;

  drawOnGrid(squareDiv);
}

function createGrid(squareQty) {
  const contain = gridContainer.childNodes;

  gridContainer.addEventListener("contextmenu", e => {
    e.preventDefault();
  });

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
