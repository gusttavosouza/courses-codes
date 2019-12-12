// CLOUSURE É O ESCOPO CRIADO QUANDO UMA FUNÇÃO É DECLARADA
// ESSE ESCOPO PERMITE A FUNÇÃO ACESSAR E MANIPULAR VARIAVEIS EXTERNAS DA FUNÇÃO

const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()

console.log(minhaFuncao())