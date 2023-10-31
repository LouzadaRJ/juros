import entradaDados from 'readline-sync'

console.log("Aplicação de cálculo de juros\n");

let valor_divida = entradaDados.question("Informe o valor devido: R$ ");
let dias_vencimento = entradaDados.question("\nInforme quantos dias se passaram desde o vencimento do boleto: ");

let juros = 10;
let valor_juros = (valor_divida / 100) * juros;
let total_divida = Number(valor_divida) + Number(valor_juros);

console.log("Valor original da dívida: R$ "+valor_divida);
console.log("Dias atrasados: "+dias_vencimento);
console.log("Taxa de juros: "+juros+"%");
console.log("Valor total com juros: R$ "+total_divida);