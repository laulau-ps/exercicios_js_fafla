let numero = parseInt(prompt("Informe um número:"));

let verificacao = numero % 2 == 0 ? "Par" : "Ímpar"

document.getElementById("mensagem").innerText = verificacao;