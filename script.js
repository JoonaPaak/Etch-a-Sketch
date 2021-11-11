updateTextInput();

const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

const val = document.getElementById('slider').value;

function resetBackground() {
	var elements = document.getElementsByClassName("grid-item");
	for(var i = 0; i < elements.length; i++){
		elements[i].style.backgroundColor = "white";
	}
}

function updateTextInput(val) {
  if (val === "0") {
    makeRows(16, 16);
    resetBackground();
  } else if (val === "1") {
    makeRows(20, 20);
    resetBackground();
  } else if (val === "2") {
    makeRows(24, 24);
    resetBackground();
  } else if (val === "3") {
    makeRows(28, 28);
    resetBackground();
  } else if (val=== "4") {
    makeRows(32, 32);
    resetBackground();
  } else if (val === "5") {
    makeRows(36, 36);
    resetBackground();
  } else if (val === "6") {
    makeRows(40, 40);
    resetBackground();
  } else if (val === "7") {
    makeRows(44, 44);
    resetBackground();
  } else if (val === "8") {
    makeRows(48, 48);
    resetBackground();
  } else if (val === "9") {
    makeRows(52, 52);
    resetBackground();
  } else if (val === "10") {
    makeRows(56, 56);
    resetBackground();
  } else if (val === "11") {
    makeRows(60, 60);
    resetBackground();
  } else if (val === "12") {
    makeRows(64, 64);
    resetBackground();
  }
}

makeRows(16, 16);

const hover = document.getElementById("container");
let color = document.getElementById("color-picker").value;
const clear = document.getElementById("clear");
const eraser = document.getElementById("eraser");
const coloring = document.getElementById("coloring");

hover.addEventListener("mouseover", function(event) {
  document.getElementById("color-picker").onchange = function() {
    color = this.value;
  }
  coloring.addEventListener("click", function() {
    color = document.getElementById("color-picker").value;
  })
  eraser.addEventListener("click", function() {
    color = "white";
  })
  event.target.style.backgroundColor = color;
});

clear.addEventListener("click", function() {
  resetBackground();
});