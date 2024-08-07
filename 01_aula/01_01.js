import promptsync from 'prompt-sync'

//declaracao de variaveis
const marcos = "oi"
//marcos = 'ola'
console.log('marcos',marcos)

// tipos de dados.
//pedir tipo de variavel
console.log('typeof marcos',typeof(marcos))
//operador aritimetico de atribuicao
let x = 2
//x*=3
x = x +3
console.log('1',x)
x*=2
console.log('2',x)
x*=2
console.log('3',x)
x*=2
console.log('4',x)
x*=2
console.log('5',x)

// operadores de comparacao
let y = '1'
let z = 1

console.log(y==z)//compara somente valor 
console.log(y===z)//compara valor e tipo

// usando o input do javascript
const prompt = promptsync({sigint:true})
let nota = prompt('qual e a primeira nota da prova ')
console.log('tipo da nota',typeof(nota))

console.log('A nota foi ',nota)
console.log('A nota mais 10 é iqual a ', Number(nota)+10)

// f string em javascript

console.log(`O nome é ${nota}`)


