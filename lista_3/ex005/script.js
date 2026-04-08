let idade = parseInt(prompt("Digite sua idade:"));

const verificacao = idade >=18 ? "Pode tirar habilitação" : "Não pode tirar habilitação";

document.getElementById("mensagem").innerText = verificacao;