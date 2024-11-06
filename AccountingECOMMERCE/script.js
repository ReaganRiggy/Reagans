// script.js

// Function for the index.html
function changeBackgroundColor() {
    document.body.style.backgroundColor = "lightblue"; // Example function
}

// Function for the shop.html to dynamically load products
function loadProducts() {
    const products = [
        { name: "Product 1", price: 10 },
        { name: "Product 2", price: 20 },
        { name: "Product 3", price: 30 },
    ];

    const productContainer = document.querySelector("#productContainer");
    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.price})">Add to Cart</button>
        `;
        productContainer.appendChild(productElement);
    });
}

// Cart storage to simulate adding items to the cart
let cartItems = [];

// Function for the cart.html
function addToCart(price) {
    cartItems.push(price);
    updateCartTotal();
}

function updateCartTotal() {
    const total = cartItems.reduce((acc, curr) => acc + curr, 0);
    document.querySelector("#cartTotal").innerText = `Total: $${total}`;
}

// Function for the contact.html
function validateContactForm() {
    const name = document.querySelector("#contactName").value;
    const email = document.querySelector("#contactEmail").value;
    const message = document.querySelector("#contactMessage").value;

    if (name === "" || email === "" || message === "") {
        alert("All fields are required.");
        return false; // Prevent form submission
    }

    // Simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false; // Prevent form submission
    }

    alert("Form submitted successfully!");
    return true; // Allow form submission
}

// Function for FAQs
function toggleFAQ(event) {
    const faqAnswer = event.target.nextElementSibling; // Select the next sibling element (the answer)
    if (faqAnswer.style.display === "none" || faqAnswer.style.display === "") {
        faqAnswer.style.display = "block"; // Show the answer
    } else {
        faqAnswer.style.display = "none"; // Hide the answer
    }
}

// Add event listeners for button clicks, form submissions, etc.
document.addEventListener("DOMContentLoaded", function() {
    // Event listener for the background color change button on index.html
    const changeBgButton = document.querySelector("#changeBgButton");
    if (changeBgButton) {
        changeBgButton.addEventListener("click", changeBackgroundColor);
    }

    // Event listener for loading products on shop.html
    if (document.querySelector("#productContainer")) {
        loadProducts();
    }

    // Event listener for the contact form submission on contact.html
    const contactForm = document.querySelector("#contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent default form submission
            validateContactForm();
        });
    }

    // Event listeners for FAQ questions
    const faqQuestions = document.querySelectorAll(".faq-question");
    faqQuestions.forEach(question => {
        question.addEventListener("click", toggleFAQ);
    });
});
