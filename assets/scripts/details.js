const querySearch = document.location.search

const id = new URLSearchParams(querySearch).get("id") 

const eventoDetails = events.filter(event => event._id == id) 

console.log([eventoDetails])

let containerCards = document.getElementById("containerCards")

for (const character of eventoDetails) {
    containerCards.innerHTML =
 `<div class="card estilocardDetails" style="width: 18rem;">
<img src= ${character.image} alt="Imagen de evento">
<div class="card-body">
<h5 class="card-title">${character.name}</h5> 
<h6 class="card-title">Date: ${character.date}</h6> 
<h6 class="card-title">Price: ${character.price} USD</h6>      
<h6 class="card-title">Place: ${character.place}</h6>   
<h6 class="card-title">Capacity: ${character.capacity}</h6>   
<h6 class="card-title">Assistance: ${character.assistance}</h6>   
<p class="card-text">${character.description}</p>
<a href="./index.html" class="btn btn-primary">Go back to start</a>
</div>
</div>`
}

