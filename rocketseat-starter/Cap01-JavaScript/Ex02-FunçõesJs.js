function soma (valorUm, valorDois){
    return valorUm + valorDois
}

const soma = (valorUm = 0, valorDois = 0)  =>{
    return valorUm + valorDois
}

soma(1,2)

function exibeAlgo(){
    console.log('Hello World')
}

setInterval(exibeAlgo, 500)
setTimeout(exibeAlgo, 500)