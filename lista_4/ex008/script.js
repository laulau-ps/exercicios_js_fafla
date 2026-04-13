let temperatura = parseInt(prompt("Insira a temperatura em graus Celsius:"))

let conversao = temperatura * 9/5 + 32

document.getElementById("mensagem").innerText = `${temperatura}ºC = ${conversao}ºF`