// Subprogramacao e Strings

// interpolacao
let meuNome = "Marcos";

console.log(`O meu nome é ${meuNome}`);

// indexavel
console.log(meuNome[0]);
console.log(meuNome.charAt(0));
console.log(meuNome.charAt(110)); //retorna fora da escala, undefined

// Strings sao imutaveis
// Qual uma string recebe uma alteracao, é criado uma variavel nova e a antiga é jogada fora.

//Metodos de String
// UpperCase
console.log(meuNome, "", meuNome.toUpperCase());
// LowerCase
console.log(meuNome, "", meuNome.toLocaleLowerCase());

//Localizador SubStrings
let str = "Widget with id";
console.log(str.indexOf("Widget"));
console.log(str.indexOf("widget")); // nao encontrado
console.log(str.indexOf("id"));

// Verificando Substrings
console.log(str.includes("id"));

//Funcoes
function calculaMedia(listaNumeros) {
  const sum = listaNumeros.reduce(
    (acummulator, currentvalues) => acummulator + currentvalues,
    0
  );
  return sum;
}

let listaNumeros = [1, 2, 3, 4, 5, 6, 8, 9, 199];
console.log(calculaMedia(listaNumeros));

// Pontos de Atencao quando for usar uma funcao em JS.
// As funcoes devem receber tudo o que precisam por parametro e tudo o que sair de uma
// funcao dever ser por meio de um return.
