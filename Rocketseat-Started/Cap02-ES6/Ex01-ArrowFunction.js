const arr = [1, 2, 3, 4, 5, 6];

const newArr = arr.map(function(item) {
  return item * 2;
});
console.log(newArr);

const newArr2 = arr.map(item => {
  return item * 2;
});

const newArr3 = arr.map(item => item * 2);

const teste = () => 'Teste'

console.log(teste())
