let cart = [];

function openCartSidebar() {
  document.getElementById('cartSidebar').classList.add('active');
  document.getElementById('cartOverlay').classList.add('active');
  renderCart();
}
function closeCartSidebar() {
  document.getElementById('cartSidebar').classList.remove('active');
  document.getElementById('cartOverlay').classList.remove('active');
}

function addToCart(product) {
  const found = cart.find(item => item.name === product.name);
  if (found) {
    found.qty += 1;
  } else {
    cart.push({...product, qty: 1});
  }
  updateCartCount();
  renderCart();
}

function renderCart() {
  const cartItems = document.getElementById('cartItems');
  cartItems.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    total += parseFloat(item.price.replace(/[^0-9.]/g, '')) * item.qty;
    cartItems.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        <div style="flex:1">
          <div>${item.name}</div>
          <div>₱${item.price} x ${item.qty}</div>
        </div>
        <button onclick="removeFromCart('${item.name}')">&times;</button>
      </div>
    `;
  });
  document.getElementById('cartTotal').textContent = 'Total: ₱' + total.toLocaleString();
  updateCartCount();
}

function updateCartCount() {
  document.getElementById('cartCount').textContent = cart.reduce((sum, item) => sum + item.qty, 0);
}

function removeFromCart(name) {
  cart = cart.filter(item => item.name !== name);
  renderCart();
}

function checkoutCart() {
  alert('Checkout not implemented. Cart: ' + JSON.stringify(cart));
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.mini-add-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const card = btn.closest('.product-card');
      const name = card.querySelector('.product-title').textContent;
      const price = card.querySelector('.product-price').textContent.replace(/[^ -]/g, "").trim();
      const image = card.querySelector('.product-image').src;
      addToCart({name, price, image});
    });
  });
}); 