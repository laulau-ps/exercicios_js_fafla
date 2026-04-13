let macasCompradas = parseInt(prompt("Informe quantas maçãs foram compradas:"))

let preco = macasCompradas <12 ? macasCompradas * 1.30 : macasCompradas

document.getElementById("mensagem").innerText = `O valor total da compra é de R$${preco}`