let totalCompra = parseFloat(prompt("Informe o valor total da compra:"));

let codigoDesconto = prompt("Informe um código de desconto:");

let valorFinal;

if (codigoDesconto == "DESC10") {
    valorFinal = totalCompra * 0.90
} else {
    valorFinal = totalCompra
}

document.getElementById("mensagem").innerText = `O valor final da sua compra é: R$${valorFinal}`