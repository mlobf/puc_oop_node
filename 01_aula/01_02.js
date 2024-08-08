import promptsync from "prompt-sync";

// Estruturas condicionais

let prompt = promptsync({ sigint: true });
let value = prompt("Informe o valor ");

if (value > 6) {
  console.log("Maior que 5");
} else {
  console.log("Menor que 5");
}

// Escopo de variaveis.
let preco = 10;

let novoPreco = 0;
console.log("Antigo valor", novoPreco);

if (preco < 20) {
  novoPreco = 50;
}

// Operador Ternario
let y = preco;
let x = y > 0 ? 10 : 20;
console.log(x);

let idade = prompt("Qual é a sua idade.");

let str = idade > 18 ? "responsavel" : "dependente";

console.log("str -> ", str);

// Uso do swich
let diaDaSemana = prompt("Escolha o dia da semana para agenda a sua consulta.");

switch (diaDaSemana) {
  case 1:
    console.log("E domingo");
    break;
  case 2:
    console.log("E segunda");
    break;
  case 3:
    console.log("E terca");
    break;
  case 4:
    console.log("E quarta");
    break;
  case 5:
    console.log("E quinta");
    break;
  case 6:
    console.log("E sexta");
    break;
  case 7:
    console.log("E sabado");
    break; //codigo de saida, do contrario o codigo continua a ser executado.
}
