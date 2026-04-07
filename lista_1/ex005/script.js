let primeiroValor = parseInt(prompt("Digite o primeiro número a ser somado:"))

let segundoValor = parseInt(prompt("Digite o segundo número a ser somado:"))

let soma = primeiroValor + segundoValor

document.getElementById("mensagem").innerText = `${primeiroValor} + ${segundoValor} = ${soma}`