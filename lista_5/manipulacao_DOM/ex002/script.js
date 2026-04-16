let list = document.querySelector("#list")
let btn = document.querySelector("#btn")


function addItem() {
    //cria um elemento li dentro da variavel newItem
    let newItem = document.createElement("li")
    //define qual o texto presente nesse elemento
    newItem.innerText = "Novo item"
    //inclui a variavel newItem à variavel referente a lista do html
    list.appendChild(newItem)
}

btn.addEventListener("click", addItem)