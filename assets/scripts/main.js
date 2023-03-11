let cards = ''
const divCards = document.getElementById('contenedorCards');

for (let event of events) {
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
divCards.innerHTML = cards;

let foodFair = events.filter(event => event.category === "Food Fair")
let museum = events.filter(event => event.category === "Museum")
let customeParty = events.filter(event => event.category === "Costume Party")
let musicConcert = events.filter(event => event.category === "Music Concert")
let race = events.filter(event => event.category === "Race") 
let bookExchange = events.filter(event => event.category === "Book Exchange")
let cinema = events.filter(event => event.category === "Cinema")

let categorias = document.getElementById('categorias');

categorias.addEventListener('click', (pepito)=>{
  console.log(pepito);
  console.log('toque');
} )

categorias.target

