// PESSOA ==> 123 ==> {..}
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'

console.log(pessoa)

// PESSOA <== 456 ==> {...}
//pessoa = {nome: 'Ana'}    

Object.freeze(pessoa)  //NÃO CONSEGUE MAIS ALTERAR OBJETO
pessoa.nome = "Maria"
console.log(pessoa.nome)