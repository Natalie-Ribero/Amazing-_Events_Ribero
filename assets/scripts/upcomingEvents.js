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
    <a href="./details.html?id=${event._id}" class="btn btn-primary">See more</a>
    </div>
  </div>`
}
divCards.innerHTML = cards;

// hacer aparecer cards con category
let boton = document.querySelector('#boton');

boton.addEventListener('click', (e) =>{
e.preventDefault()
let labels = document.querySelector('#labels')

let category = upcomingEvents.filter(event => (event.category === "Food Fair" && food.checked || event.category === "Museum" && museum.checked || event.category === "Costume Party" && party.checked || event.category === "Music Concert" && concert.checked || event.category === "Race" && race.checked || event.category === "Book Exchange" && book.checked || event.category === "Cinema" && cinema.checked))

let cards = '' 
for (let event of category) {
  cards += `<div class="card estilocard" style="width: 18rem;">
    <img src= ${event.image} alt="Imagen de evento">
    <div class="card-body">
    <h5 class="card-title">${event.name}</h5> 
    <h6 class="card-title">${event.price} USD</h6>       
    <p class="card-text">${event.description}</p>
    <a href="./details.html?id=${event.id}" class="btn btn-primary">See more</a>
    </div>
  </div>`
}
divCards.innerHTML = cards;

})
// hasta aca funciona

document.addEventListener("keyup", (e)=>{

  if (e.target.matches("#buscador")){

      document.querySelectorAll(".estilocard").forEach(tarjeta =>{

          tarjeta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?tarjeta.classList.remove("filtro")
            :tarjeta.classList.add("filtro")
      })

  }


})