class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
  falar() {
    console.log(`Meu nome é ${this.nome}`);
  }
}

const p1 = new Pessoa("João");
p1.falar();


//NÃO TEM PROBLEMAS COM O BROWSER

const pessoa = nome => {
    return{
        falar: () => console.log(`Meu nome ${nome}`)
    }
}

const p2 = pessoa('Gustavo')
p2.falar()