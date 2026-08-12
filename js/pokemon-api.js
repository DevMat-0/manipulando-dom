const formPokemon = document.getElementById("pokemon-form");
const inputPokemon = document.getElementById("pokemon-input");
const pokemonCard = document.querySelector(".pokemon-card")

const div = document.createElement("div") 

formPokemon.addEventListener("submit", buscarPokemon);

async function buscarPokemon(event) { 
  event.preventDefault();

  const pokemon = inputPokemon.value.trim().toLowerCase()

  if (pokemon === "") {
    alert("Digite o nome de um pokemon")
    inputPokemon.focus()
    return
  }

  try {

    // await - aguardar
    // fetch - buscar/pegar algo no servidor 
    // estamos dizendo para o anveghador aguardar(null) e busacr(fetch) de dados no 
    // servidor

    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, )


    if (!resposta.ok) { 
      console.error("Pokemon nao encontrado")
      div.innerHTML = 
      "<p class= 'erro'>Pokemon nao encontrado. Tente novamente!</p>"
      pokemonCard.append(div)
      inputPokemon.focus()
      return
  } 
  
  // Le o corpo da resposta e converte o JSON em um objeto Javascript
  const dadosPokemon = await resposta.json()
  console.log(dadosPokemon)

 

  div.innerHTML =
              `<section class="pokemon-resultado">
              <img src="${dadosPokemon.sprites.other["official-artwork"].front_default}" 
              alt="" id="pokemon-imagem" />
              <h3 id="pokemon-nome">${dadosPokemon.name}</h3>
              <p id="pokemon-altura">${dadosPokemon.height /10}m</p>
              <p id="pokemon-peso">${dadosPokemon.weight /10}kg</p>
              <ul id="pokemon-tipos"></ul>
            </section>`

            
   pokemonCard.append(div)
   inputPokemon.value = ""
   inputPokemon.focus()
   } catch (error) {
    console.error(error)
  }
  
 }