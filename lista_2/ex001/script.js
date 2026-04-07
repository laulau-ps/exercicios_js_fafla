let numero = parseFloat(prompt("Digite um valor numérico:"))

const formatacao = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});

document.getElementById("mensagem").innerText = formatacao.format(numero);