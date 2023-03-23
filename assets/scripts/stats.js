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



//Porcentaje de asistencia.

//-----------------------------------------------------------------------------------------------------------------------------------------
//Tabla 3
function creacionTercerTabla(array) {
  document.getElementById("tercerTabla").innerHTML = `<thead>
  <tr>
  <th colspan = "3">PAST EVENTS STATISTCS BY CATEGORY</th>
</tr>
  </thead> 
  <tbody class = "cuerpoTablaTres">
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



//Porcentaje de asistencia.

//----------------------------------------------------------------------------------------------------------------------------------------
// 2DA TABLA EVENTOS FUTUROS: Categorías | Ganancias de todos los eventos de una categoría | Porcentaje de asistencia.

// 3ER TABLA EVENTOS PASADOS: Categorías | Ganancias de todos los eventos de una categoría | Porcentaje de asistencia.

//                                               asistencia dividido capacidad por cien.
// 📌Porcentaje de asistencia: (asistencia / capacidad) x 100. (asistencia = assistance o estimate).

// 📌Porcentaje de asistencia de la segunda y tercer tabla: los resultados de la tabla resuelta que pasé son promedios, no porcentajes, ustedes lo pueden hacer de las dos formas:
// porcentaje: suman toda la asistencia de los eventos de esa categoría, después suman toda la capacidad de los eventos de esa categoría y ahí hacen el porcentaje total.
// promedio: de cada porcentaje de asistencia lo dividen por la cantidad de eventos, es decir, si tengo 4 eventos voy a tener 4 porcentajes y eso lo divido por 4
// ej museum: los porcentajes de los cuatro eventos a esa categoría son 100%, 100%, 84,375%, 81,666% / 4 = 91,50%  (resultado de la tabla).

// 📌 Ganancias: sumar todos los precios de los eventos (precio del evento multiplicado por asistencia) de una categoría.
// debería ser ilegal esta ayuda, pero bueno, task resuelta, lo que dije, pasan a código