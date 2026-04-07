let primeiroValor = prompt("Informe o primeiro valor:")
let segundoValor = prompt("Informe o segundo valor:")

let suporte

suporte = primeiroValor
primeiroValor = segundoValor
segundoValor = suporte

document.getElementById("mensagem").innerText = `Valores invertidos: ${primeiroValor}, ${segundoValor}`