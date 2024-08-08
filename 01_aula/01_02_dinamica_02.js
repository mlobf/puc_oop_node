//Criar um programa que pergunta a categorio do cliente e aplica o desconto automaticamente
//  tambem e exibe um recibo com os valores parciais e o total a pagar
/*
----------------------------------------------------
Categoria
Geral             0
Convidado         25
Idoso             50
Funcionario       50
Funcionario Idoso 50 sobre o valor do funcionario.
Crianca           100
----------------------------------------------------
valor do ingreço 500.
*/

import promptsync from "prompt-sync";

const valor_ingresso = 500;
let prompt = promptsync({ sigint: true });

let desconto;
let descontoGeral = 0.0;
let descontoConvidado = 0.2;
let descontoIdoso = 0.5;
let descontoFuncionario = 0.5;
let descontoFuncionarioIdoso = 0.75;
let descontoCrianca = 1;

let cliente_categoria = prompt(
  "Qual é a sua categoria ? Escolha dentre as seguintes opcoes: Geral,Convidado,Idoso,Funcionario,FuncionarioIdoso,Crianca "
);

switch (cliente_categoria) {
  case "Geral":
    desconto = valor_ingresso * descontoGeral;
    break;
  case "Convidado":
    desconto = valor_ingresso * descontoConvidado;
    break;
  case "Idoso":
    desconto = valor_ingresso * descontoIdoso;
    break;
  case "Funcionario":
    desconto = valor_ingresso * descontoFuncionario;
    break;

  case "FuncionarioIdoso":
    desconto = valor_ingresso * descontoFuncionarioIdoso;
    break;

  case "Crianca":
    desconto = valor_ingresso * descontoCrianca;
    break;

  default:
    desconto = NaN
}

let valorLiquidoBilhete = valor_ingresso - desconto;

console.log(valorLiquidoBilhete);
