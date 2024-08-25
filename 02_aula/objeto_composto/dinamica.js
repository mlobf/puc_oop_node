/**
 * 
Implemente uma classe que modela um baralho de cartas. O
método construtor deve incluir todas as 52 cartas no baralho. A
interface pública da classe deve ter métodos para:

• Embaralhar o baralho
• Retirar a carta que está no topo do baralho
• Inserir uma carta na parte de baixo do baralho

*/
import { validate } from "bycontract";

class Carta {
  #naipe;
  #valor;
  #faceParaCima;

  constructor(naipe, valor) {
    validate(arguments, ["String", "String"]);
    if (!this.verificaNaipe(naipe) || !this.verificaValor(valor)) {
      this.#naipe = "invalido";
      this.#valor = "invalido";
      return;
    }
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
    return console.log(`${this.#valor},${this.#naipe}`);
  }
}

let newCarta = new Carta("paus", "A");

newCarta.toString();

for (let index = 0; index < 1000; index++) {
  console.log(Math.round(Math.random(100) * 100));
}
