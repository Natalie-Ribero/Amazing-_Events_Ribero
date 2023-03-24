let upcomingEvents = events.filter(event => event.date > currentDate);

let cards = ''
const divCards = document.getElementById('contenedorCards');

for (let event of upcomingEvents) {
  cards += `<div class="card estilocard" style="width: 18rem;">
    <img src= ${event.image} alt="Imagen de evento">
    <div class="card-body">
    <h5 class="card-title">${event.name}</h5>     
    <h6 class="card-title">${event.price} USD</h6>   
    <p class="card-text">${event.description}</p>
    <a class="btn btn-primary">See more</a>
    </div>
  </div>`
}
divCards.innerHTML = cards
console.log(cards);