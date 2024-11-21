let cart = [];
let totalAmount = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const productItem = button.parentElement;
    const productName = productItem.querySelector('h2').innerText;
    const productPrice = parseFloat(productItem.querySelector('p').innerText.replace('Price: $', ''));

    cart.push({ name: productName, price: productPrice });
    totalAmount += productPrice;

    updateCart();
  });
});

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  cart.forEach(item => {
    const div = document.createElement('div');
    div.innerText = `${item.name} - $${item.price}`;
    cartItems.appendChild(div);
  });
  document.getElementById('total-amount').innerText = `Total: $${totalAmount}`;
}

document.getElementById('address-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const address = e.target.elements[0].value;
  document.getElementById('order-summary').innerText = `Order will be delivered to: ${address}`;
});
