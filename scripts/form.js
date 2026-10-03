// products for the activity
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

// Full the selector of products in form.html
const productSelect = document.getElementById("productName");

if (productSelect) {
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.name; // value of the product name
    option.textContent = product.name; // text of the product name
    productSelect.appendChild(option);
  });
}

// LocalStorage for review.html
// This code increase the counter only if we are on the review.html page
const reviewCounterElement = document.getElementById("reviewCounter");
if (reviewCounterElement) {
  let reviewCount = Number(localStorage.getItem("reviewCount-ls")) || 0;
  
  reviewCount++;
  
  localStorage.setItem("reviewCount-ls", reviewCount);
  
  reviewCounterElement.textContent = reviewCount;
}

const currentYearSpan = document.getElementById("currentyear");
if (currentYearSpan) {
  currentYearSpan.textContent = new Date().getFullYear();
}

const lastModifiedP = document.getElementById("lastModified");
if (lastModifiedP) {
  lastModifiedP.textContent = `Last modified: ${document.lastModified}`;
}