//funcao normal
let dobro = function (a) {
    return 2 * a
}

//funcao arrow
dobro = (a) => {
    return 2 * a
}

//funcao arrow reduzida //return implicito
dobro = (a) => 2 * a

console.log(dobro(Math.PI))

//funcao normal
let ola = function () {
    return 'Ola'
}

ola = () => 'Ola' // return implicito
ola = _ => 'Ola'  //Omitir os parenteses

console.log(ola())