let primeiroValor = parseFloat(prompt("Informe o primeiro valor monetário (sem R$):"));
let segundoValor = parseFloat(prompt("Informe o segundo valor monetário (sem R$):"));
let terceiroValor = parseFloat(prompt("Informe o terceiro valor monetário (sem R$):"));

let media = (primeiroValor + segundoValor + terceiroValor) / 3

let formatacao = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});

document.getElementById('mensagem').innerText = `A média desses valores é de: ${formatacao.format(media)}`