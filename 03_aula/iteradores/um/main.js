// Interface publica
// sao metodos e propriedades de uma classe em questao.
class Funcionario {
  #numero;
  #idade;

  constructor(numero, idade) {
    this.#numero = numero;
    this.#idade = idade;
  }

  get idade() {
    return this.#idade;
  }

  get numero() {
    return this.#numero;
  }

  toString() {
    return `O numero do funcionario é ${this.#numero} e a sua idade é ${this.#idade}`;
  }
}

let joao = new Funcionario(2202, 32);
console.log(joao.toString());

// Aplicacao do instanceof
console.log(joao instanceof Funcionario);
