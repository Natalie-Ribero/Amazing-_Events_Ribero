// let url = "./assets/scripts/amazing.json"
let url = "https://mindhub-xj03.onrender.com/api/amazing"

async function pedirData() {
  try {
    let respuesta = await fetch(url);
    let data = await respuesta.json();
    return data;

  } catch (error) {
    console.log(error);
  }

}

async function iniciar() {
  const data = await pedirData();
  let pastEvents = eventosPast(data.events, data.currentDate)
  let upcomingEvents = eventosUpcoming(data.events, data.currentDate);
  menorPorcentajeAsistencia(pastEvents)
  document.querySelector("#primerTabla .mayorAsistenciaTR .menorAsistencia").innerHTML = `${arrayOrdenadoPorcentaje[0].name + " (" + (arrayOrdenadoPorcentaje[0].assistance) / (arrayOrdenadoPorcentaje[0].capacity) * 100}%)`
  document.querySelector("#primerTabla .mayorAsistenciaTR .mayorAsistencia").innerHTML = `${arrayOrdenadoPorcentaje[17].name + " (" + (arrayOrdenadoPorcentaje[17].assistance) / (arrayOrdenadoPorcentaje[17].capacity) * 100}%)`
  mayorCapacidad(pastEvents)
  document.querySelector("#primerTabla .mayorAsistenciaTR .mayorCapacidad").innerHTML = `${arrayOrdenadoCapacidad[0].name + " (" + arrayOrdenadoCapacidad[0].capacity})`
  console.log(pastEvents);
  console.log(upcomingEvents);
  porcentajeAsistenciaT2(upcomingEvents)
  porcentajeAsistenciaT3(pastEvents)
  categoryGananciaT2(upcomingEvents)
  categoryGananciaT3(pastEvents)
}

iniciar();

function eventosPast(array, fecha) {
  return array.filter(event => event.date < fecha);
}

function eventosUpcoming(array, fecha) {
  return array.filter(event => event.date > fecha);
}

//Tabla 1
function creacionPrimerTabla() {
  document.getElementById("primerTabla").innerHTML = `<thead>
  <tr>
  <th colspan = "3">EVENTS STATISTICS</th>
</tr>
  </thead> 
   <tr>
      <th scope="col">Event with the highest percentage of attendance</th>
      <th scope="col">Event with the lowest percentage of attendance</th>
      <th scope="col">Event with larger capacity</th>
    </tr>
  <tbody>
  <tr class= "mayorAsistenciaTR">
    <td class = "mayorAsistencia"></td>
    <td class = "menorAsistencia"></td>
    <td class = "mayorCapacidad"></td>
  </tr>
  </tbody>`
}
creacionPrimerTabla()

let arrayOrdenadoPorcentaje = []
//Ordenar Eventos de menor a mayor
function menorPorcentajeAsistencia(array) {
  arrayOrdenadoPorcentaje = array.sort(function (a, b) {
    if ((a.assistance / a.capacity) * 100 > (b.assistance / b.capacity) * 100) {
      return 1;
    }
    if ((a.assistance / a.capacity) * 100 < (b.assistance / b.capacity) * 100) {
      return -1;
    }
    return 0;
  });
  return arrayOrdenadoPorcentaje
}


let arrayOrdenadoCapacidad = []
//evento con mayor capacidad.
function mayorCapacidad(array) {
  arrayOrdenadoCapacidad = array.sort(function (a, b) {
    if (a.capacity < b.capacity) {
      return 1;
    }
    if (a.capacity > b.capacity) {
      return -1;
    }
    return 0;
  });
}

