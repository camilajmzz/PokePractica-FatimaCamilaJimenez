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

