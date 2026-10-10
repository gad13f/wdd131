// Array of objects with "New Vintage" store data
const vintageProducts = [
    { title: "Retro Sunglasses", category: "Vintage Accessories", price: "$70.00 USD", description: "Classic gold frame with a unique historical design, crafted with lightweight metal and vintage inspired lenses.", image: "images/glasses.jpg" },
    { title: "70s Leather Jacket", category: "Vintage Clothing", price: "$120.00 USD", description: "Authentic 1970s jacket in excellent condition, made from premium, durable materials with classic retro tailoring.", image: "images/jacket.jpg" },
    { title: "Historic Vintage Watch", category: "Historic Vintage Watch", price: "$300.00 USD", description: "Piece from the mid-20th century with a weathered leather strap. a classic timepiece that transcends time.", image: "images/watch.jpg" }
];

// Function 1: Render products using Template Literals and array methods
function displayProducts(products) {
    const container = document.getElementById("dynamic-container");
    if (!container) return; // If we are not on the catalog page, exit

    // Strict use of Template Literals and .map()
    container.innerHTML = products.map(product => `
        <div class="card">
            <img src="${product.image}" alt="${product.title}" loading="lazy">
            <div class="card-content">
                <h3>${product.title}</h3>
                <p><strong>Category:</strong> ${product.category}</p>
                <p>${product.description}</p>
                <div class="price">${product.price}</div>
            </div>
        </div>
    `).join("");
}

// Function 2: Handle form submission events and save to LocalStorage
function setupUserPreferencesForm() {
    const form = document.getElementById("user-form");
    if (!form) return;

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent page reload

        const userName = document.getElementById("username").value.trim();
        const userPref = document.getElementById("preference").value;

        // Validation conditionals
        if (userName === "" || userPref === "") {
            alert("Please fill in all required fields.");
            return;
        }

        // Save data to LocalStorage
        localStorage.setItem("nv_userName", userName);
        localStorage.setItem("nv_userPreference", userPref);

        alert(`Thank you, ${userName}! Your preferences for "${userPref}" have been saved.`);
        form.reset();
        
        // Update greeting in real-time
        checkLocalStorageUser();
    });
}

// Function 3: Check and display personalized greeting using LocalStorage
function checkLocalStorageUser() {
    const welcomeEl = document.getElementById("welcome-message");
    if (!welcomeEl) return;

    const savedName = localStorage.getItem("nv_userName");
    const savedPref = localStorage.getItem("nv_userPreference");

    // Conditionals to display appropriate message with template literals
    if (savedName && savedPref) {
        welcomeEl.textContent = `Welcome back, ${savedName}! We're glad to know you're interested in our ${savedPref} section.`;
    } else {
        welcomeEl.textContent = "Welcome to New Vintage! Explore our collection and save your preferences below.";
    }
}

// Execute functions once the DOM is fully loaded
window.addEventListener("DOMContentLoaded", () => {
    displayProducts(vintageProducts);
    setupUserPreferencesForm();
    checkLocalStorageUser();
});