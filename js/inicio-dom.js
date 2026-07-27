// Acessando um elemento 
// document - representa toda a pagina/arquivo
// getElemnetById - é um metodo(funcao,acao) que procura um 
// elemento pelo atributo ID
const paragrafo = document.getElementById("paragrafo")
console.log(paragrafo)


// 2 - alterando o conteudo de um elemento 
paragrafo.textContent = "Alterando o texto do paragrafo com JS"


// 3 - alterando o estilo 
paragrafo.style.color = "blue"
paragrafo.style.fontSize = "2rem"

console.log(paragrafo.style)

// 4 - crindo elemento
// createElement - serve para criar um novo elemento HTML. 
const paragrafoJavascript = document.createElement("p")

//4.1 - atualizando o conteudo do paragrafo
paragrafoJavascript.textContent = "Este paragrafo foi criado com Javascript"
paragrafoJavascript.style.fontSize = "2rem"
paragrafoJavascript.style.backgroundColor = "blue"
paragrafoJavascript.style.color = "yellow"
paragrafoJavascript.style.padding = "2rem"
paragrafoJavascript.style.textAlign = "center"
paragrafoJavascript.style.borderRadius = "2rem"




//  4.2 - inserindo o paragrafo na pagina
// appendChild - serve para adcionar um item ao final da pagina
document.body.appendChild(paragrafoJavascript)

// 5 - removendo um elemneto do HTML
// capturando elemento de titulo pelo ID
const titulo = document.getElementById("titulo")

// 5.1 - removendo 
titulo.remove()