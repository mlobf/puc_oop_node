// Dinamica aula 2 parte 2.
// Demonstracao utilizando metodo construtor e encapsulamento.
import { validate } from "bycontract";
class Carro {
  placa;
  marcaModelo;
  tamTanque;
  comboNoTanque;
  consumo;

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
