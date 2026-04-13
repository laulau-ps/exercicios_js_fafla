let palavra = prompt("Digite uma palavra:")

const verificacao = palavra == "Javascript" ? "Você escolheu a linguagem correta!" : "Escolha outra linguagem.";

document.getElementById("mensagem").innerText = verificacao;