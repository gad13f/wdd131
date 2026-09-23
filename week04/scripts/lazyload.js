// Obtain the current year for the copyright
const currentYearSpan = document.getElementById("currentyear");
if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
}

// Obtain las modified date
const lastModifiedElement = document.getElementById("lastModified");
if (lastModifiedElement) {
    // document.lastModified devuelve un string con la fecha y hora
    lastModifiedElement.textContent = `Last Modification: ${document.lastModified}`;
}