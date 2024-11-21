let cart = [];
let totalPrice = 0;

const addToCartButtons = document.querySelectorAll('.add-to-cart');
const checkoutButton = document.getElementById('checkout-btn');
const checkoutSection = document.getElementById('checkout-section');
const orderSummary = document.getElementById('order-summary');
const cartList = document.getElementById('cart-list');
const totalPriceElement = document.getElementById('total-price');
const addressForm = document.getElementById('address-form');


function updateCart() {

    cartList.innerHTML = '';
    if (cart.length === 0) {
        cartList.innerHTML = '<li>Your cart is empty.</li>';
    } else {
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price}`;
            cartList.appendChild(li);
        });
    }

 
    totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
}


addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const itemName = e.target.getAttribute('data-name');
        const itemPrice = parseFloat(e.target.getAttribute('data-price'));

   
        cart.push({ name: itemName, price: itemPrice });
        totalPrice += itemPrice;

        
        updateCart();
    });
});


checkoutButton.addEventListener('click', () => {
    if (cart.length === 0) {
        alert("Your cart is empty! Please add some items to the cart before checking out.");
    } else {
        checkoutSection.style.display = 'block';  
    }
});


addressForm.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;


    if (name && address && phone && email) {
     
        orderSummary.innerHTML = `
            <strong>Order Summary:</strong><br>
            Name: ${name}<br>
            Address: ${address}<br>
            Phone: ${phone}<br>
            Email: ${email}<br><br>
            <strong>Items Ordered:</strong><br>
        `;

        cart.forEach(item => {
            orderSummary.innerHTML += `${item.name} - $${item.price}<br>`;
        });

        orderSummary.innerHTML += `<br><strong>Total Price: $${totalPrice.toFixed(2)}</strong>`;


        cart = [];
        totalPrice = 0;

      
        updateCart();

       
        checkoutSection.style.display = 'none';
      
        alert('Your order has been placed successfully!');
    } else {
        alert('Please fill in all the required fields.');
    }
});
