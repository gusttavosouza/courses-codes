function Pessoa(){
    this.idade = 0

    const self = this // cria uma constante que recebe o THIS
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa