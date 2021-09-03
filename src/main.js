import { order } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

const miDOM = document.getElementById('root');
const characters = data.results; 
const selectorEspecie = document.getElementById('selectorEspecie');
const selectorGender = document.getElementById('selectorGender');
const selectorOrdenado = document.getElementById('selectorOrdenado');
render(data.results);

//data.
console.log(selectorOrdenado);
selectorOrdenado.addEventListener('change',function(e) {
    console.log(e.target.value)
    let ordenadito = order(e.target.value, data.results);
    console.log (ordenadito);
    render(ordenadito); 
});
      
selectorEspecie.addEventListener('change', function (event) {
    console.log(event.target.value);
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

selectorGender.addEventListener('change', function (event) {
    console.log(event.target.value);
    const value = event.target.value

    const caracteresFiltrados = []; 
    for (let i = 0; i < characters.length; i++) {
        const character = characters[i]
        if (character.gender == value ){
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


//Aquí llamo a mis tarjetas 
function createCard(character) {
    let html = `
    <div class="tarjeta">
    <p class="textoNombre">${character.name}</p> 
      <img src="${character.image}" class="imagen_tarjeta" />
    <div class="textoPersonaje">
     <p>${character.species} </p>
     <p>${character.status} </p>
     <p>${character.type}</p>
    <p> ${character.gender}</p>
    <p> ${character.gender}<p>
    </div>
    </div>
    `
    return html 
}

render(characters)


// const caracteresFiltrados = characters.filter(function (character) {
    //     if (character.species == value) {
    //         return true
    //     } else {
    //         return false
    //     }
    // })

    // const caracteresFiltrados = characters.filter((character) => character.species == value)

/*
selectorOrdenar.addEventListener('change', function (event) {
    console.log(event.target.value);
    const value = event.target.value
    
    const caracteresFiltrados= value.sort ((nameA,nameB) => {
        return (nameA.results < nameB.results) ? -1 : 1
     })
     console.log(caracteresFiltrados)
    }) */
