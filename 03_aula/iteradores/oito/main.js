/*
Escreva uma funcao javascript que recebe uma data,
o numero de voo,
o custo base,e dois bools representados por acesso vip e bagagem.
A funcao deve retornar uma instancia de uma subclasse passagem.que atenda  
o especificado nos booleanos conforme a tabela abaixo.

-------------------------------
acessoVip   Bagagem tipo
false       false   Economica
false       true    Executiva
true        false   Undefined
true        true    PrimeiraClasse
-------------------------------
Escreva uma funcao e um exemplo de uso que imprime o custo da
passagem retornada  ou uma mensagem adequada.
*/

import { validate } from "bycontract";

class Passagem {
  #data;
  #nroVoo;
  #custoBase;

  constructor(data, nroVoo, custoBase) {
    validate(arguments, ["String", "Number", "Number"]);
    this.#data = data;
    this.#nroVoo = nroVoo;
    this.#custoBase = custoBase;
  }

  get data() {
    return this.#data;
  }
  get nroVoo() {
    return this.#nroVoo;
  }

  get custoBase() {
    return this.#custoBase;
  }

  totalPagar() {
    return undefined;
  }

  qtdMalas() {
    return 0;
  }
  acessoPrioritario() {
    return false;
  }

  toString() {
    let str = `Data ${this.data}, Voo: ${this.#nroVoo}, valor ${this.totalPagar}`;
    str += `, malas: ${this.qtdMalas()}, acesso prioritario: ${this.acessoPrioritario}`;
    return str;
  }
}

class Economica extends Passagem {
  constructor(data, nroVoo, custoBase) {
    super(data, nroVoo, custoBase);
  }

  totalPagar() {
    let operacional = this.custoBase * 0.1;
    return this.custoBase + operacional;
  }
  toString() {
    return `Economica ` + super.toString();
  }
}

class Executiva extends Passagem {
  constructor(data, nroVoo, custoBase) {
    super(data, nroVoo, custoBase);
  }
  totalPagar() {
    let operacional = this.custoBase * 0.3;
    return this.custoBase + operacional;
  }
  qtdMalas() {
    return 1;
  }
  toString() {
    return `Executiva + ` + super.toString();
  }
}

class PrimeiraClasse extends Passagem {
  constructor(data, nroVoo, custoBase) {
    super(data, nroVoo, custoBase);
  }

  totalPagar() {
    let extra = super.totalPagar() * 0.5;
    return super.totalPagar() + extra;
  }

  qtdMalas() {
    return 3;
  }

  acessoPrioritario() {
    return true;
  }

  toString() {
    return "Primeira Classe " + super.toString();
  }
}

function criaPassagem(data, nroVoo, custoBase, vip, malas) {
  validate(arguments, ["String", "Number", "Number", "Boolean", "Boolean"]);
  let passagem = undefined;

  if (vip === false && malas == false) {
    passagem = new Economica(data, nroVoo, custoBase);
    return passagem;
  }

  if (vip === false && malas === true) {
    passagem = new Executiva(data, nroVoo, custoBase);
    return passagem;
  }

  if (vip === true && malas === true) {
    passagem = new PrimeiraClasse(data, nroVoo, custoBase);
    return passagem;
  }
  return passagem;
}
