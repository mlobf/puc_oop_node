//Em uma empresa a maticula de um funcionario é composta por uma sequencia de digitos (0-9)
//  Organizados em dois campos: <nnnnnn>-<v>
//  O significado destes campos é :
//  <nnnnnn> -> um numero sequencial de 6 digitos completados com 0 a esquerda.
//  <v> -> um digito verificador calculado da seguinte forma : somam-se todos os digitos da matriculas. Se a soma tiver
//  mais de um digito,somam-se os seus digitos e assim sucessivamente ate que se tenha um unico digito.
//
// Exemplo
// 21004537-4
// 2+1+0+0+4+5+3+7 = 22 e 2 + 2  = 4
// O programa calcula um numero verificador de uma determinada matricula.

import promptsync from "prompt-sync";

let prompt = promptsync({ sigint: true });

let numeroMatricula = prompt(
  "Qual é o seu numero de matricula contendo 6 digitos ? "
);
// add zeros a esquerda caso seja necessario.
console.log(numeroMatricula.length);
let zeros_para_add = 6 - numeroMatricula.length;
for (let index = 0; index < zeros_para_add; index++) {
  numeroMatricula = "0" + numeroMatricula;
}
console.log("O numero de matricula é ", numeroMatricula);

// realizar a soma dos numero da matricula.
let acumulado = 0;
for (let i = 0; i < numeroMatricula.length; i++) {
  acumulado = acumulado + Number(numeroMatricula.charAt(i));
  console.log("O valor parcial de acumulado é ", acumulado);
}

console.log("O valor de acumulado é ", acumulado);

let stringAcumulado = String(acumulado).split("");

console.log(stringAcumulado);

let acumuladoFinal = 0;

for (let i = 0; i < stringAcumulado.length; i++) {
  //acumuladoFinal = acumuladoFinal + Number(stringAcumulado.charAt(i));
  console.log("stringAcumulado ", stringAcumulado[i]);
  acumuladoFinal = acumuladoFinal + Number(stringAcumulado[i]);
  //acumuladoFinal = acumuladoFinal + Number(stringAcumulado.charAt(i));
}
console.log("O valor do digito verificador é ", acumuladoFinal);

// receber o numero de matricula e add zeros a esquerda caso seja necessario.
// com todos os digitos preenchidos temos que realizar o algoritimo para calcular o digito verificador
