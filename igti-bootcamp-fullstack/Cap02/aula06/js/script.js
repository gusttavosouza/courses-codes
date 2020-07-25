var a = 6;
var b = 6;

if (a > b) {
  console.log(a + " É maior que " + b);
} else {
  if (a < b) {
    console.log(a + " É menor que " + b);
  } else {
    console.log(a + " É igual a " + b);
  }
}

var dia = 4;

switch (dia) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda-feira");
    break;
  case 3:
    console.log("Terça-feira");
    break;
  case 4:
    console.log("Quarta-feira");
    break;
  case 5:
    console.log("Quinta-Feira");
    break;
  case 6:
    console.log("Sexta-feira");
    break;
  case 7:
    console.log("Sabado");
    break;
  default:
    console.log("Dia inválido");
}

var resposta = a > b ? "maior" : a < b ? "menor" : "igual";
console.log(resposta);

//SOMATORIO COM WHILE

var numeroAtual = 1;
var somatorio = 0;
while (numeroAtual <= 10) {
  somatorio += numeroAtual;
  numeroAtual++;
}
console.log(somatorio);

numeroAtual = 1;
somatorio = 0;
do {
  somatorio += numeroAtual;
  numeroAtual++;
} while (numeroAtual <= 10);
console.log(somatorio);

somatorio = 0;
for (let i = 1; i <= 10; i++) {
  somatorio += i;
}
console.log(somatorio);
