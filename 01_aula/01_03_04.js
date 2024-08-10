import promptsync from "prompt-sync";
let prompt = promptsync({ sigint: true });

/*

// Arranjos e lista , iteraveis no geral.
console.log("--------------------" * 100);
let lista = [10, 11, 12, 14, 55];

// iteracao de um arranjo usando o while
let count = 0;
while (count < lista.length) {
  console.log(lista);
  count++;
}

// iteracao de um arranjo usando o for
for (let index = 0; index < lista.length; index++) {
  const element = lista[index];
  console.log(element);
}
console.log("--------------------" * 100);
// Dinamica
let idades = [];
let terminou = false;
let contador = 0;

while (!terminou) {
  let idade = Number(prompt("Entre com a sua idades."));
  if (Number(idade) == -1) {
    break;
  }
  idades[contador] = idade;
  contador++;
}
console.log(idades);

/*
  O JAVASCRIPT CRIA ESPAÇOS VAZIOS NAS POSICOES NAO EXISTENTES EM UMA LISTA QUANDO
  E ADD UMA ELEMENTO EM UMA POSICAO ADJANCENTE A ULTIMA POSICAO OCUPADA.

  > let lista = [1,2,3,4,5]
  undefined
  > lista
  [ 1, 2, 3, 4, 5 ]
  > lista[6]
  undefined
  > lista
  [ 1, 2, 3, 4, 5 ]
  > lista[6] = 11
  11
  > lista
  [ 1, 2, 3, 4, 5, <1 empty item>, 11 ]
> 

*/

// Criando  um array com 10 posicoes.
// Isso é uma boa pratica.
// Economica em termos computacionais.

let NewLista = new Array(10);
console.log(NewLista);

//
// Dinamica
let idades = [];
let terminou = false;
let count = 0;
while (!terminou) {
  let idade = Number(prompt(`Entre com a Idade do ${count} `));
  if (Number(idade) == -1) {
    break;
  }
  idades[count] = idade;
  count++;
}
console.log(idades);
//Achar a frequencia de uma idade apresentada.

let idadeProcurada = prompt("Qual é a idade que vc gostaria de verificar ?");

let frequencia = 0;
for (let index = 0; index < idades.length; index++) {
  const element = idades[index];
  if (element == Number(idadeProcurada)) {
    frequencia++;
  }
}
console.log(
  `A frequencia da idade informada é ${frequencia > 1 ? String(frequencia) : "Não houve frequencia"}`
);
