/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */

const mainHome = document.getElementById('cards')
let tarjetas = ''
function name(params) {
  
}
for (let event of events) {
  tarjetas += `<div class="card" style="width: 18rem;">
    <img src=${event.image} alt="Imagen de evento">
    <div class="card-body">
     <h5 class="card-title">${event.name}</h5>     <p class="card-text">${event.description}</p>
       <a href="mailto:${event.price}" class="btn btn-primary">Mandame un email</a>
           </div>
  </div>`
}

console.log(tarjetas);

mainHome.innerHTML = tarjetas