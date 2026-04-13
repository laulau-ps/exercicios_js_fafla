let temperatura = parseInt(prompt("Informe a temperatura em graus celsius:"))

let mensagem

if (temperatura < 15){
    mensagem = "Frio"
} else if (temperatura >=15 && temperatura <25){
    mensagem = "Agradável"
} else {
    mensagem = "Quente"
}

document.getElementById("mensagem").innerText = mensagem