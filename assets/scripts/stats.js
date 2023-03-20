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
}

iniciar();

let th = Array.from(document.querySelectorAll("th"))
let td = Array.from(document.querySelectorAll("td"))
let tr = Array.from(document.querySelectorAll("tr"))
console.log(td,tr,th)

th[0].innerHTML = `Events statistics`
th[1].innerHTML = `Upcoming Events statistics by category`
th[2].innerHTML = `Past Events statistics by category`
td[6].innerHTML = `Category`
td[30].innerHTML = `Category`
td[7].innerHTML = `Revenues`
td[31].innerHTML = `Revenues`
td[8].innerHTML = `Percentaje of Atendence`
td[32].innerHTML = `Percentaje of Atendence`

td[9].innerHTML = `Food`
td[33].innerHTML = `Food`
td[12].innerHTML = `Museum`
td[36].innerHTML = `Museum`
td[15].innerHTML = `Concert`
td[39].innerHTML = `Concert`
td[18].innerHTML = `Race`
td[42].innerHTML = `Race`
td[21].innerHTML = `Books`
td[45].innerHTML = `Books`
td[24].innerHTML = `Cinema`
td[48].innerHTML = `Cinema`
td[27].innerHTML = `Party`
td[51].innerHTML = `Party`

