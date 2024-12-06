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

  document.addEventListener("DOMContentLoaded", function () {
    // Check if the counter has already been incremented during this session
    const incrementedFlag = sessionStorage.getItem("counterIncremented");
  
    if (!incrementedFlag) {
      // Retrieve the current count from localStorage or initialize it to 0
      let reviewCount = localStorage.getItem("reviewCount");
      reviewCount = reviewCount ? parseInt(reviewCount, 10) : 0;
  
      // Increment the counter
      reviewCount += 1;
  
      // Save the updated count back to localStorage
      localStorage.setItem("reviewCount", reviewCount);
  
      // Mark the counter as incremented in this session
      sessionStorage.setItem("counterIncremented", "true");
    }
  
    // Display the current count on the page
    const counterDisplay = document.getElementById("reviewCounter");
    const reviewCount = localStorage.getItem("reviewCount") || 0;
    counterDisplay.textContent = `Reviews Completed: ${reviewCount}`;
  });
  

