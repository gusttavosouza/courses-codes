function area(largura, altura){
    const area = largura * altura
    if(area > 20){
        console.log(`Valor acima do permitido: ${area}m2`)
    }else{
        return area
    }
}


console.log(area()) //retorna NaN
console.log(area(2)) //retorna NaN
console.log(area(2,3)) //retorna valor calculado
console.log(area(20,3)) // retorna string porque caiu no primeiro IF
console.log(area(20,3,3,4,5)) // retorna string porque caiu no primeiro IF