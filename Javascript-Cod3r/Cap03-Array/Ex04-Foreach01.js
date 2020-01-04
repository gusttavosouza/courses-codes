const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice) {
    console.log(`${indice+1} - ${nome}`) //PASSANDO FUNÇÃO ANONIMA PARA FOREACH
})

aprovados.forEach((nome, indice) => console.log(`${indice}] nome`)) //PASSANDO FUNÇÃO DIRETAMENTE NO FOREACH

const exibirAprovados = (aprovado, indice) => console.log(`${indice}) ${aprovado}`)
aprovados.forEach(exibirAprovados) //PASSANDO FUNÇÃO GUARDADE EM VARIVEL PARA O FOREACH

aprovados.forEach(function(nome, indice, array) { // PASSA-SE O ARRAY JUNTO
    console.log(array) 
})

// A FUNÇÃO FOREACH RECEBE 3 PARAMETROS QUE PODEM SER SUPRIMIDOS, SÃO ELES:
    //-Elemento
    //-Indice do Elemento
    //-Array completo