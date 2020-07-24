contruirProduto = (nome, valor) => {
    valorDesconto = 0.10;
    return {
        nome,
        valor: valor - (valor*valorDesconto)
    }
}

console.log(contruirProduto("Carne", 100))