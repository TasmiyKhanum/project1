/* ================= CART ================= */

let cart = [];



/* ADD TO CART */

function addToCart(name, price) {

    let existingProduct =
        cart.find(product => product.name === name);


    if (existingProduct) {

        existingProduct.quantity++;

    }

    else {

        cart.push({

            name: name,

            price: price,

            quantity: 1

        });

    }


    displayCart();

}



/* DISPLAY CART */

function displayCart() {

    let cartItems =
        document.getElementById("cart-items");


    let total =
        document.getElementById("total");


    cartItems.innerHTML = "";


    if (cart.length === 0) {

        cartItems.innerHTML =
            `<p class="empty-cart">
                Your cart is empty.
             </p>`;

        total.innerText = "Total: ₹0";

        return;

    }


    let totalAmount = 0;


    cart.forEach((product, index) => {


        let productTotal =
            product.price * product.quantity;


        totalAmount += productTotal;


        let item =
            document.createElement("div");


        item.className = "cart-item";


        item.innerHTML = `

            <div>

                <strong>
                    ${product.name}
                </strong>

                <br>

                ₹${product.price} / kg

            </div>


            <div class="quantity">

                <button
                    onclick="decreaseQuantity(${index})">

                    -

                </button>


                <span>

                    ${product.quantity} kg

                </span>


                <button
                    onclick="increaseQuantity(${index})">

                    +

                </button>

            </div>


            <div>

                ₹${productTotal}

            </div>


            <button
                class="remove-button"
                onclick="removeProduct(${index})">

                Remove

            </button>

        `;


        cartItems.appendChild(item);

    });


    total.innerText =
        "Total: ₹" + totalAmount;

}



/* INCREASE */

function increaseQuantity(index) {

    cart[index].quantity++;

    displayCart();

}



/* DECREASE */

function decreaseQuantity(index) {

    if (cart[index].quantity > 1) {

        cart[index].quantity--;

    }

    else {

        cart.splice(index, 1);

    }


    displayCart();

}



/* REMOVE */

function removeProduct(index) {

    cart.splice(index, 1);

    displayCart();

}



/* PLACE ORDER */

function placeOrder() {

    if (cart.length === 0) {

        alert(
            "Your cart is empty. Please add a product first."
        );

        return;

    }


    let orderMessage =
        "Thank you for ordering from Fresh Basket!";


    alert(orderMessage);


    cart = [];

    displayCart();

}