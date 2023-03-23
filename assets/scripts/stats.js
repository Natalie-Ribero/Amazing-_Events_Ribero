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
  console.log(data);
  let pastEvents = await data.events.filter(event => event.date < data.currentDate);
  mayorPorcentajeAsistencia(pastEvents)
  menorPorcentajeAsistencia(pastEvents)

}

iniciar();

//Tabla 1

let segundaTabla = document.getElementById("segundaTabla");
let tercerTabla = document.getElementById("tercerTabla");


function creacionPrimerTabla() {
  document.getElementById("primerTabla").innerHTML = `<thead>
    <tr>
      <th scope="col">Event with the highest percentage of attendance</th>
      <th scope="col">Event with the lowest percentage of attendance</th>
      <th scope="col">Event with larger capacity</th>
    </tr>
  </thead>
  <tbody>
  <tr class= "mayorAsistenciaTR">
    <td class = "mayorAsistencia"></td>
    <td class = "menorAsistencia">Otto</td>
    <td class = "mayorCapacidad">@mdo</td>
  </tr>
  </tbody>`
}
creacionPrimerTabla()

//Evento con el mayor porcentaje de asistencia 

function mayorPorcentajeAsistencia(array) {
  let porcentajesMayor = []
  array.forEach(element => {
    porcentajesMayor +=((element.assistance / element.capacity) * 100)
    
  }) 
  console.log(porcentajesMayor);
let mayorAsistencia = Math.max(...porcentajesMayor)
console.log(mayorAsistencia);
 document.querySelector("#primerTabla .mayorAsistenciaTR .mayorAsistencia").innerHTML = mayorAsistencia
}



 
//Evento con el menor porcentaje de asistencia

function menorPorcentajeAsistencia(array) {
  let porcentajesMenor = []
  array.forEach(element => {
    porcentajesMenor +=((element.assistance / element.capacity) * 100)
    
  }) 
  console.log(porcentajesMenor);
let menorAsistencia = Math.min(...porcentajesMenor)
console.log(menorAsistencia);
 document.querySelector("#primerTabla .mayorAsistenciaTR .menorAsistencia").innerHTML = menorAsistencia
}


//evento con mayor capacidad.

function mayorCapacidad(array) {
  let capacidades = array.map
}

//Tabla 2

// Categorías

//Ganancias de todos los eventos de una categoría

//Porcentaje de asistencia.

//Tabla 3

// Categorías

//Ganancias de todos los eventos de una categoría

//Porcentaje de asistencia.


// 1ER TABLA EVENTOS PASADOS: Evento con el mayor porcentaje de asistencia | Evento con el menor porcentaje de asistencia | evento con mayor capacidad.

// 2DA TABLA EVENTOS FUTUROS: Categorías | Ganancias de todos los eventos de una categoría | Porcentaje de asistencia.

// 3ER TABLA EVENTOS PASADOS: Categorías | Ganancias de todos los eventos de una categoría | Porcentaje de asistencia.

//                                               asistencia dividido capacidad por cien.
// 📌Porcentaje de asistencia: (asistencia / capacidad) x 100. (asistencia = assistance o estimate).

// 📌Porcentaje de asistencia de la segunda y tercer tabla: los resultados de la tabla resuelta que pasé son promedios, no porcentajes, ustedes lo pueden hacer de las dos formas:
// porcentaje: suman toda la asistencia de los eventos de esa categoría, después suman toda la capacidad de los eventos de esa categoría y ahí hacen el porcentaje total.
// promedio: de cada porcentaje de asistencia lo dividen por la cantidad de eventos, es decir, si tengo 4 eventos voy a tener 4 porcentajes y eso lo divido por 4
// ej museum: los porcentajes de los cuatro eventos a esa categoría son 100%, 100%, 84,375%, 81,666% / 4 = 91,50%  (resultado de la tabla).

// 📌Conclusión: si eligen sacar el porcentaje, va a haber una pequeña diferencia con los resultados de la tabla (es mínima, está bien de igual forma, haganló como se les haga más fácil y cómodo).
// 📌 Ganancias: sumar todos los precios de los eventos (precio del evento multiplicado por asistencia) de una categoría.
// 📌 Evento con mayor porcentaje de asistencia: Sacan el porcentaje de todos los eventos pasados, ordenenlos de mayor a menor, impriman el primero.
// 📌 Evento con menor porcentaje de asistencia: Sacan el porcentaje de todos los eventos pasados, ordenenlos de menor a mayor, impriman el primero.
// debería ser ilegal esta ayuda, pero bueno, task resuelta, lo que dije, pasan a código