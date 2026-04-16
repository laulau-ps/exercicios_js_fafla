let title = document.querySelector("#title")
let btn = document.querySelector("#btn")


function switchTitle() {
    title.textContent = "Texto atualizado"
}

btn.addEventListener("click", switchTitle)