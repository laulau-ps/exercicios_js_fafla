let larguraRetangulo = parseFloat(prompt("Informe o valor da largura do retângulo:"))

let alturaRetangulo = parseFloat(prompt("Informe o valor da altura do retângulo:"))

let areaRetangulo = larguraRetangulo * alturaRetangulo

document.getElementById("mensagem").innerText = `A área desse retângulo é igual a: ${areaRetangulo}m³`