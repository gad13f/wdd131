// Arreglo de objetos con datos de la tienda "New Vintage"
const vintageProducts = [
    { title: "Chaqueta de Cuero 70s", category: "Ropa Vintage", price: "$120.00 USD", description: "Auténtica chaqueta de los años 70 en excelente estado de conservación.", image: "images/jacket.jpg" },
    { title: "Gafas de Sol Retro", category: "Accesorios Retro", price: " $45.00 USD", description: "Montura clásica dorada de diseño histórico único.", image: "images/glasses.jpg" },
    { title: "Reloj de Mesa Art Déco", category: "Decoración Histórica", price: "$85.00 USD", description: "Pieza decorativa restaurada de mediados del siglo XX.", image: "images/clock.jpg" }
];

// Función 1: Renderizar productos usando Template Literals y métodos de arreglos
function displayProducts(products) {
    const container = document.getElementById("dynamic-container");
    if (!container) return; // Si no estamos en la página del catálogo, termina

    // Uso estricto de Template Literals y .map()
    container.innerHTML = products.map(product => `
        <div class="card">
            <img src="${product.image}" alt="${product.title}" loading="lazy">
            <div class="card-content">
                <h3>${product.title}</h3>
                <p><strong>Categoría:</strong> ${product.category}</p>
                <p>${product.description}</p>
                <div class="price">${product.price}</div>
            </div>
        </div>
    `).join("");
}

// Función 2: Manejar eventos de envío de formulario y guardar en LocalStorage
function setupUserPreferencesForm() {
    const form = document.getElementById("user-form");
    if (!form) return;

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita recargar la página

        const userName = document.getElementById("username").value.trim();
        const userPref = document.getElementById("preference").value;

        // Condicionales de validación
        if (userName === "" || userPref === "") {
            alert("Por favor, completa todos los campos requeridos.");
            return;
        }

        // Guardar datos en el LocalStorage
        localStorage.setItem("nv_userName", userName);
        localStorage.setItem("nv_userPreference", userPref);

        alert(`¡Gracias, ${userName}! Tus preferencias de "${userPref}" han sido guardadas.`);
        form.reset();
        
        // Actualizar saludo en tiempo real
        checkLocalStorageUser();
    });
}

// Función 3: Verificar y mostrar saludo personalizado usando LocalStorage
function checkLocalStorageUser() {
    const welcomeEl = document.getElementById("welcome-message");
    if (!welcomeEl) return;

    const savedName = localStorage.getItem("nv_userName");
    const savedPref = localStorage.getItem("nv_userPreference");

    // Condicionales para mostrar el mensaje adecuado con template literals
    if (savedName && savedPref) {
        welcomeEl.textContent = `¡Bienvenido de nuevo, ${savedName}! Nos alegra saber que te interesa nuestra sección de ${savedPref}.`;
    } else {
        welcomeEl.textContent = "¡Bienvenido a New Vintage! Explora nuestra colección y guarda tus preferencias abajo.";
    }
}

// Ejecutar funciones al cargar completamente el DOM
window.addEventListener("DOMContentLoaded", () => {
    displayProducts(vintageProducts);
    setupUserPreferencesForm();
    checkLocalStorageUser();
});