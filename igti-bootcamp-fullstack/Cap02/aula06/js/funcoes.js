function sum(a, b) {
  return a + b;
}

console.log(sum(1, 2));

function campareNumbers(a, b) {
  return a - b;
}
console.log(campareNumbers(1, 2));
console.log(campareNumbers(1, 1));
console.log(campareNumbers(3, 2));

function somatorio(from, upTo) {
  var sum = 0;

  for (var i = 0; i <= upTo; i++) {
    sum += i;
  }
  return sum;
}

console.log(somatorio(1, 10));
