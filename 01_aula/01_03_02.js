// funcoes com parametros default
/*
function parDefault(params = 4) {
  return params + 2;
}
*/

//console.log(parDefault(30));
//console.log(parDefault());

// Dinamica
/*
  os dois primeiros numeros da matricula sao relacionados a nivel de acesso do funcionario.
  Atualmente os niveis de acesso sao:
  01
  21
  35
  66
  67
  88
  Escreva uma funcao que receba por parametro um numero pertencente ao intervalo [0;9999] mais o nivel de acesso 
  do funcionario. Caso nao seja mencionado, usar por defaul o valor 21.

*/
function nivelAcessoOk(nivelAcesso) {
  switch (String(nivelAcesso)) {
    case "01":
    case "21":
    case "35":
    case "66":
    case "67":
      return true;
    default:
      return false;
  }
}

function acrescentaVerificador(numeroMatricula, nivelAcesso = 21) {
  let zeros_para_add = 6 - numeroMatricula.length;
  for (let index = 0; index < zeros_para_add; index++) {
    numeroMatricula = "0" + numeroMatricula;
  }
  let acumulado = 0;
  for (let i = 0; i < numeroMatricula.length; i++) {
    acumulado = acumulado + Number(numeroMatricula.charAt(i));
  }

  let stringAcumulado = String(acumulado).split("");
  let acumuladoFinal = 0;

  for (let i = 0; i < stringAcumulado.length; i++) {
    acumuladoFinal = acumuladoFinal + Number(stringAcumulado[i]);
  }

  const resultado = [nivelAcesso, numeroMatricula, acumuladoFinal];
  return resultado;
}

let new_matricula = 32334;
console.log(acrescentaVerificador(new_matricula));
console.log(nivelAcessoOk(211));
