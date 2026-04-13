let temperatura = parseFloat(prompt("Informe a temperatura em graus Celsius:"))
let mensagem

if (temperatura < 0) {
    mensagem = "Muito frio"
} else if (temperatura >0 && temperatura <=20){
    mensagem = "Frio"
} else if (temperatura >=21 && temperatura <=30){
    mensagem = "Agradável"
} else {
    mensagem = "Calor"
}

document.getElementById("mensagem").innerText = mensagem