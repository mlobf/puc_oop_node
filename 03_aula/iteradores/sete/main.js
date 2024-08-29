import { validate } from "bycontract";

class Funcionario {
  #nome;
  #salarioBase;

  constructor(nome, salarioBase) {
    validate(arguments, ["String", "Number"]);
    this.#nome = nome;
    this.#salarioBase = salarioBase;
  }

  get nome() {
    return this.#nome;
  }

  get salarioBase() {
    return this.#salarioBase;
  }

  get salarioLiquido() {
    let inss = this.#salarioBase * 0.1;
    return this.salarioBase - inss;
  }

  toString() {
    return `Nome: ${this.nome} , salario base : r$ ${this.salarioBase.toFixed(2)} salario liquido ${this.salarioLiquido}`;
  }
}

class Tecnico extends Funcionario {
  #categoria;

  constructor(nome, salarioBase, categoria) {
    validate(arguments, ["String", "Number", "Number"]);
    super(nome, salarioBase);
    this.#categoria = categoria;
  }

  get categoria() {
    return this.#categoria;
  }

  get salarioLiquido() {
    let s1 = super.salarioLiquido;
    if (this.categoria > 3) {
      s1 *= 1.03;
    }
    return s1;
  }
}

class Professor extends Funcionario {
  #cargaHorariaMensal;

  constructor(nome, salarioBase, cargaHorariaMensal) {
    validate(arguments, ["String", "Number", "Number"]);
    super(nome, salarioBase);
    this.#cargaHorariaMensal = cargaHorariaMensal;
  }

  get cargaHorariaMensal() {
    return this.#cargaHorariaMensal;
  }
  set cargaHorariaMensal(valor) {
    validate(arguments, ["Number"]);
    this.#cargaHorariaMensal = valor > 0 ? valor : 0;
  }
  get salarioLiquido() {
    let valHora = this.salarioBase / 44;
    let sb = valHora * this.cargaHorariaMensal;
    let inss = sb * 0.1;
    let sl = sb - inss;
    return sl;
  }
}

class Pesquisador extends Professor {
  #cargaHorarioPesquisa;

  constructor(nome, salarioBase, cargaHorariaMensal, cargaHoraPesquisa) {
    validate(arguments, ["String", "Number", "Number"]);
    super(nome, salarioBase, cargaHorariaMensal);
    this.#cargaHorarioPesquisa = cargaHoraPesquisa;
  }

  get cargaHoraPesquisa() {
    return this.#cargaHorarioPesquisa;
  }

  set cargaHoraPesquisa(valor) {
    validate(arguments, ["Number"]);
    this.#cargaHorarioPesquisa = valor > 0 ? valor : 0;
  }

  //Implica na alteracao do salarioa liquido.
  get cargaHorariaMensal() {
    return super.cargaHorariaMensal + this.#cargaHorarioPesquisa;
  }
}
