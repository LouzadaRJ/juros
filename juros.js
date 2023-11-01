import entradaDados from 'readline-sync'

console.log("\nAplicação de cálculo de juros\n");

let valor_juros;

let valor_divida = entradaDados.question("Informe o valor devido: R$ ");

if(valor_divida > 0){ 
    let dias_vencimento = entradaDados.question("\nInforme quantos dias se passaram desde o vencimento do boleto: ");

    if(dias_vencimento > 0){
     
        if(dias_vencimento > 15){
            valor_juros = 10;
        }
        else{
            valor_juros = 5
        }

        valor_divida = Number(valor_divida);
        dias_vencimento = Number(dias_vencimento);

        let total_juros = (valor_divida / 100) * valor_juros;
        let valor_total = Number(valor_divida) +  Number(total_juros);

        console.log("\nValor original da dívida: R$ "+valor_divida);
        console.log("Dias atrasados: "+dias_vencimento);
        console.log("Taxa de Juros: "+valor_juros+"%");
        console.log("Valor total com juros: R$ "+valor_total+"\n");
    }
    else{
        console.log("Você está em dia!");
    }
}
else{
    console.log("Valor da dívida deve ser maior que zero!")
}