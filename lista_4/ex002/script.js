let primeiroNumero = parseInt(prompt("Informe o primeiro número:"))
let segundoNumero = parseInt(prompt("Informe o segundo número:"))
let terceiroNumero = parseInt(prompt("Informe o terceiro número:"))

let maiorNumero

if (primeiroNumero > segundoNumero && primeiroNumero > terceiroNumero){
    maiorNumero = primeiroNumero
} else if (segundoNumero > primeiroNumero && segundoNumero > terceiroNumero){
    maiorNumero = segundoNumero
} else {
    maiorNumero = terceiroNumero
}

document.getElementById("mensagem").innerText = `O maior número é: ${maiorNumero}`