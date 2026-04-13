let idade = parseInt(prompt("Informe sua idade:"))

let mensagem = idade >=18 && idade <70 ? "Voto obrigatório" : "Voto não obrigatório"

document.getElementById("mensagem").innerText = mensagem