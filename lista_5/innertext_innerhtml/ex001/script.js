let btn = document.querySelector("#btn")
let textInput = document.querySelector('#textInput')

function showText(){
    let output = textInput.value

    document.getElementById("output").innerText = `${output}`
}

btn.addEventListener("click", showText)