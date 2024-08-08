import promptsync from "prompt-sync";
let prompt = promptsync({ sigint: true });

// Lacos de repeticao

//While
console.log("Usando o While");
let limite = 1;
let n = 0;

while (n < limite) {
  console.log(n);
  console.log("Usando o While");
  n += 2;
}

console.log("Usando o for");
n = 0;
limite = 1;

for (n = 0; n < limite; n++) {
  console.log(n);
  console.log("Usando o for");
}

//continue nao interrompe o while. ele somente aborta aquela iteracao.
// ja o break interrompe a iteracao
limite = 100;
n = 0;
while (n < limite) {
  console.log(n);
  if (n > 0 && n % 10 === 0) {
    let rp = prompt("Deseja pausar ? (S/N)");
    if (rp === "S") {
      continue;
      //break;
    }
  }
  n += 2;
}
