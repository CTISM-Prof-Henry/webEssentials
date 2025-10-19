class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    cumprimentar() {
        console.log(`Olá, eu sou ${this.nome} e tenho ${this.idade} anos!`);
    }
}

// usa a classe definida
const alice = new Pessoa('Alice', 30);
alice.cumprimentar();