//REST
const usuario = {
  nome: "Gustavo",
  idade: 21,
  empresa: "Nubber"
};

const { nome, ...resto } = usuario;

console.log(nome);
console.log(resto);

const arr = [1, 2, 3, 4];

const [a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);

function soma(...params) {
  return params.reduce((total, next) => total + next);
}
console.log(soma(1, 2, 3));

//SPREAD
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2]
console.log(arr3)

const usuario2 = {
    nome: 'Gustavo',
    idade: 21,
    empresa: 'Nubber'
}
const usuario3 = {...usuario2, nome: 'Roberto'}
console.log(usuario3)
