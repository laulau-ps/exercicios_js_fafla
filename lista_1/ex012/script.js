let valorReais = parseFloat(prompt("Informe o valor em reais a ser convertido em dólares:"))

let conversao = valorReais * 0.19

document.getElementById("mensagem").innerText = `R$${valorReais} = ${conversao}USD`