//---------------------------------------------------------------------------------------------------------------------------------------
//Tabla 2
function creacionSegundaTabla() {
  document.getElementById("segundaTabla").innerHTML = `<thead>
  <tr>
  <th colspan = "3">UPCOMING EVENTS STATISTCS BY CATEGORY</th>
</tr>
  </thead> 
  <tbody class = "cuerpoTablaDos">
  <tr>
  <th scope="col">Categories</th>
  <th scope="col">Revenues</th>
  <th scope="col">Percentage of attendance</th>
</tr>
   <tr class= "food">
    <td class = "categorias"></td>
    <td class = "ganancias"></td>
    <td class = "asistencia"></td>
   </tr>
  <tr class= "museum">
  <td class = "categorias"></td>
  <td class = "ganancias"></td>
  <td class = "asistencia"></td>
</tr>
<tr class= "concert">
<td class = "categorias"></td>
<td class = "ganancias"></td>
<td class = "asistencia"></td>
</tr>
<tr class= "race">
<td class = "categorias"></td>
<td class = "ganancias"></td>
<td class = "asistencia"></td>
</tr>
<tr class= "book">
<td class = "categorias"></td>
<td class = "ganancias"></td>
<td class = "asistencia"></td>
</tr>
<tr class= "party">
<td class = "categorias"></td>
<td class = "ganancias"></td>
<td class = "asistencia"></td>
</tr>
  </tbody>`
}
creacionSegundaTabla()

// Categorías
function pintarCategoriasT2() {
  document.querySelector(`#segundaTabla .food .categorias`).innerHTML = `Food`
  document.querySelector(`#segundaTabla .museum .categorias`).innerHTML = `Museum`
  document.querySelector(`#segundaTabla .concert .categorias`).innerHTML = `Concert`
  document.querySelector(`#segundaTabla .race .categorias`).innerHTML = `Race`
  document.querySelector(`#segundaTabla .book .categorias`).innerHTML = `Book`
  document.querySelector(`#segundaTabla .party .categorias`).innerHTML = `Party`
}
pintarCategoriasT2()

//Ganancias de todos los eventos de una categoría
function categoryGananciaT2(array) {
  let food = array.filter(event => event.category === "Food")
  let gananciaFoodUpcoming = []
  for (let index = 0; index < food.length; index++) {
    gananciaFoodUpcoming += (food[index].estimate) / (food[index].capacity) * 100
  }
  console.log(gananciaFoodUpcoming);
  document.querySelector("#segundaTabla .food .ganancias").innerHTML = `${gananciaFoodUpcoming}%`
}

//Porcentaje de asistencia.
function porcentajeAsistenciaT2(array) {
  let food = array.filter(event => event.category === "Food")
  let porcentajeFoodUpcoming = []
  for (let index = 0; index < food.length; index++) {
    porcentajeFoodUpcoming += (food[index].estimate) / (food[index].capacity) * 100
  }
  document.querySelector("#segundaTabla .food .asistencia").innerHTML = `${porcentajeFoodUpcoming}%`

  let museum = array.filter(event => event.category === "Museum")
  let porcentajeMuseumUpcoming = []
  for (let index = 0; index < museum.length; index++) {
    porcentajeMuseumUpcoming += (museum[index].estimate) / (museum[index].capacity) * 100
  }
  document.querySelector("#segundaTabla .museum .asistencia").innerHTML = `${porcentajeMuseumUpcoming}%`

  let concert = array.filter(event => event.category === "Concert")
  let porcentajeConcertUpcoming = []
  for (let index = 0; index < concert.length; index++) {
    porcentajeConcertUpcoming += (concert[index].estimate) / (concert[index].capacity) * 100
  }
  document.querySelector("#segundaTabla .concert .asistencia").innerHTML = `${porcentajeConcertUpcoming}%`

  let race = array.filter(event => event.category === "Race")
  let porcentajeRaceUpcoming = []
  for (let index = 0; index < race.length; index++) {
    porcentajeRaceUpcoming += (race[index].estimate) / (race[index].capacity) * 100
  }
  console.log(porcentajeRaceUpcoming);
  document.querySelector("#segundaTabla .race .asistencia").innerHTML = `${porcentajeRaceUpcoming}%`

  let book = array.filter(event => event.category === "Book")
  let porcentajeBookUpcoming = []
  for (let index = 0; index < book.length; index++) {
    porcentajeBookUpcoming += (book[index].estimate) / (book[index].capacity) * 100
  }
  document.querySelector("#segundaTabla .book .asistencia").innerHTML = `${porcentajeBookUpcoming}%`

  let party = array.filter(event => event.category === "Party")
  let porcentajePartyUpcoming = []
  for (let index = 0; index < party.length; index++) {
    porcentajePartyUpcoming += (party[index].estimate) / (party[index].capacity) * 100
  }
  document.querySelector("#segundaTabla .party .asistencia").innerHTML = `${porcentajePartyUpcoming}%`
}

