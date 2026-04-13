let idade = parseInt(prompt("Qual sua idade?"))

const maiorBrasil = idade >=18 ? "Maior de idade no Brasil" : "Menor de idade no Brasil"
const maiorEUA = idade >=21 ? "Maior de idade no EUA" : "Menor de idade no EUA"

document.getElementById("mensagem").innerText = maiorBrasil + ", " + maiorEUA