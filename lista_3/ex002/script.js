let idade = parseInt(prompt("Digite sua idade:"));

const validacao = idade >=18 ? "Maior de idade" : "Menor de idade";

document.getElementById("mensagem").innerText = validacao;