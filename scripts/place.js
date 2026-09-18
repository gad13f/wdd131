// --- 1. Pie de página dinámico (Footer) ---
// Obtener el año actual para el copyright
const currentYearSpan = document.querySelector("#currentyear");
if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
}

// Obtener la fecha de la última modificación del documento
const lastModifiedSpan = document.querySelector("#lastModified");
if (lastModifiedSpan) {
    lastModifiedSpan.textContent = document.lastModified;
}


// --- 2. Cálculo del Factor de Sensación Térmica (Wind Chill) ---
// Valores estáticos definidos en el HTML (Temperatura en °C y Viento en km/h)
const temperature = 8; // °C
const windSpeed = 6;   // km/h

// Función de flecha (arrow function) de una sola línea para calcular el wind chill métrico
const calculateWindChill = (temp, speed) => 
    (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);

// Elemento en el HTML donde se mostrará el resultado
const windChillElement = document.querySelector("#windchill");

// Validar condiciones para unidades métricas: 
// Temperatura <= 10 °C Y Velocidad del viento > 4.8 km/h
if (temperature <= 10 && windSpeed > 4.8) {
    if (windChillElement) {
        windChillElement.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
    }
} else {
    if (windChillElement) {
        windChillElement.textContent = "N/A";
    }
}