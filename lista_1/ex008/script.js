let primeiroValor = parseInt(prompt("Digite o primeiro número:"))

let segundoValor = parseInt(prompt("Digite o segundo número:"))

let subtracao = primeiroValor - segundoValor

document.getElementById("mensagem").innerText = `${primeiroValor} - ${segundoValor} = ${subtracao}`