let numero = parseFloat(prompt("Informe um número:"));
let mensagem;

if (numero > 0) {
    mensagem = "Positivo"
} else if (numero < 0){
    mensagem = "Negativo"
} else {
    mensagem = "Igual à 0"
}

document.getElementById("mensagem").innerText = mensagem;