let upcomingEvents = events.filter(event => event.date > currentDate);

let tarjetas = ''
const divCards = document.getElementById('contenedorCards');

for (let event of upcomingEvents) {
  tarjetas += `<div class="card estilocard" style="width: 18rem;">
    <img src= ${event.image} alt="Imagen de evento">
    <div class="card-body">
    <h5 class="card-title">${event.name}</h5>     
    <p class="card-text">${event.description}</p>
    <a href="mailto:${event.price}" class="btn btn-primary">Mandame un email</a>
    </div>
  </div>`
}
divCards.innerHTML = tarjetas
console.log(tarjetas);