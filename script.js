let cart = [];
let total = 0;

// Add Product
function addToCart(productName, price) {

    const existing = cart.find(item => item.name === productName);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({
            name: productName,
            price: price,
            quantity: 1
        });

    }
    const btn = event.target;

btn.innerText = "Added ✓";

setTimeout(() => {

    btn.innerText = "Add to Cart";

},1000);
    updateCart();
}

// Update Cart
function updateCart() {

    const cartItems = document.getElementById("cartItems");
    const totalPrice = document.getElementById("total");

    cartItems.innerHTML = "";

    total = 0;

    cart.forEach((item, index) => {

        const subtotal = item.price * item.quantity;
        total += subtotal;

        cartItems.innerHTML += `

        <div class="cart-item">

            <div>
                <h4>${item.name}</h4>
                <p>₹${item.price} × ${item.quantity} = ₹${subtotal}</p>
            </div>

            <div class="cart-buttons">

                <button onclick="increase(${index})">+</button>

                <button onclick="decrease(${index})">-</button>

                <button onclick="removeItem(${index})">🗑</button>

            </div>

        </div>

        `;

    });

    totalPrice.innerHTML = `Total : ₹${total}`;
updateCartCount();
}

// Increase Quantity
function increase(index){

    cart[index].quantity++;

    updateCart();

}

// Decrease Quantity
function decrease(index){

    if(cart[index].quantity > 1){

        cart[index].quantity--;

    }else{

        cart.splice(index,1);

    }

    updateCart();

}

// Remove Product
function removeItem(index){

    cart.splice(index,1);

    updateCart();

}

// Checkout
document.querySelector(".checkout").addEventListener("click",()=>{

    if(cart.length===0){

        alert("🛒 Your cart is empty!");

        return;

    }

    alert(
`🎉 Order Placed Successfully!

Items : ${cart.length}

Total Bill : ₹${total}

Thank You For Shopping ❤️`
);

cart=[];

updateCart();

});