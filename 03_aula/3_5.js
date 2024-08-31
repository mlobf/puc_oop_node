// Objetos Literais.

let carro = {
  cor: "Azul",
  peso: 1000,
};

carro.cor = "Amarelo";

console.log(carro.cor);

// Objetos Literais sao muito uteis para se criar objetos de classe
// que seriam usados apenas umas vez.

//A funcao encontra o maior e o menor valor dentro de uma lista.
function maiorMenor(numeros) {
  let maior = numeros[0];
  let menor = numeros[0];
  for (let index = 0; index < numeros.length; index++) {
    if (maior > numeros[index]) maior = numeros[index];
    if (menor < numeros[index]) menor = numeros[index];
  }
  const Resp = {
    maior: maior,
    menor: menor,
  };
  return Resp;
}

//let numeros = [10, 5, 20, 1, 30, 24];
//console.log(maiorMenor(numeros));

// Posso add metodos tambem.
function maiorMenorComMetodos(numeros) {
  let maior = numeros[0];
  let menor = numeros[0];
  for (let index = 0; index < numeros.length; index++) {
    if (maior > numeros[index]) maior = numeros[index];
    if (menor < numeros[index]) menor = numeros[index];
  }
  const Resp = {
    Maior: maior,
    Menor: menor,

    toString() {
      return `Os valores sao ${this.Maior}, ${this.Menor}`;
    },
  };
  return Resp;
}

let numeros = [10, 5, 20, 1, 30, 24];
let rr = maiorMenorComMetodos(numeros);
console.log(rr.toString());

// Vamos falar de Json
