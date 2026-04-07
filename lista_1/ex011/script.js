let valorDolares = parseFloat(prompt("Informe o valor em dolares a ser convertido em reais:"))

let conversao = valorDolares * 5.14

document.getElementById("mensagem").innerText = `${valorDolares}USD = R$${conversao}`