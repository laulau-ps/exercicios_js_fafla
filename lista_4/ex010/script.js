let velocidade = parseInt(prompt("Informe a velocidade (km/h) da viagem:"))
let tempo = parseInt(prompt("Informe o tempo (horas) da viagem:"))

let distancia = velocidade * tempo

document.getElementById("mensagem").innerText = `A distância total da viagem foi de: ${distancia}km`