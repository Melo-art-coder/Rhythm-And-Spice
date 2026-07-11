
// Select elements

const cartButtons = document.querySelectorAll(".add-btn");
const cartCount = document.getElementById("cart-count");
const cartItems = document.getElementById("cart-items");
const totalPrice = document.getElementById("total-price");
const checkoutBtn = document.getElementById("checkout-btn");


// Cart storage

let cart = [];


// Add items to cart

cartButtons.forEach((button) => {

    button.addEventListener("click", () => {


        const card = button.parentElement;


        const foodName = card.querySelector("h3").textContent;

        const foodPriceText = card.querySelector("h4").textContent;


        const foodPrice = Number(
            foodPriceText.replace("₦","").replace(",","")
        );


        const item = {

            name: foodName,

            price: foodPrice

        };


        cart.push(item);


        updateCart();


        alert(foodName + " has been added to your order 🎵");

    });

});



// Update cart display

function updateCart(){


    cartItems.innerHTML = "";


    let total = 0;



    if(cart.length === 0){

        cartItems.innerHTML = "<p>Your cart is empty.</p>";

    }



    cart.forEach((item,index)=>{


        total += item.price;



        const orderItem = document.createElement("div");


        orderItem.innerHTML = `

        <p>

        ${item.name} - ₦${item.price.toLocaleString()}

        <button onclick="removeItem(${index})">

        ❌

        </button>

        </p>

        `;


        cartItems.appendChild(orderItem);


    });



    cartCount.textContent = cart.length;


    totalPrice.textContent = "₦" + total.toLocaleString();


}



// Remove items

function removeItem(index){


    cart.splice(index,1);


    updateCart();


}



// Checkout

checkoutBtn.addEventListener("click",()=>{


    if(cart.length === 0){


        alert("Your cart is empty. Add something delicious first 🍔");


        return;

    }



    alert(`

🎉 Order Received!

Thank you for choosing Rhythm & Spice.

Your delicious meal is being prepared.

Estimated time: 20-30 minutes.

( Demo order only )

    `);



    cart = [];


    updateCart();


});
