let primeiroNumero = parseInt(prompt("Informe o primeiro número:"))
let segundoNumero = parseInt(prompt("Informe o segundo número:"))

function soma(primeiroNumero, segundoNumero){
   alert(`${primeiroNumero} + ${segundoNumero}: ${primeiroNumero + segundoNumero}`)
}

document.addEventListener("input", soma(primeiroNumero, segundoNumero))