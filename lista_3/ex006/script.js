let peso = parseFloat(prompt("Insira seu peso:"));

let altura = parseFloat(prompt("Insira sua altura:"));

let imc = peso / altura ** 2

let mensagem;

if (imc < 18.5){
    mensagem = "Abaixo do peso"
} else if (imc >= 18.5 && imc <= 24.9 ) {
    mensagem = "Peso normal"
} else if (imc >= 25 && imc <=29.9){
    mensagem = "Sobrepeso"
} else {
    mensagem = "Obesidade"
}

document.getElementById("mensagem").innerText = mensagem;