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

function updateTextInput(val) {
  if (val === "0") {
    makeRows(16, 16);
    document.getElementsByClassName("grid-item").style.backgroundColor = "white";
  } else if (val === "1") {
    makeRows(20, 20);
  } else if (val === "2") {
    makeRows(24, 24);
  } else if (val === "3") {
    makeRows(28, 28);
  } else if (val=== "4") {
    makeRows(32, 32);
  } else if (val === "5") {
    makeRows(36, 36);
  } else if (val === "6") {
    makeRows(40, 40);
  } else if (val === "7") {
    makeRows(44, 44);
  } else if (val === "8") {
    makeRows(48, 48);
  } else if (val === "9") {
    makeRows(52, 52);
  } else if (val === "10") {
    makeRows(56, 56);
  } else if (val === "11") {
    makeRows(60, 60);
  } else if (val === "12") {
    makeRows(64, 64);
  }
}

const hover = document.getElementById("container");

hover.addEventListener("mouseover", function(event){
  event.target.style.backgroundColor = "black";
});

makeRows(16, 16);