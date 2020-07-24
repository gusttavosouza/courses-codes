//Object.preventExtensions - PERMITE DELETAR E ALTERAR, SÓ QUE NÃO CONSEGUE ADICIONAR ATRIBUTOS
const produto = Object.preventExtensions({
  nome: "Qualquer",
  preco: 1.99,
  tag: "promoção"
});

console.log("Extensivel:", Object.isExtensible(produto));

produto.nome = "Borracha";
produto.descricao = "Borracha escolar branca";
delete produto.tag;

console.log(produto);

//Object.seal - PERMITE APENAS ALTERAR ATRIBUTOS. NÃO É POSSIVEL DELETAR NEM ADICIONAR
const pessoa = { nome: "Juliana", idade: 35 };
Object.seal(pessoa);
pessoa.descricao = "Coisa linda"
pessoa.nome = 'Keyla'
console.log(pessoa)

//OBJECT.FREEZE  = ATRIBUTOS E VALORES CONSTANTES