const products = [
  { name: 'The Sunday harvest box', seller: 'Maya from Green Row', rating: '4.9', price: '48.00', category: 'Fresh produce', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=700&q=85', tag: 'Picked today' },
  { name: 'Stone-ground sourdough', seller: 'Arjun’s kitchen', rating: '5.0', price: '12.50', category: 'Pantry staples', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=85', tag: 'Baked this morning' },
  { name: 'Hand-thrown breakfast bowl', seller: 'Clay by Noor', rating: '4.8', price: '32.00', category: 'Handmade', image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=700&q=85', tag: 'One of one' },
  { name: 'Wildflower honey, 250g', seller: 'The Bee Collective', rating: '4.9', price: '18.00', category: 'Pantry staples', image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=700&q=85', tag: 'Local favourite' }
];

const productGrid = document.querySelector('#productGrid');
const modal = document.querySelector('#modalBackdrop');
const toast = document.querySelector('#toast');
let selectedProduct = products[0];

function renderProducts(items = products) {
  productGrid.innerHTML = items.map((product, index) => `<article class="product-card" style="--delay:${index * 80}ms"><button class="product-image" data-product="${products.indexOf(product)}"><img src="${product.image}" alt="${product.name}"><span class="product-tag">${product.tag}</span><span class="save-button" aria-label="Save ${product.name}"><i data-lucide="heart"></i></span></button><div class="product-info"><div class="product-meta"><span>${product.category}</span><span class="rating">★ ${product.rating}</span></div><h3>${product.name}</h3><p>${product.seller} <i data-lucide="badge-check"></i></p><div class="product-bottom"><strong>${product.price} <small>SHARP</small></strong><button class="buy-button" data-product="${products.indexOf(product)}">View item <i data-lucide="arrow-up-right"></i></button></div></div></article>`).join('');
  lucide.createIcons();
  document.querySelectorAll('[data-product]').forEach(button => button.addEventListener('click', event => { event.stopPropagation(); openCheckout(products[Number(button.dataset.product)]); }));
}

function openCheckout(product) {
  selectedProduct = product;
  document.querySelector('#checkoutContent').hidden = false;
  document.querySelector('#successContent').hidden = true;
  document.querySelector('#confirmButton').disabled = true;
  document.querySelector('#proofInput').value = '';
  document.querySelector('.upload-button').classList.remove('uploaded');
  document.querySelector('.upload-button').lastChild.textContent = 'Choose photo';
  document.querySelector('#checkoutImage').src = product.image;
  document.querySelector('#checkoutImage').alt = product.name;
  document.querySelector('#checkoutName').textContent = product.name;
  document.querySelector('#checkoutSeller').textContent = `${product.seller} · eKYC verified`;
  document.querySelector('#checkoutPrice').textContent = `${product.price} SHARP`;
  document.querySelector('#checkoutAmount').textContent = `${product.price} SHARP`;
  modal.hidden = false;
  document.body.classList.add('modal-open');
  lucide.createIcons();
}
function closeCheckout() { modal.hidden = true; document.body.classList.remove('modal-open'); }
function showToast(message) { toast.textContent = message; toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 2800); }

renderProducts();
document.querySelector('#closeModal').addEventListener('click', closeCheckout);
modal.addEventListener('click', event => { if (event.target === modal) closeCheckout(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeCheckout(); });
document.querySelector('#listButton').addEventListener('click', () => showToast('Seller onboarding opens soon. eKYC keeps every listing accountable.'));
document.querySelector('#copyWallet').addEventListener('click', () => { navigator.clipboard?.writeText('0x7a4F29bA88cE0d7f9c21'); showToast('Wallet address copied.'); });
document.querySelector('#proofInput').addEventListener('change', event => { if (event.target.files[0]) { document.querySelector('.upload-button').classList.add('uploaded'); document.querySelector('.upload-button').lastChild.textContent = 'Photo attached'; document.querySelector('#confirmButton').disabled = false; } });
document.querySelector('#confirmButton').addEventListener('click', () => { document.querySelector('#checkoutContent').hidden = true; document.querySelector('#successContent').hidden = false; document.querySelector('#successItem').textContent = selectedProduct.name; lucide.createIcons(); });
document.querySelector('#doneButton').addEventListener('click', () => { closeCheckout(); showToast('Deal submitted. You can follow its status from your profile.'); });
document.querySelectorAll('.category').forEach(button => button.addEventListener('click', () => { document.querySelectorAll('.category').forEach(item => item.classList.remove('active')); button.classList.add('active'); const category = button.textContent.trim().split(' ')[0]; renderProducts(category === 'All' ? products : products.filter(product => product.category.toLowerCase().startsWith(category.toLowerCase()))); }));
