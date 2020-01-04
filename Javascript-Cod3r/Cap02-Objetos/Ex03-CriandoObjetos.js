//USANDO NOTAÇÃO LITERAL DE OBJETO
const obj1 = {};
console.log(obj1);

//OBJETC EM JS
console.log(typeof Object, typeof new Object());
const obj2 = new Object();
console.log(obj2);

//FUNÇÕES CONTRUTORAS
function Produto(nome, preco, desc) {
  this.nome = nome;
  this.getPrecoComDesconto = () => {
    return preco * (1 - desc);
  };
}

const obj3 = new Produto("Cadeira", 1000, 0.1);
const obj4 = new Produto("Notebook", 2000, 0.2);

console.log(obj3.getPrecoComDesconto(), obj4.getPrecoComDesconto());

//FUNÇAO FACTORY
function criarFuncionario(nome, salarioBase, faltas) {
  return {
    nome,
    salarioBase,
    faltas,
    getSalario() {
      return (salarioBase / 30) * (30 - faltas);
    }
  };
}

const obj5 = criarFuncionario('Joao', 7980, 4)
const obj6 = criarFuncionario('Maria', 11400, 1)
console.log(obj5.getSalario(), obj6.getSalario())

//OBJETCT .CREATE

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//UMA FUNCAO FAMOSA QUE RETORNA OBJETO
const fromJSON = JSON.parse('{"info":"Sou um JSON"}')
console.log(fromJSON)