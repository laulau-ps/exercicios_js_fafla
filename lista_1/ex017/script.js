let primeiroNumero = parseInt(prompt("Informe o primeiro valor:"))
let segundoNumero = parseInt(prompt("Informe o segundo valor:"))
let terceiroNumero = parseInt(prompt("Informe o terceiro valor:"))
let quartoNumero = parseInt(prompt("Informe o quarto valor:"))

let mediaSimples = (primeiroNumero + segundoNumero + terceiroNumero + quartoNumero) / 4

document.getElementById("mensagem").innerText = `A média simples desses valores é igual a: ${mediaSimples}`