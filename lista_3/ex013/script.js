let nome = prompt("Digite seu nome:");

const verificacao = nome.length > 5 ? "Nome longo" : "Nome curto"

document.getElementById("mensagem").innerText = verificacao;