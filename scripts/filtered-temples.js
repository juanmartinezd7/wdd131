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
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888-May-21",
      area: 74792,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015-June-07",
      area: 96630,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-daylight-1416668-wallpaper.jpg"
  },
  {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020-May-02",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974-November-19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986-January-10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983-December-02",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
      templeName: "Rome Italy",
      location: "Rome, Italy",
      dedicated: "2019-March-10",
      area: 41010,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/1-Rome-Temple-2160936.jpg"
  },
  {
      templeName: "Dallas Texas",
      location: "Dallas, Texas",
      dedicated: "1984-October-19",
      area: 44207,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/dallas-texas/400x250/dallas-temple-lds-1048888-wallpaper.jpg"
  },
  {
      templeName: "Mesa Arizona",
      location: "Mesa, Arizona",
      dedicated: "1927-October-23",
      area: 75000,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mesa-arizona/400x250/mesa_arizona_temple_news_conference.jpeg"
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