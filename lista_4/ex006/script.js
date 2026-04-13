let nota = parseInt(prompt("Insira uma nota de 0 a 100:"))
let mensagem

if (nota >=90){
    mensagem = "A"
} else if (nota >=80 && nota <=89){
    mensagem = "B"
} else if (nota >=70 && nota <=79){
    mensagem = "C"
} else if (nota >=60 && nota <=69){
    mensagem = "D"
} else {
    mensagem = "F"
}

document.getElementById("mensagem").innerText = mensagem