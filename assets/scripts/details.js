const querySearch = document.location.search

const id = new URLSearchParams(querySearch).get("id") 

const eventoDetails = events.find(event => event._id === id) 

console.log(eventoDetails)

let containerCards = document.getElementById("containerCards")

containerCards.innerHTML =
 `<div class="card estilocard" style="width: 18rem;">
<img src= ${eventoDetails.image} alt="Imagen de evento">
<div class="card-body">
<h5 class="card-title">${eventoDetails.name}</h5> 
<h6 class="card-title">${eventoDetails.price} USD</h6>       
<p class="card-text">${eventoDetails.description}</p>
<a href="./details.html?id=${eventoDetails._id}" class="btn btn-primary">See more</a>
</div>
</div>`