let btn = document.querySelector("#btn")
let input = document.querySelector("#input")
let list = document.querySelector("#list")

function addItem(){
    let newItem = input.value
    //inclue na variavel lista um novo item com a tag <li>, incrementando
    list.innerHTML += `<li>${newItem}</li>`
    
}

btn.onclick = addItem