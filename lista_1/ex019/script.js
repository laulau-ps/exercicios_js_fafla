let baseTriangulo = parseFloat(prompt("Informe o valor da base do triângulo:"))

let alturaTriangulo = parseFloat(prompt("Informe o valor da altura do triângulo:"))

let areaTriangulo = (baseTriangulo * alturaTriangulo) / 2

document.getElementById("mensagem").innerText = `A área desse triângulo é igual a: ${areaTriangulo}m³`