let calculation = localStorage.getItem("calculation") || "";
const value = document.querySelector(".js-calcul");
showCalcul();
function updateCalculation(value) {
  calculation += value;
  localStorage.setItem("calculation", calculation);
  showCalcul();
}

// Optional: you can also create a function in order
// to reuse this code.
// function saveCalculation() {
//   localStorage.setItem("calculation", calculation);
// }

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "+", "*", "-", "/"];
document.addEventListener("keydown", (event) => {
  console.log(event.key);
  numbers.forEach((element) => {
    if (element == event.key) {
      document.querySelector(".js-calcul").innerHTML = event.key;
      updateCalculation(event.key);
    }
  });

  if (event.key === "Backspace") {
    clear();
  }
  if (event.key === "Enter") {
    result();
  }
});

function showCalcul() {
  document.querySelector(".js-calcul").innerHTML = calculation;
}

function clear() {
  calculation = "";
  localStorage.setItem("calculation", calculation);
  showCalcul();
}

function result() {
  calculation = eval(calculation);
  localStorage.setItem("calculation", calculation);
  showCalcul();
}
