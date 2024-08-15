class Animal {
  #nome;
  #peso;
  #tipo;

  constructor(nome, peso, tipo) {
    this.#nome = nome;
    this.#peso = peso;
    this.#tipo = tipo;
  }

  get nome() {
    return this.#nome;
  }
  get peso() {
    return this.#peso;
  }
  get tipo() {
    return this.#tipo;
  }

  set nome(novoNome) {
    this.#nome = novoNome;
  }
}

let gato = new Animal("Gato", Number(10), "Mamifero");

gato.nome = "Siames";

console.log(gato.nome);
console.log(gato.peso);
console.log(gato.tipo);
