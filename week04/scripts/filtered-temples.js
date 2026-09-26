const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // --- my temples --- //
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
  },
 {
    templeName: "San Diego California",
    location: "San Diego, California, United States",
    dedicated: "1993, April, 25",
    area: 72000,
    imageUrl: "https://newsroom.churchofjesuschrist.org/media/orig/San-Diego-California-Temple1.jpg"
  },
  {
    templeName: "Mcallen Texas",
    location: "Mcallen, Texas, United States",
    dedicated: "2023, October, 8",
    area: 27897,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/mcallen-texas-temple/mcallen-texas-temple-48056.jpg"
  }
];

// Función para mostrar las tarjetas dinámicamente
const createTempleCard = (filteredTemples) => {
  const container = document.querySelector(".res-grid");
  container.innerHTML = ""; // Limpia el contenedor antes de dibujar
  
  filteredTemples.forEach((temple) => {
    let card = document.createElement("figure");
    
    card.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p><span>Location:</span> ${temple.location}</p>
      <p><span>Dedicated:</span> ${temple.dedicated}</p>
      <p><span>Size:</span> ${temple.area} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
    `;
    
    container.appendChild(card);
  });
};

// Muestra todos los templos por defecto al cargar la página
createTempleCard(temples);

// Eventos de los filtros de navegación
document.querySelector("#home").addEventListener("click", () => {
  createTempleCard(temples);
});

document.querySelector("#old").addEventListener("click", () => {
  let filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
  createTempleCard(filtered);
});

document.querySelector("#new").addEventListener("click", () => {
  let filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
  createTempleCard(filtered);
});

document.querySelector("#large").addEventListener("click", () => {
  let filtered = temples.filter(t => t.area > 90000);
  createTempleCard(filtered);
});

document.querySelector("#small").addEventListener("click", () => {
  let filtered = temples.filter(t => t.area < 10000);
  createTempleCard(filtered);
});

// Año actual y última modificación en el footer
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;