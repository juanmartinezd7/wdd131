//

var date = new Date();
var year = date.getFullYear();
document.getElementById('currentyear').innerHTML =year;



document.getElementById('lastdatemodified').innerHTML =document.lastModified;

let select = document.querySelector("select");
let div = document.querySelector("div");

const productsList = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5,
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7,
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5,
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9,
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0,
  },
];

if (select) {
    productsList.forEach(product => {
      let option = document.createElement("option");
      option.value = product.id;
      option.textContent = product.name;
      select.appendChild(option);
    });
  }
  
