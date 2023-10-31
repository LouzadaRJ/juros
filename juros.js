import entradaDados from 'readline-sync'

console.log("Aplicação de cálculo de juros\n")

let valor = entradaDados.question("Informe o valor devido: R$ ")
let dias = entradaDados.question("\nInforme quantos dias se passaram desde o vencimento do boleto: ")

console.log("Valor original da dívida: R$ "+valor)
console.log("Dias atrasados: "+dias)
