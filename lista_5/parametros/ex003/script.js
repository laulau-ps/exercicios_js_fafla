let palavra = prompt("Digite uma palavra qualquer:")

function formatarTexto(palavra){
   alert(`${palavra.toUpperCase()} (${palavra.length} caracteres)`)
}

document.addEventListener("input", formatarTexto(palavra))