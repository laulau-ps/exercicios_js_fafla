let primeiroValor = parseInt(prompt("Digite o dividendo:"))

let segundoValor = parseInt(prompt("Digite o divisor:"))

let divisao = primeiroValor / segundoValor

document.getElementById("mensagem").innerText = `${primeiroValor} / ${segundoValor} = ${divisao}`