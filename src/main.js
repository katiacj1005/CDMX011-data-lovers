import data from './data/rickandmorty/rickandmorty.js';

const miDOM = document.getElementById('root');
const characters = data.results; 
const selectorEspecie = document.getElementById('selectorEspecie');

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

    // const caracteresFiltrados = characters.filter(function (character) {
    //     if (character.species == value) {
    //         return true
    //     } else {
    //         return false
    //     }
    // })

    // const caracteresFiltrados = characters.filter((character) => character.species == value)

    //Aquí llamo a mis tarjetas 
function createCard(character) {
    let html = `
    <div id="tarjeta">
        <p> ${character.name} </p>
        <img src="${character.image}" class="imagen_tarjeta" />
        <p id="texto">${character.species}</p>
        <p>${character.status}</p>
    </div>
    `
    return html 
}

render(characters)

