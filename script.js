//Lista de palavras 
let palavras = [
    {palavra: "carro", dicas: ["roda", "gasolina", "pista"]},
    {palavra: "vidro", dicas: ["transparente", "areia", "derrete"]},
    {palavra: "mato", dicas: ["terra", "chão", "pasto"]},
    {palavra: "joguinho", dicas: ["lazer", "computador", "natural"]},
]
//Elementos do HTML

let input = document.getElementById("txt_input")
let div_resultado = document.getElementById("Resultado")
let paragrafo_dicas = document.getElementById("paragrafo_dicas")
let paragrafo_tentativas = document.getElementById("paragrafo_tentativas")


//Selecionar suas palavras e suas dicas
let palavra_secreta = palavras[Math.floor(Math.random() * palavras.length)] 
let palavra_selecionada = palavra_secreta.palavra.toLowerCase()
let dicas = palavra_secreta.dicas
let tentativas = dicas.length

//Função de adivinhar
function Adivinhar(){
    let digitado = input.value.trim().toLowerCase()
    if(digitado == palavra_selecionada){
        div_resultado.innerText = "Acertou!"
    } else {
        tentativas--
        div_resultado.innerText = "Errou!"

        if(tentativas > 0) {
            paragrafo_dicas.textContent = "dica: " + dicas[dicas.length - tentativas]
            paragrafo_tentativas.textContent = "tentativas:" + tentativas
        } else {
            location.reload()
        }
           
    }
} 