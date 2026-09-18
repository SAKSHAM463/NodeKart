<<<<<<< Updated upstream
const INITIAL_PRODUCTS = [
=======
const products = [
>>>>>>> Stashed changes
  { id:'electric-guitar', name:'Fender Player II Stratocaster Electric Guitar', seller:'Saksham Kumar', rating:'4.9', price:34500, category:'Collectibles', delivery:'Arrives by 30 Aug', image:'https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?auto=format&fit=crop&w=900&q=85', tag:'Top rated', blockchain:true },
  { id:'iphone', name:'iPhone 15 · 128GB', seller:'Arjun Mehta', rating:'4.8', price:42500, category:'Electronics', delivery:'Arrives by 29 Aug', image:'https://images.unsplash.com/photo-1592286927505-2fd0dcb29f2f?auto=format&fit=crop&w=900&q=85', tag:'Popular', blockchain:true },
  { id:'headphones', name:'WH-1000XM5 Headphones', seller:'Mira Kapoor', rating:'4.9', price:21800, category:'Electronics', delivery:'Arrives by 30 Aug', image:'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=900&q=85', tag:'Top rated', blockchain:true },
  { id:'camera', name:'Fujifilm X100V Camera', seller:'Rohan Studio', rating:'4.7', price:89500, category:'Collectibles', delivery:'Arrives by 2 Sep', image:'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=85', tag:'Rare find', blockchain:true },
  { id:'chair', name:'Teak Lounge Chair', seller:'The Woven Room', rating:'4.9', price:12400, category:'Home', delivery:'Arrives by 31 Aug', image:'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=900&q=85', tag:'Handmade', blockchain:false },
  { id:'sneakers', name:'New Balance 990v5', seller:'Kicks by Dev', rating:'4.8', price:9800, category:'Fashion', delivery:'Arrives by 28 Aug', image:'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=85', tag:'Verified pair', blockchain:true },
  { id:'kindle', name:'Kindle Paperwhite 11th Gen', seller:'Ananya Reads', rating:'5.0', price:7200, category:'Books', delivery:'Arrives by 29 Aug', image:'https://images.unsplash.com/photo-1592496001020-d31bd830651f?auto=format&fit=crop&w=900&q=85', tag:'Like new', blockchain:false },
  { id:'watch', name:'Seiko 5 Sports Watch', seller:'Timekeeper Co.', rating:'4.6', price:15600, category:'Collectibles', delivery:'Arrives by 3 Sep', image:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85', tag:'Collector', blockchain:true },
  { id:'lamp', name:'Rattan Table Lamp', seller:'The Woven Room', rating:'4.9', price:3400, category:'Home', delivery:'Arrives by 30 Aug', image:'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85', tag:'Small batch', blockchain:false }
];

<<<<<<< Updated upstream
const INITIAL_PROFILE = {
  name: 'Saksham Kumar',
  avatar: 'SK',
  memberSince: 'August 2025',
  walletAddress: '0x7a4F923b9d0C1e889F12Aa45B48cE91079c29c21',
  walletShort: '0x7a4F...9c21',
  email: 'saksham.kumar@nodekart.eth',
  phone: '+91 98765 43210',
  sharpBalance: 12450,
  ordersCompleted: 12,
  reputation: '4.91 ★'
};

function loadProducts() {
  try {
    const raw = localStorage.getItem('nodekart_products_db');
    if (!raw) {
      localStorage.setItem('nodekart_products_db', JSON.stringify(INITIAL_PRODUCTS));
      return INITIAL_PRODUCTS;
    }
    const list = JSON.parse(raw);
    const hasGuitar = list.some(p => p.id === 'electric-guitar' || p.name.includes('Guitar'));
    if (!hasGuitar) {
      list.unshift(INITIAL_PRODUCTS[0]);
      localStorage.setItem('nodekart_products_db', JSON.stringify(list));
    }
    return list;
  } catch(e) {
    return INITIAL_PRODUCTS;
  }
}

function saveProducts(list) {
  try {
    localStorage.setItem('nodekart_products_db', JSON.stringify(list));
  } catch(e) {}
}

function loadProfile() {
  try {
    const raw = localStorage.getItem('nodekart_user_profile');
    if (!raw) {
      localStorage.setItem('nodekart_user_profile', JSON.stringify(INITIAL_PROFILE));
      return INITIAL_PROFILE;
    }
    return { ...INITIAL_PROFILE, ...JSON.parse(raw) };
  } catch(e) {
    return INITIAL_PROFILE;
  }
}

function saveProfile(prof) {
  try {
    localStorage.setItem('nodekart_user_profile', JSON.stringify(prof));
  } catch(e) {}
}

let products = loadProducts();
let userProfile = loadProfile();

const state = {
  page: 'home',
  selected: products[0] || INITIAL_PRODUCTS[0],
  search: '',
  category: 'All',
=======
const CATEGORIES = [
  { id:'All', name:'All Categories', icon:'layout-grid', desc:'Browse all available marketplace items' },
  { id:'Electronics', name:'Electronics', icon:'smartphone', desc:'Phones, audio, chargers & digital gear' },
  { id:'Collectibles', name:'Collectibles', icon:'sparkles', desc:'Vintage cameras, watches & rare instruments' },
  { id:'Home', name:'Home & Living', icon:'armchair', desc:'Artisan furniture, lighting & ceramics' },
  { id:'Fashion', name:'Fashion', icon:'footprints', desc:'Sneakers, verified apparel & essentials' },
  { id:'Books', name:'Books & Media', icon:'book-open', desc:'E-readers, print literature & editions' }
];

const catCount = c => c === 'All' ? products.length : products.filter(p => p.category === c).length;

const state = {
  page: 'home',
  selected: products[0],
  search: '',
  category: 'All',
  categoryDropdownOpen: false,
  sort: 'recommended',
  sortOpen: false,
  mobileMenuOpen: false,
  quantity: 1,
>>>>>>> Stashed changes
  cart: [],
  shipped: false,
  delivered: false,
  settled: false,
  chats: {
<<<<<<< Updated upstream
    'Arjun Mehta': [
      { from: 'seller', text: 'Hi! Thanks for your interest in the iPhone 15. Let me know if you have any questions.', time: '10:30 AM', read: true },
      { from: 'buyer', text: 'Is the battery health still above 90%?', time: '10:32 AM', read: true },
      { from: 'seller', text: 'Yes! Battery health is at 94%. Happy to share a screenshot.', time: '10:33 AM', read: false }
    ],
    'Mira Kapoor': [
      { from: 'seller', text: 'Welcome! The WH-1000XM5 headphones are in mint condition. Feel free to ask anything!', time: 'Yesterday', read: false }
    ],
    'Saksham Kumar': [
      { from: 'seller', text: 'Hello! The Fender Player II Stratocaster is in mint condition with original case and certificate.', time: '9:15 AM', read: false }
    ]
  },
  activeChat: null,
  chatOpen: false,
  editProfileOpen: false
};

const app = document.querySelector('#app');
=======
    'Saksham Kumar': [
      { from:'seller', text:'Hey! The Fender Player II Strat is authenticated and in mint condition. Let me know if you want video verification!', time:'Yesterday', read:false }
    ],
    'Arjun Mehta': [
      { from:'seller', text:'Hi! Thanks for your interest in the iPhone 15. Let me know if you have any questions.', time:'10:30 AM', read:true },
      { from:'buyer', text:'Is the battery health still above 90%?', time:'10:32 AM', read:true },
      { from:'seller', text:'Yes! Battery health is at 94%. Happy to share a screenshot.', time:'10:33 AM', read:false }
    ],
    'Mira Kapoor': [
      { from:'seller', text:'Welcome! The WH-1000XM5 headphones are in mint condition. Feel free to ask anything!', time:'Yesterday', read:false }
    ]
  },
  activeChat: null,
  chatOpen: false
};

const getAppEl = () => document.querySelector('#app') || document.querySelector('#root');
>>>>>>> Stashed changes
const money = n => `${n.toLocaleString('en-IN')} SHARP`;
const inr = n => `≈ ₹${Math.round(n * 1.9).toLocaleString('en-IN')}`;
const I = n => `<i data-lucide="${n}"></i>`;

<<<<<<< Updated upstream
function icons() {
  if (window.lucide) lucide.createIcons();
}
=======
function icons() { window.lucide && lucide.createIcons(); }
>>>>>>> Stashed changes

function note(m) {
  const t = document.querySelector('#toast');
  if (!t) return;
  t.textContent = m;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2600);
}

