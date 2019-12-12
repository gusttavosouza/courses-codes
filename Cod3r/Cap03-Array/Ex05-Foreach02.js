const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

Array.prototype.forEach2 = function(callback) {
    for(let i =0; i<this.length;i++){
        
    }
}



aprovados.forEach2((nome, indice) => console.log(`${indice}] nome`)) //PASSANDO FUNÇÃO DIRETAMENTE NO FOREACH

const exibirAprovados = (aprovado, indice) => console.log(`${indice}) ${aprovado}`)
aprovados.forEach2(exibirAprovados) //PASSANDO FUNÇÃO GUARDADE EM VARIVEL PARA O FOREACH

aprovados.forEach2(function(nome, indice, array) { // PASSA-SE O ARRAY JUNTO
    console.log(array) 
})