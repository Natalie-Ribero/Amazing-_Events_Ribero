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
  // categorias(data.events)
}

iniciar();

function crearPrimerTabla() {
  
}

function sacarPorcentaje() {
  
}

function pintarDatosTabla() {
  
}

// function categorias() {
//   let categorias = array.map((event) => event.category);
//   let category = new Set(categorias);
//   console.log(category);
//   return category;
// }

//Tabla 1
 let primerTabla = document.getElementById("primerTabla");
 let segundaTabla = document.getElementById("segundaTabla");
 let tercerTabla = document.getElementById("tercerTabla");


//  array.forEach(element => {
  
//  });



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