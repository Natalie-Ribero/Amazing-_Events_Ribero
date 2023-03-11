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

let food = document.querySelector('#food');
let museum = document.querySelector('#museum');
let party = document.querySelector('#party');
let concert = document.querySelector('#concert');
let race = document.querySelector('#race');
let book = document.querySelector('#book');
let cinema = document.querySelector('#cinema');

let buscar = document.querySelector('#buscar');
let boton = document.querySelector('#boton');

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

