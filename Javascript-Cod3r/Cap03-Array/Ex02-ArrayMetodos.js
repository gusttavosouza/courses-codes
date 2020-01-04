const pilotos = ['Vettel', 'Alonso', 'Raikkonen','Massa']
pilotos.pop() //REMOVE O ULTIMO ELEMENTO DO ARRAY
console.log(pilotos)

pilotos.push('Verstappen') //ADD ELEMENTO NO FINAL DO ARRAY
console.log(pilotos)

pilotos.shift() //REMOVE PRIMEIRO ELEMENTO DO ARRAY
console.log(pilotos)

pilotos.unshift('Rubinho') // ADD ELEMENTO NO INICIO DO ARRAY
console.log(pilotos)

//adiciona
pilotos.splice(2,0, 'Bottas', 'Massa')
console.log(pilotos)

//remove
pilotos.splice(3,1)
console.log(pilotos)

const pilot = pilotos.slice(2) //novo array
console.log(pilot)

const pilot2 = pilotos.slice(1,4) // novo array
console.log(pilot2)