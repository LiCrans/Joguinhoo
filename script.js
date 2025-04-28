let input = document.getElementById("txt_input")
let div_resultado = document.getElementById("Resultado")
let palavra_secreta = "joguinho"

function Adivinhar (){
    let digitado = input.value 
    if(digitado == palavra_secreta){
        div_resultado.innerText = "Acertou!"
    } else {
        div_resultado.innerText = "Errou!"
    }
}