const notas = [8.8, 7.5, 3.1, 4.1, 7.1, 1.3, 8.3]

//sem usar callback
const notasBaixas = []

for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

//COM CALLBACK

const notasBaixas2 = notas.filter(function (nota) {   //funcao anonima
    return nota < 7
})
console.log(notasBaixas2)

const notasBaixas3 = notas.filter((nota) => nota < 7) //funcao arrow
console.log(notasBaixas3)