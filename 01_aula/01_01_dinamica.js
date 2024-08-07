//Criar um programa que solicita a quantidade de sucos e sanduiches consumidos por uma mesa
// e exibe um recibo com os valores parciais e o total a pagar
/*
Recibo:
Suco: R$:5.2, quantidade 15, Total R$78,00
Sanduiches: R$12, quantidades 5, Total R$60.00
Custo total a pagar: R$:138,00
*/
import promptsync from 'prompt-sync'

const prompt = promptsync({sigint:true})
const preco_unitario_suco = 5.2
const preco_unitario_sanduiche = 12.0

let total_de_sucos = prompt("Qual é a quantidade de sucos que vc deseja pedir ? ")
let total_de_sanduiches = prompt("Qual é a quantidade de sanduiches que vc deseja pedir ? ")

let valor_total_sucos = Number(total_de_sucos)*preco_unitario_suco
let valor_total_sanduiches = Number(total_de_sanduiches)*preco_unitario_sanduiche
console.log('\n')
console.log('Recibo:')
console.log(`Suco: R$: ${preco_unitario_suco}, quantidade ${total_de_sucos}, Total ${valor_total_sucos}`)
console.log(`Sanduiches: R$: ${preco_unitario_sanduiche}, quantidade ${total_de_sanduiches}, Total ${valor_total_sanduiches}`)
console.log(`Custo total a pagar: R$:${Number(valor_total_sucos)+Number(valor_total_sanduiches)}`)
console.log('\n')



