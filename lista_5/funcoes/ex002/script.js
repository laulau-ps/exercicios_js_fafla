let numero = Number(prompt("Informe um número:"))

function quadrado(numero){
    let resultado = numero * numero
    alert(`${numero}² = ${resultado}`)
}

document.addEventListener("input", quadrado(numero))