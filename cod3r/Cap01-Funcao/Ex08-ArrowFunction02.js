
// Arrow function não varia o THIS
function Pessoa() {

    this.idade = 0  //this fixo, aponta pro objeto // não interessa quem ta chamando ela

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000);
}

new Pessoa