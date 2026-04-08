let primeiroNumero = parseInt(prompt("Digite o primeiro número:"));

let segundoNumero = parseInt(prompt("Digite o segundo número:"));

const comparacao = primeiroNumero == segundoNumero ? "São iguais" : "Não são iguais";

document.getElementById("mensagem").innerText = comparacao;