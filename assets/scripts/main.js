let cards = ''
const divCards = document.getElementById('contenedorCards');

function armarCards(array) {
  for (let event of array) {
    cards += `<div class="card estilocard" style="width: 18rem;">
      <img src= ${event.image} alt="Imagen de evento">
      <div class="card-body">
      <h5 class="card-title">${event.name}</h5>
      <h6 class="card-title">${event.date}</h6>    
      <h6 class="card-title">${event.price} USD</h6>     
      <p class="card-text">${event.description}</p>
      <a class="btn btn-primary">See more</a>
      </div>
    </div>`
  }
}
armarCards(events);

divCards.innerHTML = cards;

let labels = Array.from(document.querySelectorAll('input[type="checkbox"]'))

function filtrarCardsCategory(condicion) {
  let filtroCategory = events.filter(event => event.category === condicion)
  return filtroCategory
}

labels[0, 1, 2, 3, 4, 5, 6].addEventListener('click', ()=> {
  filtrarCardsCategory(labels.value)
})


// labels[0].addEventListener('change', (e) => {
//     armarCards(foodFair);
// })

// labels[1].addEventListener('change', (e) => {
//   armarCards(museum)
// })

// labels[2].addEventListener('change', (e) => {
//   armarCards(customeParty)
// })

// labels[6].addEventListener('change', (e) => {
//   armarCards(musicConcert)
// })

// labels[4].addEventListener('change', (e) => {
//   armarCards(race)
// })

// labels[5].addEventListener('change', (e) => {
//   armarCards(bookExchange)
// })

// labels[6].addEventListener('change', (e) => {
//   armarCards(cinema)
// })


