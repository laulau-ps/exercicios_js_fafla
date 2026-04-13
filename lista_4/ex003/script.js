let valorCompra = parseFloat(prompt("Informe o valor total da compra:"))

let precoFinal = valorCompra > 100 ? valorCompra * 0.90 : valorCompra

document.getElementById("mensagem").innerText = `O valor final de sua compra é: R$${precoFinal}`