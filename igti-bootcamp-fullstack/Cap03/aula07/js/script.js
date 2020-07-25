var city = document.querySelector("#city");

console.log(city);

city.textContent = "São Paulo - SP";

var personaldataArray = Array.from(document.querySelectorAll(".data"));
console.log(personaldataArray);

for (let i = 0; i < personaldataArray.length; i++) {
  var current = personaldataArray[i];
  current.style.color = "green";
}
