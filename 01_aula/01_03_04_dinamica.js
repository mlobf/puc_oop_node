import promptsync from "prompt-sync";

let prompt = promptsync({ sigint: true });

function random(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let max = prompt("Informe o valor maximo da aleatoriedade ");
let min = prompt("Informe o valor minimo da aleatoriedade ");

console.log(random(Number(max), Number(min)));

let newLista = [];
for (let index = 0; index < 100; index++) {
  let newNumber = random(Number(max), Number(min));
  if (newNumber > 0) {
    newLista[index] = newNumber;
  } else {
    newLista[index] = newNumber * -2;
  }
}

// Retornar o menor valor do arranjo.
let menorValor = 0;
for (let index = 0; index < newLista.length; index++) {
  if (newLista[index] < menorValor) {
    menorValor == newLista[index];
  }
}
console.log(menorValor);
