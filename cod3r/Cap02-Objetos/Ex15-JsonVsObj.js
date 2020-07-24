const obj = {
  a: 1,
  b: 2,
  c: 3,
  soma() {
    return a + b + c;
  }
};
console.log(JSON.stringify(obj)); //converte objeto em JSON

//console.log(JSON.parse("{a: 1, b:2, c: 3}"));  //ERRADO
//console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3}"));//ERRADO
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}')); //CONVERTENDO JSON PARA OBJETO

console.log(JSON.parse('{"a": 1, "b": "string", "c": true, "d": {}, "e": [] }')) //TODOS OS TIPOS DE DADOS
