let nota = parseFloat(prompt("Digite sua nota final:"));

const aprovacao = nota >=6.0 ? "Aprovado" : "Reprovado"

document.getElementById("mensagem").innerText = aprovacao;