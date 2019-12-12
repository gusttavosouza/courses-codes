
//HOSTING É O IÇAMENTO DA  FUNÇÃO
//FUNÇÕES LITERAIS SEMPRE VÃO SER IÇADAS PARA O INICIO DO CÓDIGO
//POR ISSO É POSSIVEL CHAMA-LA ANTES DE DECLARA-LA

function myFunction(){
    var number1 = 1;
    var number2 = 2;

    return sum();

    function sum() {  //FUNCIONA PORQUE O JS FAZ O HOSTING
        return 1+2
    }
}
console.log(myFunction())

// FUNÇÃO ANONIMAS E ARRAY FUCNTIONS NÃO FAZEM HOSTING
//ENTÃO É NECESSÁRIO DECLARA ANTES

function myFunction2(){
    var number1 = 1;
    var number2 = 2;

    return sum;

    var sum = function sum() {  //FUNCIONA PORQUE O JS FAZ O HOSTING
        return number1+number2
    }
}
console.log(myFunction())