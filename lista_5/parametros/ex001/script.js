let nome = prompt("Digite seu nome:")

function digaOla(nome){
   document.getElementById("output").innerText = `Olá, ${nome}!`
}

document.addEventListener("input", digaOla(nome))