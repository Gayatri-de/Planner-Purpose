const prices = { "The Weekly Edit": 699, "Notes to Self": 549, "The Everyday Diary": 599, "Grow at Your Own Pace": 749 };
let cart = JSON.parse(localStorage.getItem('planner-purpose-cart') || '{}');

const cartEl = document.querySelector('#cart');
const overlay = document.querySelector('#overlay');
const cartItems = document.querySelector('#cartItems');
const checkoutDialog = document.querySelector('#checkoutDialog');

function money(amount) { return `₹${amount.toLocaleString('en-IN')}`; }
function countItems() { return Object.values(cart).reduce((total, quantity) => total + quantity, 0); }
function totalPrice() { return Object.entries(cart).reduce((total, [product, quantity]) => total + prices[product] * quantity, 0); }
function saveCart() { localStorage.setItem('planner-purpose-cart', JSON.stringify(cart)); }

function renderCart() {
  const count = countItems();
  document.querySelector('#bagCount').textContent = count;
  document.querySelector('#subtotal').textContent = money(totalPrice());
  cartItems.innerHTML = count
    ? Object.entries(cart).map(([product, quantity]) => `<div class="cart-item"><div><strong>${product}</strong><br><small>${money(prices[product])}</small><div class="cart-item-actions"><div class="quantity-control"><button aria-label="Remove one ${product}" data-action="decrease" data-product="${product}">−</button><span>${quantity}</span><button aria-label="Add one ${product}" data-action="increase" data-product="${product}">+</button></div><button data-action="remove" data-product="${product}">Remove</button></div></div><strong>${money(prices[product] * quantity)}</strong></div>`).join('')
    : '<p>Your bag is feeling a little empty.</p>';
  cartItems.querySelectorAll('button').forEach(button => button.addEventListener('click', () => updateItem(button.dataset.product, button.dataset.action)));
  saveCart();
}

function updateItem(product, action) {
  if (action === 'increase') cart[product] = (cart[product] || 0) + 1;
  if (action === 'decrease') cart[product] -= 1;
  if (action === 'remove' || cart[product] <= 0) delete cart[product];
  renderCart();
}
function openCart() { cartEl.classList.add('open'); overlay.classList.add('show'); cartEl.setAttribute('aria-hidden', 'false'); }
function closeCart() { cartEl.classList.remove('open'); overlay.classList.remove('show'); cartEl.setAttribute('aria-hidden', 'true'); }

document.querySelectorAll('.quick-add').forEach(button => button.addEventListener('click', () => { updateItem(button.dataset.product, 'increase'); openCart(); }));
document.querySelector('#bagButton').onclick = openCart;
document.querySelector('#closeCart').onclick = closeCart;
overlay.onclick = closeCart;

document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
  document.querySelector('.filter.active').classList.remove('active');
  button.classList.add('active');
  document.querySelectorAll('.product').forEach(product => product.classList.toggle('hidden', button.dataset.filter !== 'all' && product.dataset.kind !== button.dataset.filter));
}));

document.querySelector('#newsletterForm').addEventListener('submit', event => {
  event.preventDefault();
  document.querySelector('#formMessage').textContent = 'You’re on the list — welcome in.';
  event.target.reset();
});

document.querySelector('.cart-bottom .button').addEventListener('click', () => {
  if (!countItems()) { cartItems.innerHTML = '<p>Add a planner, diary or journal before checking out.</p>'; return; }
  closeCart();
  document.querySelector('#checkoutSummary').textContent = `${countItems()} item${countItems() === 1 ? '' : 's'} · ${money(totalPrice())}`;
  checkoutDialog.showModal();
});
document.querySelector('#closeCheckout').onclick = () => checkoutDialog.close();
checkoutDialog.addEventListener('click', event => { if (event.target === checkoutDialog) checkoutDialog.close(); });

document.querySelector('#checkoutForm').addEventListener('submit', event => {
  event.preventDefault();
  const name = new FormData(event.target).get('name').split(' ')[0];
  document.querySelector('#checkoutContent').innerHTML = `<div class="order-success"><p class="eyebrow">Order received</p><h2>Thank you, ${name}!</h2><p>Your order has been saved for this demo. In a live store, this is where payment and delivery confirmation would happen.</p><button class="button button-dark" id="finishOrder">Keep browsing <span>→</span></button></div>`;
  cart = {}; saveCart(); renderCart();
  document.querySelector('#finishOrder').onclick = () => { window.location.hash = 'shop'; window.location.reload(); };
});

renderCart();
