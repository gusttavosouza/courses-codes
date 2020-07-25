// var input1 = document.querySelector("#input1");
// input1.value = "Gustavo";
window.addEventListener("load", start);

function start() {
  console.log("start");
  var span = document.querySelector("#input1");
  input1.addEventListener("keyup", countName);
}

function countName(valor) {
  var count = valor.target.value.length;
  var span = document.querySelector("#nameLenght");
  span.textContent = count;
}
