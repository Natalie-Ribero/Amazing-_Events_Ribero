//Crear categorys
let labels = document.getElementById('labels1');
let categorias = events.map(event => event.category)
let category = new Set(categorias)
let checkbox = ''
for (let event of category) {
  checkbox +=
    `<label> ${event}
  <input id= '' type="checkbox">
</label>`
}

console.log(checkbox)
console.log(labels)

labels.innerHTML = checkbox; 


//Hacer que funcionen los categorys
let food = document.querySelector('#food');
let museum = document.querySelector('#museum');
let party = document.querySelector('#party');
let concert = document.querySelector('#concert');
let race = document.querySelector('#race');
let book = document.querySelector('#book');
let cinema = document.querySelector('#cinema');
const divCards = document.getElementById('contenedorCards');
let cards = ''

function sumarCardsArray(array) {
  for (let event of array) {
    cards += `<div class="card estilocard" style="width: 18rem;">
    <img src= ${event.image} alt="Imagen de evento">
    <div class="card-body">
    <h5 class="card-title">${event.name}</h5>
    <h6 class="card-title"> ${event.date}</h6>
    <h6 class="card-title">${event.price} USD</h6>
    <p class="card-text">${event.description}</p>
    <a href="./details.html?id=${event._id}" class="btn btn-primary">See more</a>
    </div>
  </div>`
  }
}
sumarCardsArray(events);

divCards.innerHTML = cards;

document.addEventListener('click', (e) => {

  if (food.checked || museum.checked || party.checked || concert.checked || race.checked || book.checked || cinema.checked) {

    let category = events.filter(event => (event.category === "Food Fair" && food.checked || event.category === "Museum" && museum.checked || event.category === "Costume Party" && party.checked || event.category === "Music Concert" && concert.checked || event.category === "Race" && race.checked || event.category === "Book Exchange" && book.checked || event.category === "Cinema" && cinema.checked))

    cards = ''
    sumarCardsArray(category);
    divCards.innerHTML = cards;

  } else {
    cards = ''
    sumarCardsArray(events)
    divCards.innerHTML = cards;
  }
})
// hasta aca funciona

document.addEventListener("keyup", (e) => {

  if (e.target.matches("#buscador")) {

    document.querySelectorAll(".estilocard").forEach(tarjeta => {

      tarjeta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
        ? tarjeta.classList.remove("filtro")
        : tarjeta.classList.add("filtro")
    })
  }
})




