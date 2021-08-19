import data from './data/rickandmorty/rickandmorty.js';

const miDOM = document.getElementById('root');
const characters = data.results; 
const selectorEspecie = document.getElementById('selectorEspecie');
const selectorLocation = document.getElementById('selectorLocation');

selectorEspecie.addEventListener('change', function (event) {
    console.log(event.target.value)
    const value = event.target.value
    // Tenemos un arreglo de objetos (personajes), donde cada objeto es un personaje
    // Necesitamos extraer todos los personajes (objetos) cuyos valores de su 
    // propiedad (key) "species" son iguales a la opcion seleccionada por el usuario "value"
    const caracteresFiltrados = []; 
    for (let i = 0; i < characters.length; i++) {
        const character = characters[i]
        if (character.species == value ){
            (caracteresFiltrados.push(character))
        }
    }
    render(caracteresFiltrados)
})

function render(characters) {
    let html = ''
    characters.forEach(character => {
        html += createCard(character)
    })

    miDOM.innerHTML = html; 
}

selectorLocation.addEventListener('change', function (event) {
    console.log(event.target.value)
    const value = event.target.value
     const caracteresFiltrados = characters.filter(function (character) {
      if (character.location == value) {
        return true
               } else {
           return false
           }
         })
     const caracteresFiltrados = characters.filter((character) => character.location == value)


function createCard(character) {
    let html = `
    <div id="tarjeta">
        <p> ${character.name} </p>
        <img src="${character.image}" height="150px" width="100px" />
        <p>${character.species}</p>
        <p>${character.status}</p>
    </div>
    `
    return html 
}

render(characters)

