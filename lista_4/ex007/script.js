let idade = parseInt(prompt("Insira sua idade:"))

let mensagem

if (idade < 12){
    mensagem = "Infantil"
} else if (idade >=12 && idade <=17){
    mensagem = "Adolescente"
} else if (idade >=18 && idade <=64){
    mensagem = "Adulto"
} else {
    mensagem = "Sênior"
}

document.getElementById("mensagem").innerText = mensagem