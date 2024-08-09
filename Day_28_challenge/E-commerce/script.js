// Toggle menu for mobile view
const menuItems = document.getElementById("menuItems");

function toggleMenu() {
    if (menuItems.style.maxHeight === "0px") {
        menuItems.style.maxHeight = "200px";
    } else {
        menuItems.style.maxHeight = "0px";
    }
}

// Shopping Cart Functionality
let cart = [];

function addToCart(productId, productName, productPrice) {
    const product = cart.find(item => item.id === productId);
    if (product) {
        product.quantity += 1;
    } else {
        cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
    }
    updateCart();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

function updateCart() {
    let cartItemsContainer = document.getElementById("cart-items");
    cartItemsContainer.innerHTML = "";
    
    cart.forEach(item => {
        let itemElement = document.createElement("div");
        itemElement.className = "cart-item";
        itemElement.innerHTML = `
            <span>${item.name} x ${item.quantity}</span>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartItemsContainer.appendChild(itemElement);
    });

    updateTotal();
}

function updateTotal() {
    let total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    document.getElementById("cart-total").innerText = `Total: $${total.toFixed(2)}`;
}

// Image Slider for Product Images
let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("product-slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

window.onload = function() {
    showSlides();
    menuItems.style.maxHeight = "0px"; // Ensures menu is collapsed by default
}
