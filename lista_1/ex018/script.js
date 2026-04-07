let salario = parseFloat(prompt("Informe seu salário:"))

let bonus = parseInt(prompt("Informe a porcentagem do bônus: "))

let novoSalario = salario * (1 + bonus/100)

document.getElementById("mensagem").innerText = `Seu novo salário é de: R$${novoSalario.toFixed(2)}`