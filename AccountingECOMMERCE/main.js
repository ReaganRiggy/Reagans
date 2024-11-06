// Initialize a simple cart as an empty array
let cart = [];

// --- Product Detail Page Functions ---

function addToCart(productId, productName, productPrice) {
    // Check if the product already exists in the cart
    const existingProduct = cart.find(item => item.id === productId);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
    }

    alert(`${productName} added to cart!`);
    updateCart();
}

// --- Shopping Cart Page Functions ---

function displayCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    cartItemsContainer.innerHTML = '';

    let total = 0;
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        // Create row for each item in the cart
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>
                <input type="number" value="${item.quantity}" min="1" 
                    onchange="updateQuantity(${item.id}, this.value)">
            </td>
            <td>$${itemTotal.toFixed(2)}</td>
            <td><button onclick="removeItem(${item.id})">Remove</button></td>
        `;
        cartItemsContainer.appendChild(row);
    });

    totalPriceElement.innerText = `Total: $${total.toFixed(2)}`;
}

function updateQuantity(productId, quantity) {
    const product = cart.find(item => item.id === productId);
    if (product) {
        product.quantity = parseInt(quantity);
        displayCart();
    }
}

function removeItem(productId) {
    cart = cart.filter(item => item.id !== productId);
    displayCart();
}

function proceedToCheckout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        window.location.href = "checkout.html";
    }
}

// --- Checkout Page Functions ---

function validateCheckoutForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const payment = document.getElementById('payment').value;

    if (name && address && payment) {
        alert('Order placed successfully!');
        cart = []; // Clear the cart after order is placed
        window.location.href = "index.html";
    } else {
        alert('Please fill in all the required fields');
    }
}

// --- Helper Functions ---

function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

// --- Page Load Initialization ---

document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    if (document.getElementById('cart-items')) {
        displayCart();
    }
});
