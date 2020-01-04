let comparaComThis = function (param) {
    console.log(this === param)
}

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

/*-------ARROW---------------------------*/

comparaComThisArrow = (param) => {
    console.log(this === param)
}
comparaComThisArrow = comparaComThisArrow.bind(obj)  //BIND NÃO ALTERA O CONTEXTO LEXICO DO THIS
comparaComThisArrow(global)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)

