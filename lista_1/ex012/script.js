let valorReais = parseFloat(prompt("Informe o valor em reais a ser convertido em dólares:"))

let conversao = valorReais / 5.14

document.getElementById("mensagem").innerText = `R$${valorReais} = ${conversao.toFixed(2)}USD`