//-----------------------------------------------------------------------------------------------------------------------------------------
//Tabla 3
function creacionTercerTabla(array) {
  document.getElementById("tercerTabla").innerHTML = `<thead>
  <tr>
  <th colspan = "3">PAST EVENTS STATISTCS BY CATEGORY</th>
</tr>
  </thead> 
  <tbody class = "cuerpoTablaTres">
  <tr>
  <th scope="col">Categories</th>
  <th scope="col">Revenues</th>
  <th scope="col">Percentage of attendance</th>
</tr>
  <tr class= "food">
    <td class = "categorias"></td>
    <td class = "ganancias"></td>
    <td class = "asistencia"></td>
  </tr>
  <tr class= "museum">
  <td class = "categorias"></td>
  <td class = "ganancias"></td>
  <td class = "asistencia"></td>
</tr>
<tr class= "concert">
<td class = "categorias"></td>
<td class = "ganancias"></td>
<td class = "asistencia"></td>
</tr>
<tr class= "race">
<td class = "categorias"></td>
<td class = "ganancias"></td>
<td class = "asistencia"></td>
</tr>
<tr class= "book">
<td class = "categorias"></td>
<td class = "ganancias"></td>
<td class = "asistencia"></td>
</tr>
<tr class= "cinema">
<td class = "categorias"></td>
<td class = "ganancias"></td>
<td class = "asistencia"></td>
</tr>
<tr class= "party">
<td class = "categorias"></td>
<td class = "ganancias"></td>
<td class = "asistencia"></td>
</tr>
  </tbody>`
}
creacionTercerTabla()

// Categorías
function pintarCategoriasT3() {
  document.querySelector(`#tercerTabla .food .categorias`).innerHTML = `Food`
  document.querySelector(`#tercerTabla .museum .categorias`).innerHTML = `Museum`
  document.querySelector(`#tercerTabla .concert .categorias`).innerHTML = `Concert`
  document.querySelector(`#tercerTabla .race .categorias`).innerHTML = `Race`
  document.querySelector(`#tercerTabla .book .categorias`).innerHTML = `Book`
  document.querySelector(`#tercerTabla .cinema .categorias`).innerHTML = `Cinema`
  document.querySelector(`#tercerTabla .party .categorias`).innerHTML = `Party`
}
pintarCategoriasT3()

//Ganancias de todos los eventos de una categoría
function categoryGananciaT3(array) {
  let food = array.filter(event => event.category === "Food")
  let porcentajeFoodPast = []
  for (let index = 0; index < food.length; index++) {
    porcentajeFoodPast = (food[index].assistance) * (food[index].price)
  }
  console.log(porcentajeFoodPast);
  document.querySelector("#tercerTabla .food .ganancias").innerHTML = `$${porcentajeFoodPast}`

//-----------------------------------------------------------------------------------------------------------

  let museum = array.filter(event => event.category === "Museum")
  let porcentajeMuseumPast = []
  for (let index = 0; index < museum.length; index++) {
    porcentajeFoodPast = (museum[index].assistance) * (museum[index].price)
  }
  console.log(porcentajeMuseumPast);
  document.querySelector("#tercerTabla .museum .ganancias").innerHTML = `$${porcentajeMuseumPast}`

//-----------------------------------------------------------------------------------------------------------
let concert = array.filter(event => event.category === "Museum")
let porcentajeMuseumPast = []
for (let index = 0; index < concert.length; index++) {
  porcentajeFoodPast = (concert[index].assistance) * (concert[index].price)
}
console.log(porcentajeMuseumPast);
document.querySelector("#tercerTabla .museum .ganancias").innerHTML = `$${porcentajeMuseumPast}`
//-----------------------------------------------------------------------------------------------------------
let museum = array.filter(event => event.category === "Museum")
let porcentajeMuseumPast = []
for (let index = 0; index < museum.length; index++) {
  porcentajeFoodPast = (museum[index].assistance) * (museum[index].price)
}
console.log(porcentajeMuseumPast);
document.querySelector("#tercerTabla .museum .ganancias").innerHTML = `$${porcentajeMuseumPast}`
//-----------------------------------------------------------------------------------------------------------
let museum = array.filter(event => event.category === "Museum")
let porcentajeMuseumPast = []
for (let index = 0; index < museum.length; index++) {
  porcentajeFoodPast = (museum[index].assistance) * (museum[index].price)
}
console.log(porcentajeMuseumPast);
document.querySelector("#tercerTabla .museum .ganancias").innerHTML = `$${porcentajeMuseumPast}`
//-----------------------------------------------------------------------------------------------------------
let museum = array.filter(event => event.category === "Museum")
let porcentajeMuseumPast = []
for (let index = 0; index < museum.length; index++) {
  porcentajeFoodPast = (museum[index].assistance) * (museum[index].price)
}
console.log(porcentajeMuseumPast);
document.querySelector("#tercerTabla .museum .ganancias").innerHTML = `$${porcentajeMuseumPast}`
//-----------------------------------------------------------------------------------------------------------
}

