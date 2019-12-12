const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(function(a, b){
    console.log(a, b)
})

fabricantes.forEach((fabricante, indice) => console.log(fabricante, indice)) //CALLBACK