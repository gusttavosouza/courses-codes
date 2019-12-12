const usuario = {
    nome: 'Gustavo',
    idade: 21,
    endereço:{
        cidade: 'Itapema',
        estado: 'SC'
    },
};

//const nome = usuario.nome
//const idade = usuario.idade
//const cidade = usuario.endereço.cidade

const { nome, idade, endereço: {cidade} } = usuario


function monstraNome({nome}){
    console.log(nome)
}

monstraNome(usuario)