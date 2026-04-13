let preco = parseFloat(prompt("Informe o preço do produto:"))
let mensagem

if (preco < 20) {
    mensagem = "Barato"
} else if (preco >=20 && preco <=100){
    mensagem = "Médio"
} else {
    mensagem = "Caro"
}

document.getElementById("mensagem").innerText = mensagem