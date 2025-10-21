// Ejercicio 1
const nav = document.querySelector('.menu');
const btnWater = document.getElementById('water');
const btnFire = document.getElementById('fire');
const btnElectric = document.getElementById('electric');


btnWater.addEventListener('click', () => {
  nav.style.backgroundColor = getComputedStyle(btnWater).backgroundColor;
});


btnFire.addEventListener('click', () => {
  nav.style.backgroundColor = getComputedStyle(btnFire).backgroundColor;
});


btnElectric.addEventListener('click', () => {
  nav.style.backgroundColor = getComputedStyle(btnElectric).backgroundColor;
});



// Ejercicio 2
const listaPokemon = document.getElementById('listaPokemon');
const btnMostrarTodos = document.getElementById('mostrar');


btnMostrarTodos.addEventListener('click', () => {
  listaPokemon.innerHTML = '';


  fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(res => res.json())
    .then(data => {
      data.results.forEach(poke => {
        fetch(poke.url)
          .then(res => res.json())
          .then(pokemon => {
            const tipos = pokemon.types.map(t => {
              const tipo = t.type.name;
              return `<p class="${tipo} tipo">${tipo}</p>`;
            }).join('');


            const tarjeta = `
              <div class="pokemon">
                <div class="pokemon-imagen">
                  <img src="${pokemon.sprites.other['official-artwork'].front_default}" alt="${pokemon.name}">
                </div>
                <div class="pokemon-info">
                  <div class="nombre-contenedor">
                    <p class="pokemon-id">#${pokemon.id.toString().padStart(3, '0')}</p>
                    <h2 class="pokemon-nombre">${pokemon.name}</h2>
                  </div>
                  <div class="pokemon-tipos">
                    ${tipos}
                  </div>
                </div>
              </div>
            `;


            listaPokemon.innerHTML += tarjeta;
          });
      });
    });
});

