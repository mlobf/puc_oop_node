// Getter e Setter
class Pessoa {
  // Atributo privado
  #nome;

  constructor(nome) {
    this.#nome = nome;
  }

  // Getter para o atributo `nome`
  get nome() {
    return this.#nome;
  }

  // Setter para o atributo `nome`
  set nome(novoNome) {
    if (novoNome.length > 0) {
      this.#nome = novoNome;
    } else {
      console.log("O nome não pode ser vazio!");
    }
  }
}

export { Pessoa };
/*
const pessoa = new Pessoa("João");

console.log(pessoa.nome); // Chama o getter: Saída: 'João'

pessoa.nome = "Maria"; // Chama o setter
console.log(pessoa.nome); // Saída: 'Maria'

pessoa.nome = ""; // Chama o setter, mas a validação falha
console.log(pessoa.nome); // Saída: 'Maria' (não alterado)
*/