function nav(p, product) {
  state.page = p;
  if (product) state.selected = product;
<<<<<<< Updated upstream
=======
  state.categoryDropdownOpen = false;
  state.sortOpen = false;
  state.mobileMenuOpen = false;
  state.quantity = 1;
>>>>>>> Stashed changes
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

<<<<<<< Updated upstream
function header() {
  const unread = Object.values(state.chats).some(c => c.some(m => m.from === 'seller' && !m.read));
  return `
    <header class="site-header">
      <a class="brand" data-nav="home"><span class="brand-mark">N</span>node<span class="brand-dot">.</span>kart</a>
      <nav>
        <a data-nav="market" class="${['market','product'].includes(state.page)?'active':''}">Marketplace</a>
        <a data-nav="market">Categories</a>
        <a data-nav="seller">Sell</a>
        <a data-nav="orders" class="${state.page==='orders'?'active':''}">Orders</a>
        <a data-nav="rewards" class="${state.page==='rewards'?'active':''}">Rewards</a>
        <a data-nav="referrals">Referrals</a>
      </nav>
      <div class="header-right">
        <button class="balance-chip" data-nav="wallet"><span class="sharp-dot">S</span><b>${userProfile.sharpBalance.toLocaleString('en-IN')}</b><small>SHARP</small></button>
        <button class="wallet-btn" data-action="wallet">${userProfile.walletShort}</button>
        <button class="msg-btn" data-nav="messages">${I('message-circle')}${unread ? '<span class="unread-dot"></span>' : ''}</button>
        <button class="profile-mini" data-nav="profile">${userProfile.avatar}</button>
        <button class="mobile-menu" data-action="menu">${I('menu')}</button>
      </div>
    </header>
  `;
}

function foot() {
  return `
    <footer>
      <span class="brand"><span class="brand-mark">N</span>node<span class="brand-dot">.</span>kart</span>
      <span>Buy directly. Pay securely. Own your transaction.</span>
      <span class="mono">SHARP / PERSISTENT DATA LAYER</span>
    </footer>
  `;
}

function card(p) {
  return `
    <article class="product-card">
      <button class="product-photo" data-product="${p.id}">
        <img src="${p.image}" alt="${p.name}">
        <span class="product-tag">${p.tag}</span>
        <span class="heart">${I('heart')}</span>
      </button>
      <div class="product-copy">
        <div class="product-meta">
          <span>${p.category}</span>
          <span class="rating">★ ${p.rating}</span>
        </div>
        <h3>${p.name}</h3>
        <p>${p.seller} ${I('badge-check')}</p>
        <div class="product-bottom">
          <div>
            <strong>${money(p.price)}</strong>
            <small>${inr(p.price)}</small>
          </div>
          <button class="text-button" data-product="${p.id}">View item ${I('arrow-up-right')}</button>
        </div>
        <div class="badges">
          <span>${I('badge-check')} Verified seller</span>
          ${p.blockchain ? `<span>${I('shield-check')} Proof available</span>` : ''}
        </div>
      </div>
    </article>
  `;
}

function home() {
  return `
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow"><span class="live-dot"></span> The marketplace with a proof layer</p>
        <h1>Buy directly.<br><em>Pay securely.</em><br>Own your transaction.</h1>
        <p class="hero-text">A better way to buy from real people. SHARP payments stay protected in escrow until the exchange is complete.</p>
        <div class="hero-actions">
          <button class="primary-button" data-nav="market">Explore marketplace ${I('arrow-up-right')}</button>
          <button class="secondary-button" data-action="wallet">${I('wallet-cards')} Connected: ${userProfile.walletShort}</button>
        </div>
        <div class="hero-proof">
          ${I('shield-check')}
          <div><b>Protected by escrow</b><small>Transparent when it matters.</small></div>
        </div>
      </div>
      <div class="hero-visual">
        <div class="hero-image">
          <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=90" alt="Online order parcel">
          <div class="floating-order">
            ${I('check-circle-2')}
            <div><small>Order secured</small><b>42,500 SHARP</b></div>
            <span>Escrow</span>
          </div>
        </div>
        <div class="hero-stat stat-one"><b>98%</b><span>successful<br>deliveries</span></div>
        <div class="hero-stat stat-two">● <span>Settlement<br>you can verify</span></div>
      </div>
    </section>

    <section class="flow-section">
      <span class="section-kicker">How a NodeKart order works</span>
      <div class="flow-line">
        ${['Buy','Pay with SHARP','Escrow','Delivery','Settlement','Cashback'].map((x,i)=>`
          <div class="flow-step">
            <span>0${i+1}</span>
            <b>${x}</b>
            ${i<5 ? I('arrow-right') : ''}
          </div>
        `).join('')}
      </div>
    </section>

    <section class="value-section">
      <div class="section-title">
        <p class="eyebrow">Commerce, with less uncertainty</p>
        <h2>The useful parts of<br><em>blockchain, quietly.</em></h2>
      </div>
      <div class="value-grid">
        <div class="value-card lime">
          ${I('lock-keyhole')}
          <h3>Secure escrow</h3>
          <p>Funds remain protected until predefined delivery conditions are met.</p>
          <a data-nav="orders">See the journey ${I('arrow-up-right')}</a>
        </div>
        <div class="value-card dark">
          ${I('scan-eye')}
          <h3>Transparent transactions</h3>
          <p>Important payment, escrow and settlement events stay verifiable.</p>
          <a data-action="proof">View a proof ${I('arrow-up-right')}</a>
        </div>
        <div class="value-card">
          ${I('sparkles')}
          <h3>Earn SHARP</h3>
          <p>Get cashback from completed orders and earn through referrals.</p>
          <a data-nav="rewards">Explore rewards ${I('arrow-up-right')}</a>
        </div>
      </div>
    </section>

    <section class="market-preview">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Fresh from the community</p>
          <h2>Good things, <em>well sourced.</em></h2>
        </div>
        <button class="outline-button" data-nav="market">View all products ${I('arrow-up-right')}</button>
      </div>
      <div class="product-grid">${products.slice(0, 4).map(card).join('')}</div>
    </section>
  `;
}

function market() {
  const list = products.filter(p => 
    (state.category === 'All' || p.category === state.category) &&
    (p.name.toLowerCase().includes(state.search.toLowerCase()) || (p.description && p.description.toLowerCase().includes(state.search.toLowerCase())))
  );

  return `
    <section class="page-heading compact">
      <div>
        <p class="eyebrow">Community marketplace</p>
        <h1>Find something <em>worth keeping.</em></h1>
        <p>Real products from verified people, settled with protected SHARP payments.</p>
      </div>
      <button class="outline-button" data-nav="list">${I('plus')} Sell an item</button>
    </section>

    <section class="market-tools">
      <label class="search-box">
        ${I('search')}
        <input id="search" placeholder="Search products (e.g. guitar, iphone)..." value="${state.search}">
      </label>
      <div class="tool-row">
        <div class="filter-tabs">
          ${['All','Electronics','Fashion','Home','Books','Collectibles'].map(c=>`
            <button data-cat="${c}" class="${state.category===c?'active':''}">${c}</button>
          `).join('')}
        </div>
        <button class="sort-button">Recommended ${I('chevron-down')}</button>
      </div>
    </section>

    <section class="market-results">
      <div class="result-top">
        <span>${list.length} live listings in persistent database</span>
        <span>${I('sliders-horizontal')} Verified provenance</span>
      </div>
      <div class="product-grid">
        ${list.length ? list.map(card).join('') : `
          <div class="empty-state">
            ${I('search-x')}
            <h3>No products found</h3>
            <p>Try another category or search term.</p>
            <button class="secondary-button" data-action="reset">Clear filters</button>
          </div>
        `}
      </div>
    </section>
  `;
}

function product() {
  const p = state.selected || products[0];
  return `
    <section class="product-detail">
      <button class="back-button" data-nav="market">${I('arrow-left')} Back to marketplace</button>
      <div class="product-layout">
        <div class="detail-gallery">
          <img src="${p.image}" alt="${p.name}">
          <span>${p.tag}</span>
        </div>
        <div class="detail-info">
          <div class="product-meta">
            <span>${p.category}</span>
            <span class="rating">★ ${p.rating} · Verified</span>
          </div>
          <h1>${p.name}</h1>
          <p class="seller-line">Sold by <b>${p.seller}</b> ${I('badge-check')} <span>Verified Merchant</span></p>
          <button class="chat-seller-btn" data-action="open-chat" data-seller="${p.seller}">${I('message-circle')} Chat with ${p.seller}</button>
          
          <div class="detail-price">
            <b>${money(p.price)}</b>
            <span>${inr(p.price)}</span>
          </div>

          <div class="delivery-box">
            ${I('truck')}
            <div>
              <b>${p.delivery}</b>
              <small>Free trackable shipping · Escrow insured</small>
            </div>
          </div>

          ${p.description ? `<p style="font-size: 13px; line-height: 1.6; color: var(--muted); margin: 16px 0;">${p.description}</p>` : ''}

          <div class="buy-row">
            <button class="primary-button" data-action="buy">Buy now ${I('arrow-up-right')}</button>
            <button class="icon-square" data-action="cart">${I('shopping-bag')}</button>
          </div>

          <div class="trust-panel">
            <h3>Trust & verification</h3>
            <div class="trust-grid">
              <span>${I('wallet')}<b>Wallet verified</b></span>
              <span>${I('badge-check')}<b>Dispute-free record</b></span>
              <span>${I('file-check-2')}<b>Authenticity proof</b></span>
              <span>${I('lock-keyhole')}<b>Escrow protected</b></span>
              <span>${I('route')}<b>Trackable shipping</b></span>
            </div>
          </div>

          <button class="proof-link" data-action="proof">${I('scan-eye')} View blockchain proof</button>
        </div>
      </div>
    </section>
  `;
}

function cart() {
  const p = state.selected || products[0];
  return `
    <section class="page-heading compact">
      <div>
        <p class="eyebrow">Your basket</p>
        <h1>Ready when <em>you are.</em></h1>
      </div>
      <span class="cart-count">1 item</span>
    </section>

    <section class="cart-layout">
      <div class="cart-items">
        <div class="cart-item">
          <img src="${p.image}" alt="${p.name}">
          <div>
            <h3>${p.name}</h3>
            <p>${p.seller}</p>
            <strong>${money(p.price)}</strong>
          </div>
          <div class="quantity"><button>−</button><span>1</span><button>+</button></div>
        </div>
        <div class="escrow-note">
          ${I('lock-keyhole')}
          <div>
            <b>Escrow protected</b>
            <span>Funds are only released after delivery is confirmed.</span>
          </div>
        </div>
      </div>

      <aside class="summary-card">
        <h3>Order summary</h3>
        <div><span>Subtotal</span><b>${money(p.price)}</b></div>
        <div><span>Shipping</span><b class="free">Free</b></div>
        <div><span>Expected cashback</span><b class="cashback">+${money(Math.round(p.price * 0.05))}</b></div>
        <hr>
        <div class="summary-total"><span>Total</span><b>${money(p.price)}</b></div>
        <button class="primary-button full" data-nav="checkout">Proceed to checkout ${I('arrow-up-right')}</button>
      </aside>
    </section>
  `;
}

function checkout() {
  const p = state.selected || products[0];
  return `
    <section class="checkout-page">
      <button class="back-button" data-nav="product">${I('arrow-left')} Back to product</button>
      <div class="checkout-grid">
        <div>
          <div class="page-heading">
            <p class="eyebrow">Secure checkout</p>
            <h1>Almost <em>yours.</em></h1>
          </div>
          <div class="form-section">
            <h2>Delivery details</h2>
            <div class="form-grid">
              <label>Full name<input value="${userProfile.name}"></label>
              <label>Phone number<input value="${userProfile.phone}"></label>
              <label class="wide">Address<input value="42, 5th Cross, Indiranagar"></label>
              <label>City<input value="Bengaluru"></label>
              <label>State<input value="Karnataka"></label>
              <label>PIN code<input value="560038"></label>
            </div>
          </div>
          <div class="form-section payment-section">
            <h2>Payment</h2>
            <div class="balance-row">
              <span>SHARP balance</span>
              <b>${userProfile.sharpBalance.toLocaleString('en-IN')} SHARP</b>
            </div>
            <div class="connected">
              ${I('check-circle-2')}
              <div>
                <b>Wallet connected</b>
                <small>${userProfile.walletShort} · NodeKart Network</small>
              </div>
              <button data-action="wallet">Change</button>
            </div>
            <div class="escrow-card">
              ${I('lock-keyhole')}
              <div>
                <b>Escrow protection</b>
                <p>Your ${money(p.price)} payment will be locked until the agreed delivery condition is satisfied.</p>
                <span>${I('shield-check')} Transparent settlement · Zero platform fees</span>
              </div>
            </div>
            <button class="primary-button full" data-action="pay">Confirm & lock payment ${I('arrow-up-right')}</button>
          </div>
        </div>

        <aside class="summary-card checkout-summary">
          <h3>Order summary</h3>
          <div class="summary-product">
            <img src="${p.image}" alt="">
            <span>${p.name}<small>${p.seller}</small></span>
            <b>${money(p.price)}</b>
          </div>
          <div><span>Subtotal</span><b>${money(p.price)}</b></div>
          <div><span>Shipping</span><b class="free">Free</b></div>
          <div><span>Cashback after delivery</span><b class="cashback">+${money(Math.round(p.price * 0.05))}</b></div>
          <hr>
          <div class="summary-total"><span>Total</span><b>${money(p.price)}</b></div>
        </aside>
      </div>
    </section>
  `;
=======
function selectCategory(cat) {
  state.category = cat;
  state.categoryDropdownOpen = false;
  state.mobileMenuOpen = false;
  state.sortOpen = false;
  state.page = 'market';
  render();
  note(`Category: ${cat === 'All' ? 'All items' : cat} (${catCount(cat)} found)`);
  const tools = document.querySelector('.market-tools');
  if (tools) tools.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function header() {
  const isMarket = ['market','product'].includes(state.page);
  const unread = Object.values(state.chats).some(c => c.some(m => m.from === 'seller' && !m.read));
  return `<header class="site-header">
    <a class="brand" data-nav="home"><span class="brand-mark">N</span>node<span class="brand-dot">.</span>kart</a>
    <nav>
      <a data-nav="market" class="${isMarket && state.category === 'All' ? 'active' : ''}">Marketplace</a>
      <div class="nav-dropdown-wrap">
        <button class="nav-cat-btn ${state.categoryDropdownOpen ? 'open' : ''} ${state.category !== 'All' ? 'filtered' : ''}" data-action="toggle-categories" aria-haspopup="true" aria-expanded="${state.categoryDropdownOpen}">
          <span>Categories</span>
          ${state.category !== 'All' ? `<span class="active-cat-badge">${state.category}</span>` : ''}
          <i data-lucide="chevron-down" class="dropdown-arrow"></i>
        </button>
        ${state.categoryDropdownOpen ? `
          <div class="categories-dropdown animate-rise">
            <div class="cat-drop-header">
              <span class="mono">EXPLORE CATEGORIES</span>
              <small>${products.length} products total</small>
            </div>
            <div class="cat-drop-grid">
              ${CATEGORIES.map(c => `
                <button class="cat-drop-item ${state.category === c.id ? 'selected' : ''}" data-select-cat="${c.id}">
                  <span class="cat-drop-icon">${I(c.icon)}</span>
                  <div class="cat-drop-info">
                    <b>${c.name}</b>
                    <small>${c.desc}</small>
                  </div>
                  <span class="cat-drop-count">${catCount(c.id)}</span>
                </button>
              `).join('')}
            </div>
            <div class="cat-drop-footer">
              <button class="cat-reset-btn" data-select-cat="All">View all items</button>
              <button class="cat-browse-all" data-nav="market">Go to marketplace ${I('arrow-up-right')}</button>
            </div>
          </div>
        ` : ''}
      </div>
      <a data-nav="seller" class="${state.page === 'seller' ? 'active' : ''}">Sell</a>
      <a data-nav="orders" class="${state.page === 'orders' ? 'active' : ''}">Orders</a>
      <a data-nav="rewards" class="${state.page === 'rewards' ? 'active' : ''}">Rewards</a>
      <a data-nav="referrals" class="${state.page === 'referrals' ? 'active' : ''}">Referrals</a>
    </nav>
    <div class="header-right">
      <button class="balance-chip" data-nav="wallet"><span class="sharp-dot">S</span><b>12,450</b><small>SHARP</small></button>
      <button class="wallet-btn" data-action="wallet">Connect wallet</button>
      <button class="msg-btn" data-nav="messages" title="Messages">${I('message-circle')}${unread ? '<span class="unread-dot"></span>' : ''}</button>
      <button class="profile-mini" data-nav="profile" title="Saksham Profile">SK</button>
      <button class="mobile-menu" data-action="menu" aria-label="Toggle menu">${I('menu')}</button>
    </div>
  </header>
  ${state.mobileMenuOpen ? `
    <div class="mobile-drawer-overlay" data-action="close-menu"></div>
    <div class="mobile-drawer">
      <div class="mobile-drawer-header">
        <a class="brand" data-nav="home"><span class="brand-mark">N</span>node<span class="brand-dot">.</span>kart</a>
        <button class="chat-close" data-action="close-menu">${I('x')}</button>
      </div>
      <div class="mobile-drawer-links">
        <button data-nav="home" class="${state.page === 'home' ? 'active' : ''}">Home</button>
        <button data-nav="market" class="${state.page === 'market' && state.category === 'All' ? 'active' : ''}">Marketplace (All items)</button>
        <div class="mobile-drawer-section-title">Browse by Category</div>
        <div class="mobile-cat-grid">
          ${CATEGORIES.map(c => `
            <button class="mobile-cat-btn ${state.category === c.id ? 'active' : ''}" data-select-cat="${c.id}">
              ${I(c.icon)} <span>${c.id} (${catCount(c.id)})</span>
            </button>
          `).join('')}
        </div>
        <button data-nav="seller" class="${state.page === 'seller' ? 'active' : ''}">Sell an item</button>
        <button data-nav="orders" class="${state.page === 'orders' ? 'active' : ''}">Orders & Escrow</button>
        <button data-nav="wallet" class="${state.page === 'wallet' ? 'active' : ''}">Wallet (12,450 SHARP)</button>
        <button data-nav="rewards" class="${state.page === 'rewards' ? 'active' : ''}">Rewards & Cashback</button>
        <button data-nav="referrals" class="${state.page === 'referrals' ? 'active' : ''}">Referrals</button>
        <button data-nav="messages" class="${state.page === 'messages' ? 'active' : ''}">Messages</button>
        <button data-nav="profile" class="${state.page === 'profile' ? 'active' : ''}">Profile & Credentials</button>
      </div>
    </div>
  ` : ''}`;
}

function foot() {
  return `<footer><span class="brand"><span class="brand-mark">N</span>node<span class="brand-dot">.</span>kart</span><span>Buy directly. Pay securely. Own your transaction.</span><span class="mono">SHARP / DEMO NETWORK</span></footer>`;
}

function card(p) {
  return `<article class="product-card"><button class="product-photo" data-product="${p.id}"><img src="${p.image}" alt="${p.name}"><span class="product-tag">${p.tag}</span><span class="heart">${I('heart')}</span></button><div class="product-copy"><div class="product-meta"><span>${p.category}</span><span class="rating">★ ${p.rating}</span></div><h3>${p.name}</h3><p>${p.seller} ${I('badge-check')}</p><div class="product-bottom"><div><strong>${money(p.price)}</strong><small>${inr(p.price)}</small></div><button class="text-button" data-product="${p.id}">View item ${I('arrow-up-right')}</button></div><div class="badges"><span>${I('badge-check')} Verified seller</span>${p.blockchain?`<span>${I('shield-check')} Proof available</span>`:''}</div></div></article>`;
}

function home() {
  const previewProducts = state.category === 'All' ? products.slice(0, 4) : products.filter(p => p.category === state.category).slice(0, 4);
  return `<section class="hero"><div class="hero-copy"><p class="eyebrow"><span class="live-dot"></span> The marketplace with a proof layer</p><h1>Buy directly.<br><em>Pay securely.</em><br>Own your transaction.</h1><p class="hero-text">A better way to buy from real people. SHARP payments stay protected in escrow until the exchange is complete.</p><div class="hero-actions"><button class="primary-button" data-nav="market">Explore marketplace ${I('arrow-up-right')}</button><button class="secondary-button" data-action="wallet">${I('wallet-cards')} Connect wallet</button></div><div class="hero-proof">${I('shield-check')}<div><b>Protected by escrow</b><small>Transparent when it matters.</small></div></div></div><div class="hero-visual"><div class="hero-image"><img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=90" alt="A parcel ready for a trusted online order"><div class="floating-order">${I('check-circle-2')}<div><small>Order secured</small><b>42,500 SHARP</b></div><span>Escrow</span></div></div><div class="hero-stat stat-one"><b>98%</b><span>successful<br>deliveries</span></div><div class="hero-stat stat-two">● <span>Settlement<br>you can verify</span></div></div></section><section class="flow-section"><span class="section-kicker">How a NodeKart order works</span><div class="flow-line">${['Buy','Pay with SHARP','Escrow','Delivery','Settlement','Cashback'].map((x,i)=>`<div class="flow-step"><span>0${i+1}</span><b>${x}</b>${i<5?I('arrow-right'):''}</div>`).join('')}</div></section><section class="value-section"><div class="section-title"><p class="eyebrow">Commerce, with less uncertainty</p><h2>The useful parts of<br><em>blockchain, quietly.</em></h2></div><div class="value-grid"><div class="value-card lime">${I('lock-keyhole')}<h3>Secure escrow</h3><p>Funds remain protected until predefined delivery conditions are met.</p><a data-nav="orders">See the journey ${I('arrow-up-right')}</a></div><div class="value-card dark">${I('scan-eye')}<h3>Transparent transactions</h3><p>Important payment, escrow and settlement events stay verifiable.</p><a data-action="proof">View a proof ${I('arrow-up-right')}</a></div><div class="value-card">${I('sparkles')}<h3>Earn SHARP</h3><p>Get cashback from completed orders and earn through referrals.</p><a data-nav="rewards">Explore rewards ${I('arrow-up-right')}</a></div></div></section><section class="market-preview"><div class="section-heading"><div><p class="eyebrow">Fresh from the community</p><h2>Good things, <em>well sourced.</em></h2></div><button class="outline-button" data-nav="market">View all products ${I('arrow-up-right')}</button></div><div class="home-categories-wrap"><div class="home-category-pills">${CATEGORIES.map(c=>`<button class="home-cat-pill ${state.category===c.id?'active':''}" data-home-cat="${c.id}">${I(c.icon)} <span>${c.name}</span> <small>${catCount(c.id)}</small></button>`).join('')}</div></div><div class="product-grid">${previewProducts.map(card).join('')}</div></section>`;
}

function market() {
  let list = products.filter(p => (state.category === 'All' || p.category === state.category) && (
    p.name.toLowerCase().includes(state.search.toLowerCase()) ||
    p.seller.toLowerCase().includes(state.search.toLowerCase()) ||
    p.category.toLowerCase().includes(state.search.toLowerCase())
  ));

  if (state.sort === 'price-low') list = [...list].sort((a,b) => a.price - b.price);
  else if (state.sort === 'price-high') list = [...list].sort((a,b) => b.price - a.price);
  else if (state.sort === 'rating') list = [...list].sort((a,b) => parseFloat(b.rating) - parseFloat(a.rating));

  const sortLabels = {
    'recommended': 'Recommended',
    'price-low': 'Price: Low to High',
    'price-high': 'Price: High to Low',
    'rating': 'Highest Rated'
  };

  const sellerCount = new Set(list.map(p => p.seller)).size;

  return `<section class="page-heading compact">
    <div>
      <p class="eyebrow">Community marketplace</p>
      <h1>Find something <em>worth keeping.</em></h1>
      <p>Real products from verified people, settled with protected SHARP payments.</p>
    </div>
    <button class="outline-button" data-nav="list">${I('plus')} Sell an item</button>
  </section>
  <section class="market-tools">
    <label class="search-box">
      ${I('search')}
      <input id="search" placeholder="Search products, sellers, categories..." value="${state.search}">
      ${state.search ? `<button class="text-button" data-action="clear-search" style="padding:0 6px;color:var(--muted);font-size:16px" title="Clear search">×</button>` : ''}
    </label>
    <div class="tool-row">
      <div class="filter-tabs">
        ${CATEGORIES.map(c => `
          <button data-cat="${c.id}" class="${state.category === c.id ? 'active' : ''}">
            ${I(c.icon)}
            <span>${c.id === 'All' ? 'All Items' : c.id}</span>
            <span class="tab-count">${catCount(c.id)}</span>
          </button>
        `).join('')}
      </div>
      <div class="sort-wrap">
        <button class="sort-button" data-action="toggle-sort">
          <span>${sortLabels[state.sort] || 'Recommended'}</span>
          ${I('chevron-down')}
        </button>
        ${state.sortOpen ? `
          <div class="sort-menu">
            ${Object.entries(sortLabels).map(([k,v]) => `
              <button class="${state.sort === k ? 'active' : ''}" data-set-sort="${k}">${v}</button>
            `).join('')}
          </div>
        ` : ''}
      </div>
    </div>
  </section>
  <section class="market-results">
    <div class="result-top">
      <span>${list.length} product${list.length === 1 ? '' : 's'} ${sellerCount ? `from ${sellerCount} verified seller${sellerCount === 1 ? '' : 's'}` : ''}${state.category !== 'All' ? ` · in ${state.category}` : ''}</span>
      <span style="display:flex;align-items:center;gap:5px">${I('sliders-horizontal')} Curated for you</span>
    </div>
    <div class="product-grid">
      ${list.length ? list.map(card).join('') : `
        <div class="empty-state">
          ${I('search-x')}
          <h3>No products found</h3>
          <p>No listings match "${state.search || state.category}". Try selecting another category or clearing filters.</p>
          <button class="secondary-button" data-action="reset">Clear all filters</button>
        </div>
      `}
    </div>
  </section>`;
}

function product() {
  const p = state.selected;
  const qty = state.quantity || 1;
  const totalPrice = p.price * qty;
  return `<section class="product-detail"><button class="back-button" data-nav="market">${I('arrow-left')} Back to marketplace</button><div class="product-layout"><div class="detail-gallery"><img src="${p.image}" alt="${p.name}"><span>${p.tag}</span></div><div class="detail-info"><div class="product-meta"><span>${p.category}</span><span class="rating">★ ${p.rating} · 24 reviews</span></div><h1>${p.name}</h1><p class="seller-line">Sold by <b>${p.seller}</b> ${I('badge-check')} <span>Verified</span></p><button class="chat-seller-btn" data-action="open-chat" data-seller="${p.seller}">${I('message-circle')} Chat with ${p.seller}</button><div class="detail-price"><b>${money(totalPrice)}</b><span>${inr(totalPrice)}</span></div><div class="delivery-box">${I('truck')}<div><b>${p.delivery}</b><small>Free trackable shipping · Pune to your address</small></div></div><div class="buy-row"><div class="quantity"><button data-action="qty-dec">−</button><span>${qty}</span><button data-action="qty-inc">+</button></div><button class="primary-button" data-action="buy">Buy now ${I('arrow-up-right')}</button><button class="icon-square" data-action="cart" title="Add to basket">${I('shopping-bag')}</button></div><div class="trust-panel"><h3>Trust & verification</h3><div class="trust-grid"><span>${I('wallet')}<b>Wallet verified</b></span><span>${I('badge-check')}<b>127 verified transactions</b></span><span>${I('file-check-2')}<b>Authenticity record available</b></span><span>${I('lock-keyhole')}<b>Escrow protected</b></span><span>${I('route')}<b>Trackable shipping</b></span></div></div><button class="proof-link" data-action="proof">${I('scan-eye')} View blockchain proof</button></div></div></section><section class="protection-section"><div><p class="eyebrow">Transaction protection</p><h2>Your money stays<br><em>in your corner.</em></h2><p>Your SHARP payment is locked in escrow and released according to predefined transaction conditions.</p></div><div class="protection-track">${['Payment','Escrow locked','Seller ships','Delivery confirmed','Payment released','Cashback'].map((x,i)=>`<div class="track-item ${i?'':'done'}"><span>${i?String(i+1).padStart(2,'0'):I('check')}</span><b>${x}</b></div>`).join('')}</div></section>`;
}

function cart() {
  const p = state.selected;
  const qty = state.quantity || 1;
  const total = p.price * qty;
  return `<section class="page-heading compact"><div><p class="eyebrow">Your basket</p><h1>Ready when <em>you are.</em></h1></div><span class="cart-count">${qty} item${qty>1?'s':''}</span></section><section class="cart-layout"><div class="cart-items"><div class="cart-item"><img src="${p.image}" alt="${p.name}"><div><h3>${p.name}</h3><p>${p.seller}</p><strong>${money(total)}</strong></div><div class="quantity"><button data-action="qty-dec">−</button><span>${qty}</span><button data-action="qty-inc">+</button></div></div><div class="escrow-note">${I('lock-keyhole')}<div><b>Escrow protected</b><span>Funds are only released after delivery is confirmed.</span></div></div></div><aside class="summary-card"><h3>Order summary</h3><div><span>Subtotal</span><b>${money(total)}</b></div><div><span>Shipping</span><b class="free">Free</b></div><div><span>Expected cashback</span><b class="cashback">+${money(Math.round(total*.05))}</b></div><hr><div class="summary-total"><span>Total</span><b>${money(total)}</b></div><button class="primary-button full" data-nav="checkout">Proceed to checkout ${I('arrow-up-right')}</button></aside></section>`;
}

function checkout() {
  const p = state.selected;
  const qty = state.quantity || 1;
  const total = p.price * qty;
  return `<section class="checkout-page"><button class="back-button" data-nav="product">${I('arrow-left')} Back to product</button><div class="checkout-grid"><div><div class="page-heading"><p class="eyebrow">Secure checkout</p><h1>Almost <em>yours.</em></h1></div><div class="form-section"><h2>Delivery details</h2><div class="form-grid"><label>Full name<input id="checkout-name" value="Saksham Kumar"></label><label>Phone number<input id="checkout-phone" value="+91 98765 43210"></label><label class="wide">Address<input value="42, 5th Cross, Indiranagar"></label><label>City<input value="Bengaluru"></label><label>State<input value="Karnataka"></label><label>PIN code<input value="560038"></label></div></div><div class="form-section payment-section"><h2>Payment</h2><div class="balance-row"><span>SHARP balance</span><b>12,450 SHARP</b></div><div class="connected">${I('check-circle-2')}<div><b>Wallet connected</b><small>0x7a4F...9c21 · NodeKart Network</small></div><button data-action="wallet">Change</button></div><div class="escrow-card">${I('lock-keyhole')}<div><b>Escrow protection</b><p>Your ${money(total)} payment will be locked until the agreed delivery condition is satisfied.</p><span>${I('shield-check')} Transparent settlement · No extra fee</span></div></div><button class="primary-button full" data-action="pay">Confirm & lock payment ${I('arrow-up-right')}</button></div></div><aside class="summary-card checkout-summary"><h3>Order summary</h3><div class="summary-product"><img src="${p.image}" alt=""><span>${p.name}<small>${p.seller}</small></span><b>${money(total)}</b></div><div><span>Subtotal</span><b>${money(total)}</b></div><div><span>Shipping</span><b class="free">Free</b></div><div><span>Cashback after delivery</span><b class="cashback">+${money(Math.round(total*.05))}</b></div><hr><div class="summary-total"><span>Total</span><b>${money(total)}</b></div></aside></div></section>`;
>>>>>>> Stashed changes
}

function orders() {
  const done = state.settled;
<<<<<<< Updated upstream
  const item = (title, desc, ok, ic) => `
    <div class="timeline-item ${ok ? 'done' : ''}">
      <span class="timeline-icon">${I(ic)}</span>
      <div><b>${title}</b><p>${desc}</p></div>
      ${ok ? `<span class="timeline-check">${I('check')}</span>` : ''}
    </div>
  `;
  const p = state.selected || products[0];

  return `
    <section class="page-heading compact">
      <div>
        <p class="eyebrow">Your order</p>
        <h1>Order <em>#NK48291</em></h1>
        <p>${done ? 'This transaction has settled successfully.' : 'Your payment is protected while your order makes its way to you.'}</p>
      </div>
      <span class="status-badge ${done ? 'success' : ''}">${done ? I('check-circle-2') + ' Settled' : I('lock-keyhole') + ' In escrow'}</span>
    </section>

    <section class="order-layout">
      <div class="order-main">
        <div class="order-product">
          <img src="${p.image}" alt="">
          <div>
            <span>Purchased from ${p.seller}</span>
            <h2>${p.name}</h2>
            <b>${money(p.price)}</b>
          </div>
          <button class="outline-button" data-action="proof">${I('scan-eye')} Proof</button>
        </div>
        <div class="timeline">
          ${item('Payment', `${money(p.price)} received`, true, 'wallet')}
          ${item('Escrow', 'Funds locked and protected', true, 'lock-keyhole')}
          ${item('Seller', 'Order accepted & prepared', true, 'package-check')}
          ${item('Shipping', state.shipped ? 'Package dispatched · Tracking NK9271IN' : 'Seller will dispatch shortly', state.shipped, 'truck')}
          ${item('Delivery', state.delivered ? 'Delivery confirmed by you' : 'Awaiting confirmation', state.delivered, state.delivered ? 'check-circle-2' : 'circle-dashed')}
          ${item('Settlement', done ? 'Escrow released · Cashback minted' : 'Pending delivery confirmation', done, done ? 'sparkles' : 'circle-dashed')}
        </div>
      </div>

      <aside class="order-aside">
        <div class="mini-card">
          <span class="eyebrow">Protected amount</span>
          <b>${money(p.price)}</b>
          <small>Held in NodeKart smart escrow</small>
          <div class="lock-visual">${I('lock-keyhole')} Funds secured</div>
        </div>
        ${!state.shipped ? `<button class="secondary-button full" data-action="ship">Simulate seller shipment</button>` : ''}
        ${state.shipped && !state.delivered ? `<button class="secondary-button full" data-action="deliver">Simulate delivery</button>` : ''}
        ${state.delivered && !done ? `<button class="primary-button full" data-action="release">Confirm delivery ${I('check')}</button>` : ''}
        <button class="outline-button full" data-action="open-chat" data-seller="${p.seller}">${I('message-circle')} Message seller</button>
        <button class="outline-button full" data-action="proof">${I('scan-eye')} View blockchain proof</button>
      </aside>
    </section>

    ${done ? `
      <section class="settled-banner">
        <div class="settled-icon">${I('check')}</div>
        <div>
          <p class="eyebrow">Delivery confirmed</p>
          <h2>Escrow released <em>successfully.</em></h2>
          <p>Seller received <b>${money(p.price)}</b>. You received <b class="cashback">+${money(Math.round(p.price * 0.05))} cashback</b>.</p>
        </div>
        <button class="primary-button" data-action="proof">View settlement proof ${I('arrow-up-right')}</button>
      </section>
    ` : ''}
  `;
}

function wallet() {
  return `
    <section class="wallet-hero">
      <div>
        <p class="eyebrow">NodeKart wallet</p>
        <h1>Your SHARP,<br><em>in one place.</em></h1>
      </div>
      <div class="sharp-balance">
        <span>Available balance</span>
        <b>${userProfile.sharpBalance.toLocaleString('en-IN')} <small>SHARP</small></b>
        <p>${inr(userProfile.sharpBalance)}</p>
        <div class="balance-actions">
          <button data-action="send">${I('arrow-up-right')} Send</button>
          <button data-action="receive">${I('arrow-down-left')} Receive</button>
          <button data-action="buy">${I('plus')} Buy SHARP</button>
        </div>
      </div>
    </section>

    <section class="wallet-content">
      <div class="chart-card">
        <span class="eyebrow">Balance history</span>
        <h2>${userProfile.sharpBalance.toLocaleString('en-IN')} SHARP</h2>
        <div class="chart">
          <svg viewBox="0 0 700 190" preserveAspectRatio="none">
            <path d="M0 150 C80 145 85 125 150 138 S220 84 280 105 S340 118 390 74 S460 96 510 54 S590 68 700 22" fill="none" stroke="#c8ef69" stroke-width="4"/>
            <path d="M0 150 C80 145 85 125 150 138 S220 84 280 105 S340 118 390 74 S460 96 510 54 S590 68 700 22 V190 H0Z" fill="#c8ef69" opacity=".15"/>
          </svg>
        </div>
      </div>

      <div class="history-card">
        <div class="card-heading">
          <h2>Transaction history</h2>
          <button class="text-button">View all ${I('arrow-up-right')}</button>
        </div>
        ${[
          ['Fender Stratocaster deposit','−34,500 SHARP','Escrow','shopping-bag'],
          ['Cashback · #NK48172','+750 SHARP','Confirmed','sparkles'],
          ['Referral reward','+500 SHARP','Confirmed','users'],
          ['Order settlement','+25,000 SHARP','Confirmed','check-circle-2']
        ].map(t => `
          <div class="history-row">
            <span class="history-icon">${I(t[3])}</span>
            <div><b>${t[0]}</b><small>${t[2]}</small></div>
            <strong class="${t[1][0]==='+'?'positive':''}">${t[1]}</strong>
          </div>
        `).join('')}
      </div>
    </section>
  `;
=======
  const item = (title,desc,ok,ic) => `<div class="timeline-item ${ok?'done':''}"><span class="timeline-icon">${I(ic)}</span><div><b>${title}</b><p>${desc}</p></div>${ok?`<span class="timeline-check">${I('check')}</span>`:''}</div>`;
  return `<section class="page-heading compact"><div><p class="eyebrow">Your order</p><h1>Order <em>#NK48291</em></h1><p>${done?'This transaction has settled successfully.':'Your payment is protected while your order makes its way to you.'}</p></div><span class="status-badge ${done?'success':''}">${done?I('check-circle-2')+' Settled':I('lock-keyhole')+' In escrow'}</span></section><section class="order-layout"><div class="order-main"><div class="order-product"><img src="${products[0].image}" alt=""><div><span>Purchased from ${products[0].seller}</span><h2>${products[0].name}</h2><b>${money(products[0].price)}</b></div><button class="outline-button" data-action="proof">${I('scan-eye')} Proof</button></div><div class="timeline">${item('Payment','25,000 SHARP received',true,'wallet')}${item('Escrow','Funds locked and protected',true,'lock-keyhole')}${item('Seller','Order accepted',true,'package-check')}${item('Shipping',state.shipped?'Package dispatched · Tracking NK9271IN':'Seller will dispatch shortly',state.shipped,'truck')}${item('Delivery',state.delivered?'Delivery confirmed by you':'Awaiting confirmation',state.delivered,state.delivered?'check-circle-2':'circle-dashed')}${item('Settlement',done?'Escrow released · Cashback minted':'Pending delivery confirmation',done,done?'sparkles':'circle-dashed')}</div></div><aside class="order-aside"><div class="mini-card"><span class="eyebrow">Protected amount</span><b>25,000 SHARP</b><small>Held in NodeKart escrow</small><div class="lock-visual">${I('lock-keyhole')} Funds secured</div></div>${!state.shipped?`<button class="secondary-button full" data-action="ship">Simulate seller shipment</button>`:''}${state.shipped&&!state.delivered?`<button class="secondary-button full" data-action="deliver">Simulate delivery</button>`:''}${state.delivered&&!done?`<button class="primary-button full" data-action="release">Confirm delivery ${I('check')}</button>`:''}<button class="outline-button full" data-action="open-chat" data-seller="${products[0].seller}">${I('message-circle')} Message seller</button><button class="outline-button full" data-action="proof">${I('scan-eye')} View blockchain proof</button></aside></section>${done?`<section class="settled-banner"><div class="settled-icon">${I('check')}</div><div><p class="eyebrow">Delivery confirmed</p><h2>Escrow released <em>successfully.</em></h2><p>Seller received <b>25,000 SHARP</b>. You received <b class="cashback">+1,250 SHARP cashback</b>.</p></div><button class="primary-button" data-action="proof">View settlement proof ${I('arrow-up-right')}</button></section>`:''}`;
}

function wallet() {
  return `<section class="wallet-hero"><div><p class="eyebrow">NodeKart wallet</p><h1>Your SHARP,<br><em>in one place.</em></h1></div><div class="sharp-balance"><span>Available balance</span><b>12,450 <small>SHARP</small></b><p>≈ ₹23,655</p><div class="balance-actions"><button data-action="send">${I('arrow-up-right')} Send</button><button data-action="receive">${I('arrow-down-left')} Receive</button><button data-action="buy">${I('plus')} Buy SHARP</button></div></div></section><section class="wallet-content"><div class="chart-card"><span class="eyebrow">Balance history</span><h2>12,450 SHARP</h2><div class="chart"><svg viewBox="0 0 700 190" preserveAspectRatio="none"><path d="M0 150 C80 145 85 125 150 138 S220 84 280 105 S340 118 390 74 S460 96 510 54 S590 68 700 22" fill="none" stroke="#c8ef69" stroke-width="4"/><path d="M0 150 C80 145 85 125 150 138 S220 84 280 105 S340 118 390 74 S460 96 510 54 S590 68 700 22 V190 H0Z" fill="#c8ef69" opacity=".15"/></svg></div></div><div class="history-card"><div class="card-heading"><h2>Transaction history</h2><button class="text-button">View all ${I('arrow-up-right')}</button></div>${[['iPhone 15 purchase','−42,500 SHARP','Escrow','shopping-bag'],['Cashback · #NK48172','+750 SHARP','Confirmed','sparkles'],['Referral reward','+500 SHARP','Confirmed','users'],['Order settlement','+25,000 SHARP','Confirmed','check-circle-2']].map(t=>`<div class="history-row"><span class="history-icon">${I(t[3])}</span><div><b>${t[0]}</b><small>${t[2]}</small></div><strong class="${t[1][0]==='+'?'positive':''}">${t[1]}</strong></div>`).join('')}</div></section>`;
>>>>>>> Stashed changes
}

function dashboard(type) {
  const reward = type === 'rewards', ref = type === 'referrals', seller = type === 'seller';
<<<<<<< Updated upstream
  const title = reward ? 'Your rewards' : ref ? 'Invite. Shop. Earn.' : seller ? 'Seller dashboard' : 'Your profile';

  return `
    <section class="page-heading dashboard-heading">
      <div>
        <p class="eyebrow">${seller ? 'NodeKart for sellers' : 'NodeKart account'}</p>
        <h1>${title}<br><em>${reward ? 'that keep coming back.' : ref ? 'with your circle.' : ''}</em></h1>
        <p>${reward ? 'A little extra for every good exchange.' : ref ? 'Bring your people to a marketplace built on trust.' : seller ? 'A clear view of the orders and funds moving through your shop.' : 'Manage your verified wallet identity and credentials.'}</p>
      </div>
      <div class="headline-stat">
        <span>${ref ? 'Your referral link' : seller ? 'Total revenue' : reward ? 'Lifetime earned' : 'Wallet status'}</span>
        <strong>${ref ? 'nodekart.com/r/NK7X29' : seller ? '128,450 SHARP' : reward ? '2,450 SHARP' : userProfile.avatar}</strong>
        ${ref ? `<button class="primary-button" data-action="copy">${I('copy')} Copy link</button>` : ''}
        ${!seller && !reward && !ref ? `<button class="primary-button" data-action="open-edit-profile">${I('edit-3')} Edit Saved Profile</button>` : ''}
      </div>
    </section>
    ${seller ? sellerBody() : (reward || ref) ? rewardBody(ref) : profileBody()}
  `;
}

function rewardBody(ref) {
  return `
    <section class="metric-grid">
      <div><span>${I('sparkles')} Cashback earned</span><strong>1,950 SHARP</strong><small>Across 6 completed orders</small></div>
      <div><span>${I('users')} Referral rewards</span><strong>500 SHARP</strong><small>From 5 successful purchases</small></div>
      <div><span>${I('trending-up')} This month</span><strong>+18.4%</strong><small>Compared to last month</small></div>
    </section>
    <section class="dashboard-split">
      <div class="activity-card">
        <h2>${ref ? 'How it works' : 'Recent cashback'}</h2>
        ${(ref ? ['Invite a friend','They make a purchase','The transaction completes','Both users receive SHARP'] : ['Order #NK48291 · +1,250 SHARP','Order #NK48172 · +750 SHARP','Order #NK48003 · +500 SHARP']).map((x,i)=>`
          <div class="reward-row">
            <span>${ref ? '0'+(i+1) : I('sparkles')}</span>
            <div><b>${x}</b><small>${ref ? 'Rewards arrive as the transaction settles.' : ['Today','12 Aug','04 Aug'][i]||''}</small></div>
          </div>
        `).join('')}
      </div>
      <div class="dark-side">
        <span class="eyebrow">${ref ? 'Referral activity' : 'Reward mechanism'}</span>
        <h2>${ref ? '8 friends in.' : 'Rewards that follow the exchange.'}</h2>
        <p>${ref ? '5 successful purchases · 1,250 SHARP earned' : 'Cashback is generated automatically upon verified on-chain delivery.'}</p>
        <button class="secondary-button" data-nav="market">Keep shopping ${I('arrow-up-right')}</button>
      </div>
    </section>
  `;
}

function sellerBody() {
  return `
    <section class="metric-grid seller-metrics">
      <div><span>Total revenue</span><strong>128,450 SHARP</strong><small>+12.8% this month</small></div>
      <div><span>Pending escrow</span><strong>24,500 SHARP</strong><small>2 active orders</small></div>
      <div><span>Released funds</span><strong>103,950 SHARP</strong><small>41 completed orders</small></div>
      <div><span>Average rating</span><strong>4.8 ★</strong><small>127 verified transactions</small></div>
    </section>
    <section class="seller-orders">
      <div class="card-heading">
        <div><span class="eyebrow">Order queue</span><h2>Recent orders</h2></div>
        <button class="primary-button" data-nav="list">${I('plus')} List product</button>
      </div>
      <div class="seller-order">
        <span class="order-number">#NK48291</span>
        <div class="seller-order-product">
          <img src="${products[0].image}" alt="">
          <div><b>${products[0].name}</b><small>${products[0].seller} · ${money(products[0].price)}</small></div>
        </div>
        <span class="status-badge">${I('lock-keyhole')} Payment secured</span>
        <button class="primary-button" data-action="ship">${state.shipped ? 'Shipped ✓' : 'Ship order'}</button>
      </div>
    </section>
  `;
}

function profileBody() {
  return `
    <section class="profile-grid">
      <div class="profile-card">
        <div class="profile-avatar">${userProfile.avatar}</div>
        <h2>${userProfile.name}</h2>
        <p>Member since ${userProfile.memberSince}</p>
        <div style="margin: 12px 0; font-size: 12px; color: var(--muted);">
          <div>📧 ${userProfile.email}</div>
          <div>📞 ${userProfile.phone}</div>
        </div>
        <div class="wallet-address-large">
          ${I('wallet')} ${userProfile.walletShort}
          <button data-action="copy" title="Copy wallet address">${I('copy')}</button>
        </div>
      </div>

      <div class="profile-list">
        <div><span>Wallet status</span><strong class="positive">${I('check-circle-2')} Saved & verified on-chain</strong></div>
        <div><span>SHARP balance</span><strong>${userProfile.sharpBalance.toLocaleString('en-IN')} SHARP</strong></div>
        <div><span>Orders completed</span><strong>${userProfile.ordersCompleted} orders</strong></div>
        <div><span>Reputation</span><strong>${userProfile.reputation}</strong></div>
        <div><span>Database Sync</span><strong class="positive">Live Persistent DB ✓</strong></div>
      </div>
    </section>
  `;
}

function list() {
  return `
    <section class="seller-form-page">
      <div class="page-heading">
        <p class="eyebrow">Seller studio</p>
        <h1>List a <em>good thing.</em></h1>
        <p>Give it a new home with a listing that stays permanently saved and live in the marketplace.</p>
      </div>

      <div class="listing-layout">
        <form class="listing-form" id="sell-form">
          <label>Product photos
            <div class="upload-zone" id="upload-zone">
              ${I('image-plus')}
              <b>Drop photos here or paste image URL below</b>
              <span>Image saved directly to persistent storage</span>
            </div>
            <input id="list-image" placeholder="Image URL (optional)..." style="margin-top: 8px;">
          </label>

          <label>Product name
            <input id="list-name" value="" placeholder="e.g. Vintage Fender Amplifier" required>
          </label>

          <div class="form-grid">
            <label>Category
              <select id="list-category">
                <option value="Electronics">Electronics</option>
                <option value="Collectibles">Collectibles</option>
                <option value="Fashion">Fashion</option>
                <option value="Home">Home</option>
                <option value="Books">Books</option>
              </select>
            </label>
            <label>Price in SHARP
              <input type="number" id="list-price" placeholder="e.g. 15000" required>
            </label>
          </div>

          <label>Description
            <textarea id="list-desc" placeholder="Describe the item condition, history, accessories..."></textarea>
          </label>

          <label>Shipping information
            <input id="list-delivery" value="Ships from Bengaluru · 2-4 days">
          </label>

          <div class="verification-options">
            <h3>Authenticity & verification</h3>
            <label><input type="checkbox" id="list-auth" checked> Add authenticity certificate</label>
            <label><input type="checkbox" id="list-qr"> Add tamper-proof product QR</label>
            <label><input type="checkbox" id="list-prov" checked> Add on-chain provenance record</label>
          </div>

          <button type="submit" class="primary-button full" data-action="publish-submit">Publish product ${I('arrow-up-right')}</button>
        </form>

        <div class="listing-preview">
          <span class="eyebrow">Live preview</span>
          ${card(products[0])}
        </div>
      </div>
    </section>
  `;
}

=======
  let title = reward ? 'Your rewards' : ref ? 'Invite. Shop. Earn.' : seller ? 'Seller dashboard' : 'Your profile';
  return `<section class="page-heading dashboard-heading"><div><p class="eyebrow">${seller ? 'NodeKart for sellers' : 'NodeKart account'}</p><h1>${title}<br><em>${reward ? 'that keep coming back.' : ref ? 'with your circle.' : ''}</em></h1><p>${reward ? 'A little extra for every good exchange.' : ref ? 'Bring your people to a marketplace built on trust.' : seller ? 'A clear view of the orders and funds moving through your shop.' : 'Your account, reputation and NodeKart activity.'}</p></div><div class="headline-stat"><span>${ref ? 'Your referral link' : seller ? 'Total revenue' : reward ? 'Lifetime earned' : 'Wallet status'}</span><strong>${ref ? 'nodekart.com/r/NK7X29' : seller ? '128,450 SHARP' : reward ? '2,450 SHARP' : 'SK'}</strong>${ref ? `<button class="primary-button" data-action="copy">${I('copy')} Copy link</button>` : ''}</div></section>${seller ? sellerBody() : reward || ref ? rewardBody(ref) : profileBody()}`;
}

function rewardBody(ref) {
  return `<section class="metric-grid"><div><span>${I('sparkles')} Cashback earned</span><strong>1,950 SHARP</strong><small>Across 6 completed orders</small></div><div><span>${I('users')} Referral rewards</span><strong>500 SHARP</strong><small>From 5 successful purchases</small></div><div><span>${I('trending-up')} This month</span><strong>+18.4%</strong><small>Compared to last month</small></div></section><section class="dashboard-split"><div class="activity-card"><h2>${ref ? 'How it works' : 'Recent cashback'}</h2>${(ref ? ['Invite a friend','They make a purchase','The transaction completes','Both users receive SHARP'] : ['Order #NK48291 · +1,250 SHARP','Order #NK48172 · +750 SHARP','Order #NK48003 · +500 SHARP']).map((x,i)=>`<div class="reward-row"><span>${ref ? '0'+(i+1) : I('sparkles')}</span><div><b>${x}</b><small>${ref ? 'Rewards arrive as the transaction settles.' : ['Today','12 Aug','04 Aug'][i]||''}</small></div></div>`).join('')}</div><div class="dark-side"><span class="eyebrow">${ref ? 'Referral activity' : 'Reward mechanism'}</span><h2>${ref ? '8 friends in.' : 'Rewards that follow the exchange.'}</h2><p>${ref ? '5 successful purchases · 1,250 SHARP earned' : 'Cashback is generated through the NodeKart reward mechanism rather than presented as a conventional discount.'}</p><button class="secondary-button" data-nav="market">Keep shopping ${I('arrow-up-right')}</button></div></section>`;
}

function sellerBody() {
  return `<section class="metric-grid seller-metrics"><div><span>Total revenue</span><strong>128,450 SHARP</strong><small>+12.8% this month</small></div><div><span>Pending escrow</span><strong>24,500 SHARP</strong><small>2 active orders</small></div><div><span>Released funds</span><strong>103,950 SHARP</strong><small>41 completed orders</small></div><div><span>Average rating</span><strong>4.8 ★</strong><small>127 verified transactions</small></div></section><section class="seller-orders"><div class="card-heading"><div><span class="eyebrow">Order queue</span><h2>Recent orders</h2></div><button class="primary-button" data-nav="list">${I('plus')} List product</button></div><div class="seller-order"><span class="order-number">#NK48291</span><div class="seller-order-product"><img src="${products[0].image}" alt=""><div><b>${products[0].name}</b><small>${products[0].seller} · 34,500 SHARP</small></div></div><span class="status-badge">${I('lock-keyhole')} Payment secured</span><button class="primary-button" data-action="ship">${state.shipped?'Shipped ✓':'Ship order'}</button></div></section>`;
}

function profileBody() {
  return `<section class="profile-grid"><div class="profile-card"><div class="profile-avatar">SK</div><h2>Saksham Kumar</h2><p>Member since August 2025</p><div class="wallet-address-large">${I('wallet')} 0x7a4F...9c21 <button data-action="copy">${I('copy')}</button></div></div><div class="profile-list"><div><span>Wallet status</span><strong class="positive">${I('check-circle-2')} Connected & verified</strong></div><div><span>SHARP balance</span><strong>12,450 SHARP</strong></div><div><span>Orders completed</span><strong>12</strong></div><div><span>Reputation</span><strong>4.91 ★</strong></div><div><span>Privacy controls</span><strong>${I('chevron-right')}</strong></div></div></section>`;
}

function list() {
  return `<section class="seller-form-page"><div class="page-heading"><p class="eyebrow">Seller studio</p><h1>List a <em>good thing.</em></h1><p>Give it a new home with a listing that is clear, honest and easy to verify.</p></div><div class="listing-layout"><div class="listing-form"><label>Product photos<div class="upload-zone">${I('image-plus')}<b>Drop photos here</b><span>or choose from your device</span></div></label><label>Product name<input id="list-name" value="Custom Vintage Mechanical Watch"></label><div class="form-grid"><label>Category<select id="list-cat">${CATEGORIES.filter(c=>c.id!=='All').map(c=>`<option value="${c.id}">${c.name}</option>`).join('')}</select></label><label>Price in SHARP<input id="list-price" value="18500"></label></div><label>Description<textarea id="list-desc">Excellent condition, collector-owned with full documentation and provenance tags.</textarea></label><label>Shipping information<input value="Ships from Bengaluru · 2-4 days"></label><div class="verification-options"><h3>Authenticity & verification</h3><label><input type="checkbox" checked> Add authenticity certificate</label><label><input type="checkbox"> Add product QR</label><label><input type="checkbox" checked> Add provenance record</label></div><button class="primary-button full" data-action="publish">Publish product ${I('arrow-up-right')}</button></div><div class="listing-preview"><span class="eyebrow">Live preview</span>${card(products[0])}</div></div></section>`;
}

const autoReplies = [
  'Thanks for reaching out! How can I help?',
  'The item is in excellent condition, happy to share more photos.',
  'Yes, I can ship it today if you order before 5 PM.',
  'Great question! Let me check and get back to you shortly.',
  'I offer escrow protection on all my items.',
  'Happy to answer any more questions about the product!',
  'The price is firm but includes free shipping.',
  'Sure, I can hold it for you until tomorrow.'
];

>>>>>>> Stashed changes
function chatDrawer() {
  if (!state.chatOpen || !state.activeChat) return '';
  const msgs = state.chats[state.activeChat] || [];
  const initials = state.activeChat.split(' ').map(w => w[0]).join('');
<<<<<<< Updated upstream

  return `
    <div class="chat-overlay" data-action="close-chat"></div>
    <div class="chat-drawer">
      <div class="chat-header">
        <div class="chat-avatar">${initials}</div>
        <div class="chat-header-info">
          <b>${state.activeChat}</b>
          <small>${I('badge-check')} Verified seller</small>
        </div>
        <button class="chat-close" data-action="close-chat">${I('x')}</button>
      </div>
      <div class="chat-messages" id="chat-msgs">
        ${msgs.map(m => `
          <div class="chat-bubble ${m.from}">
            <p>${m.text}</p>
            <span class="chat-time">${m.time}</span>
          </div>
        `).join('')}
      </div>
      <div class="chat-input-bar">
        <input id="chat-input" placeholder="Type a message..." autocomplete="off">
        <button data-action="send-msg">${I('send')}</button>
      </div>
    </div>
  `;
=======
  return `<div class="chat-overlay" data-action="close-chat"></div><div class="chat-drawer"><div class="chat-header"><div class="chat-avatar">${initials}</div><div class="chat-header-info"><b>${state.activeChat}</b><small>${I('badge-check')} Verified seller</small></div><button class="chat-close" data-action="close-chat">${I('x')}</button></div><div class="chat-messages" id="chat-msgs">${msgs.map(m=>`<div class="chat-bubble ${m.from}"><p>${m.text}</p><span class="chat-time">${m.time}</span></div>`).join('')}</div><div class="chat-input-bar"><input id="chat-input" placeholder="Type a message..." autocomplete="off"><button data-action="send-msg">${I('send')}</button></div></div>`;
>>>>>>> Stashed changes
}

function chatList() {
  const sellers = Object.keys(state.chats);
<<<<<<< Updated upstream
  return `
    <section class="page-heading compact">
      <div>
        <p class="eyebrow">Messages</p>
        <h1>Your <em>conversations.</em></h1>
        <p>Chat directly with sellers about products and orders.</p>
      </div>
    </section>
    <section class="chat-list">
      ${sellers.length ? sellers.map(s => {
        const msgs = state.chats[s];
        const last = msgs[msgs.length - 1] || { text: 'No messages yet', time: '' };
        const unread = msgs.filter(m => m.from === 'seller' && !m.read).length;
        const initials = s.split(' ').map(w => w[0]).join('');
        return `
          <div class="chat-row" data-chat-seller="${s}">
            <div class="chat-avatar">${initials}</div>
            <div class="chat-row-info">
              <b>${s} ${I('badge-check')}</b>
              <p>${last.text}</p>
            </div>
            <div class="chat-row-meta">
              <small>${last.time}</small>
              ${unread ? `<span class="chat-unread">${unread}</span>` : ''}
            </div>
          </div>
        `;
      }).join('') : `
        <div class="empty-state">
          ${I('message-circle')}
          <h3>No conversations yet</h3>
          <p>Start chatting with sellers from their product pages.</p>
          <button class="secondary-button" data-nav="market">Browse marketplace</button>
        </div>
      `}
    </section>
  `;
=======
  return `<section class="page-heading compact"><div><p class="eyebrow">Messages</p><h1>Your <em>conversations.</em></h1><p>Chat directly with sellers about products and orders.</p></div></section><section class="chat-list">${sellers.length ? sellers.map(s => {
    const msgs = state.chats[s];
    const last = msgs[msgs.length - 1];
    const unread = msgs.filter(m => m.from === 'seller' && !m.read).length;
    const initials = s.split(' ').map(w => w[0]).join('');
    return `<div class="chat-row" data-chat-seller="${s}"><div class="chat-avatar">${initials}</div><div class="chat-row-info"><b>${s} ${I('badge-check')}</b><p>${last.text}</p></div><div class="chat-row-meta"><small>${last.time}</small>${unread ? `<span class="chat-unread">${unread}</span>` : ''}</div></div>`;
  }).join('') : `<div class="empty-state">${I('message-circle')}<h3>No conversations yet</h3><p>Start chatting with sellers from their product pages.</p><button class="secondary-button" data-nav="market">Browse marketplace</button></div>`}</section>`;
>>>>>>> Stashed changes
}

function openChat(seller) {
  state.activeChat = seller;
  state.chatOpen = true;
  if (!state.chats[seller]) state.chats[seller] = [];
  state.chats[seller].forEach(m => m.read = true);
  render();
  const el = document.querySelector('#chat-msgs');
  if (el) el.scrollTop = el.scrollHeight;
}

function sendMessage(text) {
  if (!text.trim() || !state.activeChat) return;
  const now = new Date();
<<<<<<< Updated upstream
  const time = now.toLocaleTimeString('en-IN', { hour: 'numeric', minute: '2-digit', hour12: true });

  if (!state.chats[state.activeChat]) state.chats[state.activeChat] = [];
  state.chats[state.activeChat].push({ from: 'buyer', text: text.trim(), time, read: true });
  render();

  const el = document.querySelector('#chat-msgs');
  if (el) el.scrollTop = el.scrollHeight;

  const seller = state.activeChat;
  const autoReplies = [
    'Thanks for reaching out! Happy to provide more details about this item.',
    'Yes, it is in pristine condition and ships securely with escrow protection.',
    'I can have this dispatched by tomorrow morning with tracking.'
  ];

  setTimeout(() => {
    if (state.activeChat === seller) {
      const reply = autoReplies[Math.floor(Math.random() * autoReplies.length)];
      const t = new Date().toLocaleTimeString('en-IN', { hour: 'numeric', minute: '2-digit', hour12: true });
      state.chats[seller].push({ from: 'seller', text: reply, time: t, read: state.chatOpen && state.activeChat === seller });
=======
  const time = now.toLocaleTimeString('en-IN', { hour:'numeric', minute:'2-digit', hour12:true });
  if (!state.chats[state.activeChat]) state.chats[state.activeChat] = [];
  state.chats[state.activeChat].push({ from:'buyer', text:text.trim(), time, read:true });
  render();
  const el = document.querySelector('#chat-msgs');
  if (el) el.scrollTop = el.scrollHeight;
  const seller = state.activeChat;
  setTimeout(() => {
    if (state.activeChat === seller) {
      const reply = autoReplies[Math.floor(Math.random() * autoReplies.length)];
      const t = new Date().toLocaleTimeString('en-IN', { hour:'numeric', minute:'2-digit', hour12:true });
      state.chats[seller].push({ from:'seller', text:reply, time:t, read:state.chatOpen && state.activeChat === seller });
>>>>>>> Stashed changes
      render();
      const el2 = document.querySelector('#chat-msgs');
      if (el2) el2.scrollTop = el2.scrollHeight;
    }
<<<<<<< Updated upstream
  }, 1200);
}

function render() {
  let c = state.page === 'home' ? home()
        : state.page === 'market' ? market()
        : state.page === 'product' ? product()
        : state.page === 'cart' ? cart()
        : state.page === 'checkout' ? checkout()
        : state.page === 'orders' ? orders()
        : state.page === 'wallet' ? wallet()
        : state.page === 'list' ? list()
        : state.page === 'messages' ? chatList()
        : dashboard(state.page);

  app.innerHTML = `
    ${header()}
    <main>${c}</main>
    ${foot()}
    <div class="demo-pill">${I('database')} Persistent DB Active</div>
    ${chatDrawer()}
  `;
  bind();
  icons();
=======
  }, 1500);
>>>>>>> Stashed changes
}

function proof() {
  const m = document.querySelector('#modal');
<<<<<<< Updated upstream
  m.hidden = false;
  m.innerHTML = `
    <div class="modal-backdrop">
      <section class="proof-modal">
        <button class="close-modal" data-action="close">${I('x')}</button>
        <div class="proof-header">
          <span class="proof-symbol">${I('shield-check')}</span>
          <div>
            <p class="eyebrow">Settlement record</p>
            <h2>Blockchain proof</h2>
          </div>
          <span class="confirmed">${I('check-circle-2')} Confirmed</span>
        </div>
        <p class="proof-description">A persistent verification record for the NodeKart network.</p>
        <div class="hash-row">
          <span>Transaction hash</span>
          <b>0x7a3f9d...91fd</b>
          <button data-action="copy">${I('copy')}</button>
        </div>
        <div class="proof-grid">
          <div><span>Smart contract</span><b>0x91c...72ae</b></div>
          <div><span>Block</span><b>18,492,021</b></div>
          <div><span>Timestamp</span><b>Aug 25, 2026 · 12:42 AM</b></div>
        </div>
        <h3>Events</h3>
        <div class="event-list">
          ${['Payment deposited','Escrow created','Delivery confirmed','Escrow released','Cashback minted'].map(x => `
            <div>${I('check')}<b>${x}</b><small>Verified event</small></div>
          `).join('')}
        </div>
        <div class="network-proof">${I('radio')} Verified on NodeKart Escrow Network</div>
      </section>
    </div>
  `;
=======
  if (!m) return;
  m.hidden = false;
  m.innerHTML = `<div class="modal-backdrop"><section class="proof-modal"><button class="close-modal" data-action="close">${I('x')}</button><div class="proof-header"><span class="proof-symbol">${I('shield-check')}</span><div><p class="eyebrow">Settlement record</p><h2>Blockchain proof</h2></div><span class="confirmed">${I('check-circle-2')} Confirmed</span></div><p class="proof-description">A simulated verification record for the NodeKart demo network. Technical details are available when you want to inspect them.</p><div class="hash-row"><span>Transaction hash</span><b>0x7a3f9d...91fd</b><button data-action="copy">${I('copy')}</button></div><div class="proof-grid"><div><span>Smart contract</span><b>0x91c...72ae</b></div><div><span>Block</span><b>18,492,021</b></div><div><span>Timestamp</span><b>Aug 25, 2026 · 12:42 AM</b></div></div><h3>Events</h3><div class="event-list">${['Payment deposited','Escrow created','Delivery confirmed','Escrow released','Cashback minted'].map(x=>`<div>${I('check')}<b>${x}</b><small>Verified event</small></div>`).join('')}</div><div class="network-proof">${I('radio')} Verified on NodeKart Network <small>Demo data · no public chain claim</small></div></section></div>`;
>>>>>>> Stashed changes
  icons();
}

function pay() {
  const m = document.querySelector('#modal');
<<<<<<< Updated upstream
  m.hidden = false;
  m.innerHTML = `
    <div class="modal-backdrop">
      <section class="transaction-modal">
        <div class="transaction-orb">${I('lock-keyhole')}</div>
        <p class="eyebrow">NodeKart settlement</p>
        <h2 id="tx-title">Connecting wallet</h2>
        <p id="tx-copy">Please approve the transaction with your connected wallet.</p>
        <div class="transaction-steps">
          ${['Connect wallet','Prepare transaction','Lock funds in escrow','Transaction confirmed','Order created'].map((x,i)=>`
            <div data-step="${i}"><span>${i+1}</span>${x}</div>
          `).join('')}
        </div>
        <div class="progress-bar"><span></span></div>
      </section>
    </div>
  `;
  icons();

  let i = 0;
  const titles = ['Connecting wallet','Preparing transaction','Locking funds in escrow','Payment secured','Order created'];
  const copy = ['Checking wallet credentials.','Validating escrow condition.','Your payment is being secured in escrow.','Funds locked in smart escrow contract.','Your order is ready to track.'];

  const timer = setInterval(() => {
    document.querySelector(`[data-step="${i}"]`)?.classList.add('done');
    document.querySelector('#tx-title').textContent = titles[i];
    document.querySelector('#tx-copy').textContent = copy[i];
=======
  if (!m) return;
  m.hidden = false;
  m.innerHTML = `<div class="modal-backdrop"><section class="transaction-modal"><div class="transaction-orb">${I('lock-keyhole')}</div><p class="eyebrow">NodeKart settlement</p><h2 id="tx-title">Connecting wallet</h2><p id="tx-copy">Please approve the simulated transaction in your wallet.</p><div class="transaction-steps">${['Connect wallet','Prepare transaction','Lock funds in escrow','Transaction confirmed','Order created'].map((x,i)=>`<div data-step="${i}"><span>${i+1}</span>${x}</div>`).join('')}</div><div class="progress-bar"><span></span></div></section></div>`;
  icons();
  let i = 0;
  const titles = ['Connecting wallet','Preparing transaction','Locking funds in escrow','Payment secured','Order created'];
  const copy = ['Please approve the simulated transaction in your wallet.','Checking balance and delivery details.','Your payment is being held securely.','Funds locked in protected escrow.','Your order is ready to track.'];
  const timer = setInterval(() => {
    document.querySelector(`[data-step="${i}"]`)?.classList.add('done');
    const titleEl = document.querySelector('#tx-title');
    const copyEl = document.querySelector('#tx-copy');
    if (titleEl) titleEl.textContent = titles[i];
    if (copyEl) copyEl.textContent = copy[i];
>>>>>>> Stashed changes
    i++;
    if (i === titles.length) {
      clearInterval(timer);
      setTimeout(() => {
        m.hidden = true;
        state.page = 'orders';
        render();
        note('Payment secured. Your order is in escrow.');
      }, 700);
    }
  }, 700);
}

<<<<<<< Updated upstream
function openEditProfileModal() {
  const m = document.querySelector('#modal');
  m.hidden = false;
  m.innerHTML = `
    <div class="modal-backdrop">
      <section class="proof-modal" style="max-width: 480px; text-align: left;">
        <button class="close-modal" data-action="close">${I('x')}</button>
        <div class="proof-header">
          <span class="proof-symbol">${I('user-check')}</span>
          <div>
            <p class="eyebrow">User settings</p>
            <h2>Save Profile Credentials</h2>
          </div>
        </div>
        <form id="edit-profile-form" style="margin-top: 16px; display: flex; flex-direction: column; gap: 12px;">
          <label style="font-size: 11px; color: var(--muted); text-transform: uppercase;">
            Full Name
            <input id="prof-name" value="${userProfile.name}" style="width: 100%; margin-top: 4px; padding: 8px 12px; background: #141d17; border: 1px solid #334; border-radius: 4px; color: #fff;" required>
          </label>
          <label style="font-size: 11px; color: var(--muted); text-transform: uppercase;">
            Email Address
            <input id="prof-email" value="${userProfile.email}" style="width: 100%; margin-top: 4px; padding: 8px 12px; background: #141d17; border: 1px solid #334; border-radius: 4px; color: #fff;">
          </label>
          <label style="font-size: 11px; color: var(--muted); text-transform: uppercase;">
            Phone Number
            <input id="prof-phone" value="${userProfile.phone}" style="width: 100%; margin-top: 4px; padding: 8px 12px; background: #141d17; border: 1px solid #334; border-radius: 4px; color: #fff;">
          </label>
          <label style="font-size: 11px; color: var(--muted); text-transform: uppercase;">
            Wallet Address
            <input id="prof-wallet" value="${userProfile.walletAddress}" style="width: 100%; margin-top: 4px; padding: 8px 12px; background: #141d17; border: 1px solid #334; border-radius: 4px; font-family: monospace; color: var(--lime);">
          </label>
          <button type="submit" class="primary-button" style="margin-top: 8px; width: 100%; justify-content: center;">
            Save & Persist to Database ${I('check')}
          </button>
        </form>
      </section>
    </div>
  `;
  icons();

  const form = document.querySelector('#edit-profile-form');
  if (form) {
    form.onsubmit = e => {
      e.preventDefault();
      const name = document.querySelector('#prof-name').value.trim() || userProfile.name;
      const email = document.querySelector('#prof-email').value.trim() || userProfile.email;
      const phone = document.querySelector('#prof-phone').value.trim() || userProfile.phone;
      const walletAddress = document.querySelector('#prof-wallet').value.trim() || userProfile.walletAddress;
      const avatar = name.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase() || 'NK';
      const walletShort = walletAddress.length > 10 ? `${walletAddress.slice(0,6)}...${walletAddress.slice(-4)}` : walletAddress;

      userProfile = { ...userProfile, name, email, phone, walletAddress, walletShort, avatar };
      saveProfile(userProfile);
      m.hidden = true;
      render();
      note('Profile credentials saved and persisted to database ✓');
    };
  }
}

function bind() {
=======
function bind() {
  // Navigation
>>>>>>> Stashed changes
  document.querySelectorAll('[data-nav]').forEach(e => {
    e.onclick = x => {
      x.preventDefault();
      nav(e.dataset.nav, e.dataset.nav === 'product' ? state.selected : null);
    };
  });

<<<<<<< Updated upstream
=======
  // Product click
>>>>>>> Stashed changes
  document.querySelectorAll('[data-product]').forEach(e => {
    e.onclick = () => nav('product', products.find(p => p.id === e.dataset.product));
  });

<<<<<<< Updated upstream
  document.querySelectorAll('[data-cat]').forEach(e => {
    e.onclick = () => {
      state.category = e.dataset.cat;
=======
  // Category filter tabs on Marketplace page
  document.querySelectorAll('[data-cat]').forEach(e => {
    e.onclick = () => {
      state.category = e.dataset.cat;
      state.categoryDropdownOpen = false;
>>>>>>> Stashed changes
      render();
    };
  });

<<<<<<< Updated upstream
  const s = document.querySelector('#search');
  if (s) {
    s.oninput = e => {
      state.search = e.target.value;
      render();
    };
  }

  const sellForm = document.querySelector('#sell-form');
  if (sellForm) {
    sellForm.onsubmit = e => {
      e.preventDefault();
      const name = document.querySelector('#list-name').value.trim();
      const category = document.querySelector('#list-category').value;
      const price = Number(document.querySelector('#list-price').value) || 1000;
      const desc = document.querySelector('#list-desc').value.trim();
      const delivery = document.querySelector('#list-delivery').value.trim() || 'Ships in 2-4 days';
      const imgInput = document.querySelector('#list-image').value.trim();
      const image = imgInput || 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=900&q=85';

      const newProduct = {
        id: `item-${Date.now()}`,
        name,
        seller: userProfile.name,
        rating: '5.0',
        price,
        category,
        delivery,
        image,
        tag: 'New listing',
        blockchain: true,
        description: desc
      };

      products.unshift(newProduct);
      saveProducts(products);
      state.selected = newProduct;
      note('Product published & saved to live database ✓');
      nav('market');
    };
  }

  document.querySelectorAll('[data-action]').forEach(e => {
    e.onclick = () => {
      const a = e.dataset.action;
      if (a === 'wallet') note(`Connected wallet: ${userProfile.walletAddress}`);
      if (a === 'open-edit-profile') openEditProfileModal();
      if (a === 'buy') nav('checkout');
      if (a === 'cart') {
        state.cart = [state.selected];
        note('Added to your basket');
        nav('cart');
      }
      if (a === 'pay') pay();
      if (a === 'proof') proof();
      if (a === 'close') document.querySelector('#modal').hidden = true;
=======
  // Category dropdown selection & home category pills
  document.querySelectorAll('[data-select-cat]').forEach(e => {
    e.onclick = x => {
      x.stopPropagation();
      selectCategory(e.dataset.selectCat);
    };
  });

  document.querySelectorAll('[data-home-cat]').forEach(e => {
    e.onclick = x => {
      x.stopPropagation();
      selectCategory(e.dataset.homeCat);
    };
  });

  // Sort dropdown selection
  document.querySelectorAll('[data-set-sort]').forEach(e => {
    e.onclick = x => {
      x.stopPropagation();
      state.sort = e.dataset.setSort;
      state.sortOpen = false;
      render();
    };
  });

  // Search input with focus preservation
  const s = document.querySelector('#search');
  if (s) {
    s.oninput = e => {
      const val = e.target.value;
      const pos = e.target.selectionStart;
      state.search = val;
      render();
      const newS = document.querySelector('#search');
      if (newS) {
        newS.focus();
        newS.setSelectionRange(pos, pos);
      }
    };
  }

  // Action buttons
  document.querySelectorAll('[data-action]').forEach(e => {
    e.onclick = x => {
      const a = e.dataset.action;
      if (a === 'toggle-categories') {
        x.stopPropagation();
        state.categoryDropdownOpen = !state.categoryDropdownOpen;
        state.sortOpen = false;
        render();
      }
      if (a === 'toggle-sort') {
        x.stopPropagation();
        state.sortOpen = !state.sortOpen;
        state.categoryDropdownOpen = false;
        render();
      }
      if (a === 'clear-search') {
        state.search = '';
        render();
      }
      if (a === 'menu') {
        x.stopPropagation();
        state.mobileMenuOpen = !state.mobileMenuOpen;
        render();
      }
      if (a === 'close-menu') {
        state.mobileMenuOpen = false;
        render();
      }
      if (a === 'wallet') note('Wallet connected · 12,450 SHARP available');
      if (a === 'buy') nav('checkout');
      if (a === 'cart') {
        state.cart = [state.selected];
        note(`Added ${state.quantity || 1}x to your basket`);
        nav('cart');
      }
      if (a === 'qty-dec') {
        if (state.quantity > 1) {
          state.quantity--;
          render();
        }
      }
      if (a === 'qty-inc') {
        state.quantity = (state.quantity || 1) + 1;
        render();
      }
      if (a === 'pay') pay();
      if (a === 'proof') proof();
      if (a === 'close') {
        const modal = document.querySelector('#modal');
        if (modal) modal.hidden = true;
      }
>>>>>>> Stashed changes
      if (a === 'ship') {
        state.shipped = true;
        render();
        note('Shipment simulated · Order is on its way');
      }
      if (a === 'deliver') {
        state.delivered = true;
        render();
        note('Delivery simulated · Ready to confirm');
      }
      if (a === 'release') {
        state.settled = true;
<<<<<<< Updated upstream
        userProfile.sharpBalance += 1250;
        saveProfile(userProfile);
        render();
        note('Escrow released · +1,250 SHARP cashback minted to wallet ✓');
      }
      if (['send','receive','buy-sharp'].includes(a)) note('This action is verified on NodeKart network.');
      if (a === 'copy') {
        navigator.clipboard?.writeText(userProfile.walletAddress);
        note('Copied wallet address to clipboard');
=======
        render();
        note('Escrow released · 1,250 SHARP cashback minted');
      }
      if (['send','receive','buy-sharp'].includes(a)) note('This wallet action is simulated for the demo.');
      if (a === 'copy') note('Copied to clipboard');
      if (a === 'publish') {
        const nameInput = document.querySelector('#list-name');
        const catSelect = document.querySelector('#list-cat');
        const priceInput = document.querySelector('#list-price');
        const descInput = document.querySelector('#list-desc');
        if (nameInput && nameInput.value.trim()) {
          const newP = {
            id: `item-${Date.now()}`,
            name: nameInput.value.trim(),
            seller: 'Saksham Kumar',
            rating: '5.0',
            price: Number(priceInput?.value) || 15000,
            category: catSelect?.value || 'Collectibles',
            delivery: 'Arrives by 2 Sep',
            image: products[0].image,
            tag: 'New listing',
            blockchain: true
          };
          products.unshift(newP);
          state.selected = newP;
          note('Product listed successfully ✓');
          nav('market');
        } else {
          note('Please enter a product name');
        }
>>>>>>> Stashed changes
      }
      if (a === 'reset') {
        state.search = '';
        state.category = 'All';
<<<<<<< Updated upstream
        render();
=======
        state.sort = 'recommended';
        render();
        note('Filters reset');
>>>>>>> Stashed changes
      }
      if (a === 'open-chat') {
        openChat(e.dataset.seller || state.selected.seller);
      }
      if (a === 'close-chat') {
        state.chatOpen = false;
        state.activeChat = null;
        render();
      }
      if (a === 'send-msg') {
        const inp = document.querySelector('#chat-input');
        if (inp) {
          sendMessage(inp.value);
          inp.value = '';
        }
      }
    };
  });

<<<<<<< Updated upstream
=======
  // Chat rows
>>>>>>> Stashed changes
  document.querySelectorAll('[data-chat-seller]').forEach(e => {
    e.onclick = () => openChat(e.dataset.chatSeller);
  });

  const ci = document.querySelector('#chat-input');
  if (ci) {
    ci.onkeydown = e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        sendMessage(ci.value);
        ci.value = '';
      }
    };
  }
}

<<<<<<< Updated upstream
=======
// Global click listener to close dropdowns when clicking outside
document.addEventListener('click', e => {
  if (state.categoryDropdownOpen && !e.target.closest('.nav-dropdown-wrap')) {
    state.categoryDropdownOpen = false;
    render();
  }
  if (state.sortOpen && !e.target.closest('.sort-wrap')) {
    state.sortOpen = false;
    render();
  }
});

function render() {
  const app = getAppEl();
  if (!app) return;
  let c = state.page === 'home' ? home() :
          state.page === 'market' ? market() :
          state.page === 'product' ? product() :
          state.page === 'cart' ? cart() :
          state.page === 'checkout' ? checkout() :
          state.page === 'orders' ? orders() :
          state.page === 'wallet' ? wallet() :
          state.page === 'list' ? list() :
          state.page === 'messages' ? chatList() :
          dashboard(state.page);
  app.innerHTML = `${header()}<main>${c}</main>${foot()}<div class="demo-pill">${I('flask-conical')} Demo mode</div>${chatDrawer()}`;
  bind();
  icons();
}

// Initial render
>>>>>>> Stashed changes
render();
