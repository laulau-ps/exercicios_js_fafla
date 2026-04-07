let nome = prompt("Digite seu nome:");
let sobrenome = prompt("Digite seu sobrenome:");
let nomeCompleto = nome + " " + sobrenome;


document.getElementById("mensagem").innerText = `Meu primeiro nome é ${nome}, meu sobrenome é ${sobrenome}. Meu nome completo é ${nomeCompleto}`;