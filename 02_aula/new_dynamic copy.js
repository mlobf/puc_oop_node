// Dinamica aula 2 parte 2.
// Demonstracao utilizando metodo construtor e encapsulamento.
import { validate } from "bycontract";

class Carro {
  #placa;
  #marcaModelo;
  #tamTanque;
  #consumo;
  #comboNoTanque;

  constructor(placa, marcaModelo, tamTanque, consumo) {
    validate(arguments, ["string", "string", "number", "number"]);
    this.#placa = placa;
    this.#marcaModelo = marcaModelo;
    if (tamTanque < 0) {
      this.#tamTanque = 45;
    } else {
      this.#tamTanque = tamTanque;
    }
    this.#tamTanque = tamTanque;
    this.#consumo = consumo;
    this.#comboNoTanque = 0;
  }
  //Entrega o combustivel necessario para percorrer uma
  // determinada distancia informada.
  combustivelNecessario(distancia) {
    validate(distancia, "Number");
    return distancia / this.consumo;
  }

  podeViajar(distancia) {
    validate(distancia, "Number");
    let cbNec = this.combustivelNecessario(distancia);
    if (cbNec <= this.comboNoTanque) {
      return true;
    } else {
      return false;
    }
  }
  toString() {
    let str = `Placa ${this.placa}, marca modelo ${this.marcaModelo}\n`;
    let strConsumo = `Consumo ${this.consumo}\n`;

    return str + strConsumo;
  }
}

let uno = new Carro();
uno.placa = "DUG 8035";
uno.marcaModelo = "Fiat Uno";
uno.tamTanque = 45;
uno.consumo = 13;
console.log(uno.toString());
console.log("");
