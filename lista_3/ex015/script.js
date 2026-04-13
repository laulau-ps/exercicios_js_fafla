let nota = parseInt(prompt("Informe a nota escolar:"))
let mensagem;

if (nota >=9){
    mensagem = "Excelente"
} else if (nota >=7 && nota <=8){
    mensagem = "Bom"
} else if (nota >=5 && nota <=6){
    mensagem = "Regular"
} else {
    mensagem = "Insuficiente"
}

document.getElementById("mensagem").innerText = mensagem