//Porcentaje de asistencia.
function porcentajeAsistenciaT3(array) {
  let food = array.filter(event => event.category === "Food")
  let porcentajeFoodPast = []
  for (let index = 0; index < food.length; index++) {
    porcentajeFoodPast += parseInt(((food[index].assistance) / (food[index].capacity)) * 100)
  }
  document.querySelector("#tercerTabla .food .asistencia").innerHTML = `${porcentajeFoodPast}%`

//-----------------------------------------------------------------------------------------------------------

  let museum = array.filter(event => event.category === "Museum")
  let porcentajeMuseumPast = []
  for (let index = 0; index < museum.length; index++) {
    porcentajeMuseumPast += (museum[index].assistance) / (museum[index].capacity) * 100
  }
  document.querySelector("#tercerTabla .museum .asistencia").innerHTML = `${porcentajeMuseumPast}%`

//-----------------------------------------------------------------------------------------------------------

  let concert = array.filter(event => event.category === "Concert")
  let porcentajeConcertPast = []
  for (let index = 0; index < concert.length; index++) {
    porcentajeConcertPast += (concert[index].assistance) / (concert[index].capacity) * 100
  }
  document.querySelector("#tercerTabla .concert .asistencia").innerHTML = `${porcentajeConcertPast}%`

//-----------------------------------------------------------------------------------------------------------

  let race = array.filter(event => event.category === "Race")
  let porcentajeRacePast = []
  for (let index = 0; index < race.length; index++) {
    porcentajeRacePast += (race[index].assistance) / (race[index].capacity) * 100
  }
  document.querySelector("#tercerTabla .race .asistencia").innerHTML = `${porcentajeRacePast}%`

//-----------------------------------------------------------------------------------------------------------

  let book = array.filter(event => event.category === "Book")
  let porcentajeBookPast = []
  for (let index = 0; index < book.length; index++) {
    porcentajeBookPast += (book[index].assistance) / (book[index].capacity) * 100
  }
  document.querySelector("#tercerTabla .book .asistencia").innerHTML = `${porcentajeBookPast}%`

//-----------------------------------------------------------------------------------------------------------

  let cinema = array.filter(event => event.category === "Cinema")
  let porcentajeCinemaPast = []
  for (let index = 0; index < cinema.length; index++) {
    porcentajeCinemaPast += (cinema[index].assistance) / (cinema[index].capacity) * 100
  }
  document.querySelector("#tercerTabla .cinema .asistencia").innerHTML = `${porcentajeCinemaPast}%`

//-----------------------------------------------------------------------------------------------------------

  let party = array.filter(event => event.category === "Party")
  let porcentajePartyPast = []
  for (let index = 0; index < party.length; index++) {
    porcentajePartyPast += (party[index].assistance) / (party[index].capacity) * 100
  }
  document.querySelector("#tercerTabla .party .asistencia").innerHTML = `${porcentajePartyPast}%`
}

//----------------------------------------------------------------------------------------------------------------------------------------

// 3ER TABLA EVENTOS PASADOS: Categorías | Ganancias de todos los eventos de una categoría | Porcentaje de asistencia.

//                                               asistencia dividido capacidad por cien.
// 📌Porcentaje de asistencia: (asistencia / capacidad) x 100. (asistencia = assistance o estimate).

// 📌 Ganancias: sumar todos los precios de los eventos (precio del evento multiplicado por asistencia) de una categoría.
// debería ser ilegal esta ayuda, pero bueno, task resuelta, lo que dije, pasan a código

function suma(array) {
  let sum = 0;
for (let number of array) {
  sum += number;
}
console.log(sum);
return sum;
}

