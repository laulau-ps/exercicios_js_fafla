let primeiraPessoa = parseInt(prompt("Digite a idade da primeira pessoa:"));
let segundaPessoa = parseInt(prompt("Digite a idade da segunda pessoa:"));
let mensagem;

if (primeiraPessoa > segundaPessoa) {
    mensagem = "A primeira pessoa é a mais velha";
} else if (segundaPessoa > primeiraPessoa) {
    mensagem = "A segunda pessoa é a mais velha";
} else {
    mensagem = "Ambas tem a mesma idade";
}

document.getElementById("mensagem").innerText = mensagem;
