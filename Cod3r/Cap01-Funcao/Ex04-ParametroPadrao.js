//Estrategia 1 de valor padrão  // é falho caso passe valor 0 por parametro
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1

    return a + b + c
}
console.log(soma1(), soma1(10), soma1(10, 22), soma1(10, 20, 30), soma1(0, 20, 30))


//estrategia 2 de valor padrao
function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c     //ideal para soma de valores 
    return a + b + c
}

console.log(soma2(), soma2(10), soma2(10, 22), soma2(10, 20, 30), soma2(0, 20, 30))

// valor padrao do ES2015  // MELHOR FORMA DE ESCRITA
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3(), soma3(10), soma3(10, 22), soma3(10, 20, 30), soma3(0, 20, 30))