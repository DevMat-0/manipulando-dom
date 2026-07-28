// trocando o fundo do site com base no horario



const date = new Date()
const hora = date.getHours()


// pegando outros elemento
const minutos = date.getMinutes()
const anoCompleto = date.getFullYear()

if (hora >= 6 && hora < 12){
document.body.style.background = "linear-gradient(135deg, #FFAA65, #FFD180, #90CAF9)"

document.body.style.backgroundImage = "url(../assets/imagem-manha.jpg)"

} else if (hora >= 12 && hora < 18){
document.body.style.background = "linear-gradient(145deg, #FF8A65, #FFB74D, #64B5F6 )"
} else if (hora >= 18 && hora < 24){
document.body.style.background = "linear-gradient(155deg, #000428, #211132, #004e92 )"
} else {
    document.body.style.background = "linear-gradient(155deg, #0b7c51, #3f0d74, #183f60)"
}
