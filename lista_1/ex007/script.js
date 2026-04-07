let primeiroValor = parseInt(prompt("Digite o primeiro número a ser multiplicado:"))

let segundoValor = parseInt(prompt("Digite o segundo número a ser multiplicado:"))

let multiplicacao = primeiroValor * segundoValor

document.getElementById("mensagem").innerText = `${primeiroValor} * ${segundoValor} = ${multiplicacao}`