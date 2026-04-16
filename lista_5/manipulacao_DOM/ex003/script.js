let check = document.querySelector("#check")
let p = document.querySelector("p")
let label = document.querySelector("label")


function showHide() {
    p.classList.toggle("paragraph")

    if (label.innerText == "Marque para mostrar"){
        label.innerText = "Desmarque para esconder"
    } else {
        label.innerText = "Marque para mostrar"
    }
}

check.addEventListener("click", showHide)