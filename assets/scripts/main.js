// function armarCards(array) {
//   for (let event of array) {
//     cards += `<div class="card estilocard" style="width: 18rem;">
//       <img src= ${event.image} alt="Imagen de evento">
//       <div class="card-body">
//       <h5 class="card-title">${event.name}</h5>
//       <h6 class="card-title">${event.date}</h6>    
//       <h6 class="card-title">${event.price} USD</h6>     
//       <p class="card-text">${event.description}</p>
//       <a class="btn btn-primary">See more</a>
//       </div>
//     </div>`
//   }
// }
// armarCards(events);

// divCards.innerHTML = cards;

let food = document.getElementById('food');
let museum = document.getElementById('museum');
let party = document.getElementById('party');
let concert = document.getElementById('concert');
let race = document.getElementById('race');
let book = document.getElementById('book');
let cinema = document.getElementById('cinema');

let buscar = document.getElementById('buscar');
let boton = document.getElementById('boton');

let tarjetas = [];

function armarCards(event) {
   `<div class="card estilocard" style="width: 18rem;">
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


// for (let event of events) {
//   if (food.checked && event.category === "Food Fair") {
//     armarCards(event)
//   }

//   if (museum.checked && event.category === "Museum") {
//     armarCards(event)
//   }

//   if (party.checked && event.category === "Costume Party") {
//     armarCards(event)
//   }

//   if (concert.checked && event.category === "Music Concert") {
//     armarCards(event)
//   }

//   if (race.checked && event.category === "Race") {
//     armarCards(event)
//   }

//   if (book.checked && event.category === "Book Exchange") {
//     armarCards(event)
//   }

//   if (cinema.checked && event.category === "Cinema") {
//     armarCards(event)
//   }
// }
document.querySelector('#contenedorCards').innerHTML = tarjetas

