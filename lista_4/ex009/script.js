let temperatura = parseInt(prompt("Insira a temperatura em graus Fahrenheit:"))

let conversao = (temperatura - 32) * 5/9

document.getElementById("mensagem").innerText = `${temperatura}ºF = ${conversao.toFixed(2)}ºC`