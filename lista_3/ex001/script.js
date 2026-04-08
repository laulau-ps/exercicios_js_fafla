let idade = parseInt(prompt("Digite sua idade:"));

const validacao = idade >=16 ? "Pode entrar" : "Não pode entrar";

document.getElementById("mensagem").innerText = validacao;