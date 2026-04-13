let letra = prompt("Informe uma letra (maiúscula ou minúscula")
let mensagem

if (letra == letra.toUpperCase()) {
    mensagem = "A letra informada é maiúscula"
} else {
    mensagem = "A letra informada é minúscula"
}
        
document.getElementById("mensagem").innerText = mensagem