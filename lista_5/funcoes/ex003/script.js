let valorDolares = Number(prompt("Informe o valor em dólares para a conversão:"))

function converterDolarParaReal(valorDolares){
    let conversao = valorDolares * 5.65
    document.getElementById("output").innerText =  `${valorDolares}USD = R$${conversao.toFixed(2)}`
}

document.addEventListener("input", converterDolarParaReal(valorDolares))