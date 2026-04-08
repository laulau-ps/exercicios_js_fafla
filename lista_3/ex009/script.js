let horas = parseInt(prompt("Informe que horas são (sem os minutos)"))

let periodo;

if (horas >= 5 && horas <= 11) {
    periodo = "Manhã"
} else if (horas >= 12 && horas <= 17) {
    periodo = "Tarde"
} else if (horas >= 18 && horas <= 23) {
    periodo = "Noite"
} else {
    periodo = "Madrugada"
}

document.getElementById("mensagem").innerText = periodo;