let temperatura = parseFloat(prompt("Informe os graus da temperatura:"))
let unidadeTemperatura = prompt("Escolha a unidade: C - Celsius | F - Fahrenheit")

let conversao

if (unidadeTemperatura == "C" || unidadeTemperatura == "c"){
    conversao = temperatura * 1.8 + 32
} else {
    conversao = (temperatura - 32) * 5/9
}

document.getElementById("mensagem").innerText = `A conversão é de: ${temperatura}º = ${conversao}º`