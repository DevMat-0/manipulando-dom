/* clicar no button

- mostrar/esconder o menu
- alterar propriedades de acessibilidade
- trocar o icone do menu

*/

const btnMenu = document.getElementById("btn-menu")
const navPrincipal = document.getElementById ("navegacao-primaria")
const icone = btnMenu.querySelector("i")


// addEventListener - serve para observar ações/eventos em elementos dos
// e executar uma função quando esse evento acontece
// addEventListener(evento/ação, função)

btnMenu.addEventListener("click", abrirMenu)

function abrirMenu(){
    // navprincipal.style.display = "block"

    navPrincipal.classList.toggle("nav-ativa")

// verifica se o menu esta abaerto.
// o metodo contains, retorna verdadeiro ou falso
    const menuAberto = navPrincipal.classList.contains("nav-ativa")

    
   btnMenu.setAttribute("aria-expanded" , menuAberto)

   if(menuAberto){
    icone.classList.remove("bi-list")
    icone.classList.add("bi-x")
   }else{
    icone.classList.remove("bi-x")
    icone.classList.add("bi-list")
   }

}

