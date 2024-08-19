/*
Implemente uma classe que modela um baralho de cartas. O 
metodo construtor deve incluir  todas as 52 cartas do baralho. A
interface publica da classe deve ter metodos proprios para:
-Embaralhar o baralho
-Retirar  a carta que esta no topo do baralho.
-Inserir uma carta que esta no topo do baralho.
*/

class Carta {
  #naipe; //Representa o naipe da carta
  #valor; // Representa o valor base da carta
  #faceParaCima; // Representa o
  constructor(naipe, valor) {
    this.#naipe = naipe;
    this.#valor = valor;
    this.#faceParaCima = true;
  }
  valores() {
    return [
      "A",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
    ];
  }
  naipes() {
    return ["ouros", "paus", "espadas", "copas"];
  }
  toInt() {
    switch (this.#valor) {
      case "A":
        return 14;
      case "K":
        return 13;
      case "Q":
        return 12;
      case "J":
        return 11;
      default:
        return Number(this.#valor);
    }
  }
  verificaNaipe(naipe) {
    naipe = naipe.toLowerCase();
    return this.naipes().includes(naipe);
  }
  verificaValor(valor) {
    valor = valor.toLowerCase();
    return this.valores().includes(valor);
  }
  //
  faceParaCima() {
    return this.#faceParaCima;
  }
  //
  get naipe() {
    return this.#naipe;
  }
  set naipe(n) {
    this.#naipe = n;
  }
  get valor() {
    return this.#valor;
  }
  set valor(v) {
    this.#valor = v;
  }
  virada() {
    return !this.#faceParaCima;
  }
  vira() {
    this.#faceParaCima = !this.#faceParaCima;
  }
  toString() {
    return `${this.#valor},${this.#naipe}`;
  }
}

class Baralho {
  #cartas;
  #topo;

  static aux = new Carta("ouros", "A");
  static naipes = Baralho.aux.naipes();

  constructor() {
    this.#cartas = this.addCartas();
  }

  addCartas() {
    //let base = new Array(52);
    let base = new Array();
    let naipes = Baralho.aux.naipes();
    let valores = Baralho.aux.valores();
    let c = null;
    this.#topo = 0;

    for (let n = 0; n < naipes.length; n++) {
      for (let v = 0; v < valores.length; v++) {
        c = new Carta(naipes[n], valores[v]);
        //base[this.#topo] = c;
        base.push(c);
        //this.#topo++;
      }
      return base;
    }
  }

  get cartas() {
    return this.#cartas;
  }
}

let b = new Baralho();
//console.log(b.toString());
//console.log(b.cartas);
//console.log(Carta.naipe);
let c = new Carta("paus", 10);
console.log(c.naipes());
console.log(c.valores());
