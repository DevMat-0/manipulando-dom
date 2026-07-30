const form = document.getElementById("todo-form")
const input = document.getElementById("tarefa")
const lista = document.getElementById("todo-list")

form.addEventListener("submit", adicionarTarefa)

// o parametro sempre é montado pelo 
// navegador. Ele é um objeto contendo inform acoes do evento/acao do usuario
function adicionarTarefa(event) {

    // serve para impedir que um 
    // compartamento padrao de algum elemento ocorra 
    // no casodo formulario, ele sempre tenta
    // recarregar a pagina apos o envio dis dados
    // com o prevent, isso nao ira acontecer novamente
    event.preventDefault()

    // Pegando o texto digitando e removendo espacos
    // em branco no comeco e no final.
    const textoTarefa = input.value.trim()

    // Não permite tarefas vazias 
    if(textoTarefa === ""){ 
        alert("Digit uma tarefa")
        input.focus()
         return // serve para parar a execução do codigo
        //  nao permite que execute o resto do bloco de codigo caso essa validacao nao seja cumprida
}

// criando um li
const itemLista = document.createElement("li")
// itemLista.textContent = textoTarefa
itemLista.classList.add("todo-item")

// criando um span para o texto
const texto = document.createElement("span")
texto.textContent = textoTarefa

// criando o botao de concluir
const btnConcluir = document.createElement("button")

btnConcluir.setAttribute("aria-label", "Concluir tarefa")
btnConcluir.classList.add("concluir")

// criando o icone de concluir 
const iconConcluir = document.createElement("i")
iconConcluir.classList.add("bi", "bi-check-lg")

btnConcluir.append(iconConcluir)

// criando o botao de remover
const btnRemover = document.createElement("button")
btnRemover.setAttribute("aria-label", "Remover tarefa")

// criando o icone de remover
const iconRemover = document.createElement("i")
iconRemover.classList.add("bi" , "bi-trash3")
btnRemover.classList.add("remover")

btnRemover.append(iconRemover)

// container para os botoes
const acoes = document.createElement("div")
acoes.classList.add("acoes")


//  adicionando os botoes na div
acoes.append(btnConcluir)
acoes.append(btnRemover)


// monta o item da lista
itemLista.append(texto)
itemLista.append(acoes)

//  adicionando o item da lista montando dentro da lista
lista.append(itemLista)

// limpando o campo do input
input.value = ""

// voltando o foco para o input
input.focus()

// criando o evento dos botoes
// removendo tarefa
btnRemover.addEventListener("click", function(){
itemLista.remove()
})

btnConcluir.addEventListener("click", ()=>{
texto.classList.toggle("tarefa-concluida")

// se na lista de classe do elemento texto contem a classe,tarefa-concluida
// entao, ele execuitara o bloco de codigo, caso contrario, nao.
if(texto.classList.contains("tarefa-concluida")){
    iconConcluir.classList.remove("bi-check-lg")
    iconConcluir.classList.add("bi-arrow-clockwise")
    
    btnConcluir.setAttribute("aria-label", "Desmarcar tarefa")
} else {
    iconConcluir.classList.remove("bi-arrow-clockwise")
    iconConcluir.classList.add("bi-check-lg")

    btnConcluir.setAttribute("aria-label", "Concluir tarefa")
}
})

}
