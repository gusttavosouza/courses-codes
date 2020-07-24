//forma literal
function func1() { }

//funcao anonima armazenada em variavel
const func2 = function () { }

//funcao armazenada dentro de array
const array = [function (a, b) { return a + b }, func1, func2]
console.log(array[0](2, 3))

//funcao armazenada em objeto
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar())


//passar funcao como parametro
function run(fun) {
    fun()
}
run(function () { return console.log('Ola 2') })

//Funcao pode retornar/conter um outra funcao
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}
soma(5, 2)(5)
const cinco = soma(2,3)
cinco(3)
