let nota1 = parseFloat(prompt("Informe a primeira nota:"))
let nota2 = parseFloat(prompt("Informe a segunda nota:"))
let nota3 = parseFloat(prompt("Informe a terceira nota:"))

let media = (nota1 + nota2 + nota3) / 3

const resultado = media >= 6 ? "Aprovado" : "Reprovado"

document.getElementById("mensagem").innerText = resultado