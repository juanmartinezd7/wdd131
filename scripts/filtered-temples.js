//

var date = new Date();
var year = date.getFullYear();
document.getElementById('currentyear').innerHTML =year;



document.getElementById('lastdatemodified').innerHTML =document.lastModified;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.nav-container');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


const temples = [
  {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005-August-07",
      area: 11500,
      imageUrl: "images/aba-nigeria-temple-400-250.jpg"
  },
  {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888-May-21",
      area: 74792,
      imageUrl: "images/manti-temple-400-250.jpg"
  },
  {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015-June-07",
      area: 96630,
      imageUrl: "images/payson-utah-temple-400-250.jpg"
  },
  {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020-May-02",
      area: 6861,
      imageUrl: "images/yigo-guam-temple-400-250.jpg"
      
  },
  {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974-November-19",
      area: 156558,
      imageUrl: "images/washington-dc-temple-400-267.jpg"
      
  },
  {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986-January-10",
      area: 9600,
      imageUrl: "images/lima-peru-temple-400-250.jpg"
  },
  {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983-December-02",
      area: 116642,
      imageUrl: "images/mexico-city-temple-400-250.jpg"
  },
  {
      templeName: "Rome Italy",
      location: "Rome, Italy",
      dedicated: "2019-March-10",
      area: 41010,
      imageUrl: "images/rome-italy-temple-400-250.jpg"
  },
  {
      templeName: "Dallas Texas",
      location: "Dallas, Texas",
      dedicated: "1984-October-19",
      area: 44207,
      imageUrl: "images/dallas-texas-temple-400-250.jpg"
  },    
  {
      templeName: "Mesa Arizona",
      location: "Mesa, Arizona",
      dedicated: "1927-October-23",
      area: 75000,
      imageUrl: "images/mesa-arizona-temple-400-250.jpeg"
      
  }
  
 
  // Add more temple objects here...
];

const templesContainer = document.getElementById("templesContainer");
const navLinks = document.querySelectorAll(".nav-container a");
const activeFilter = document.getElementById("activeFilter");

// Function to render temples
function renderTemples(filter = "all") {
    templesContainer.innerHTML = ""; // Clear the container

    const filteredTemples = temples.filter(temple => {
        const dedicatedYear = new Date(temple.dedicated).getFullYear(); // Parse year correctly
        switch (filter) {
            case "before2000":
                return dedicatedYear < 1900;
            case "after2000":
                return dedicatedYear >= 2000;
            case "areaGreater75000":
                return temple.area >= 90000;
            case "areaLess75000":
                return temple.area < 10000;
            default:
                return true; // Show all if "all" filter is selected
        }
    });

    // Render the filtered temples
    filteredTemples.forEach(temple => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
            <div class="card-content">
                <h3>${temple.templeName}</h3>
                <p>Location: ${temple.location}</p>
                <p>Dedicated: ${temple.dedicated}</p>
                <p>Area: ${temple.area} sq ft</p>
            </div>
        `;
        templesContainer.appendChild(card);
    });
  }

  // Event listeners for navigation links
  navLinks.forEach(link => {
      link.addEventListener("click", (event) => {
          event.preventDefault();

          // Remove 'active' class from all links
          navLinks.forEach(navLink => navLink.classList.remove("active"));
          // Add 'active' class to the clicked link
          link.classList.add("active");

          // Get the filter and text from the clicked link
          const filter = link.getAttribute("data-filter");
          const text = link.textContent;

          // Update the H2 text
          activeFilter.textContent = text;

          // Render the temples based on the filter
          renderTemples(filter);
      });
  });

  // Initial render
  renderTemples();