// Lista de productos (ejemplo, reemplaza con tus datos reales)
const productos = [
  { id: 1, nombre: "Aretes con estilo de diseño enchapados en oro 14k", precio: 15 },
  { id: 2, nombre: "Aretes enchapados en oro 14k con zirconias y doble cierre", precio: 15 },
  { id: 3, nombre: "Anillos de compromiso con piedra y zirconias enchapados en oro 14k", precio: 25 },
  { id: 4, nombre: "Anillo de flor con zirconia, enchapado en oro 14k, talla 10 y 6", precio: 15 },
  { id: 5, nombre: "Pulseras elegantes inspiradas en diseño enchapadas en oro 14k", precio: 25 },
  { id: 6, nombre: "Pulsera con estilo elegante inspirada en diseño enchapada en oro 18k", precio: 25 },
  { id: 7, nombre: "Anillo de trébol con zirconia enchapado en oro 14k, talla 9", precio: 15 },
  { id: 8, nombre: "Anillo con piedra elegante y sencillo enchapado en oro 14k, talla 6, 9 y 10", precio: 15 },
  { id: 9, nombre: "Anillos de compromiso de piedra y zirconia con estilos elegantes y modernos, enchapados en oro 14k, talla 6, 9 y 10", precio: 25 },
  { id: 10, nombre: "Pulsera elegante con su anillo estilo de diseño con piedra enchapado en oro 18k", precio: 30 },
  { id: 11, nombre: "Anillo de compromiso unisex enchapado en oro 14k, talla 6, 8 y 12", precio: 15 },
  { id: 12, nombre: "Pulsera elegante con zirconias enchapada en oro 14k", precio: 20 },
  { id: 13, nombre: "Anillo con estilo moderno enchapado en oro 14k, talla 8, 9 y 10", precio: 15 },
  { id: 14, nombre: "Anillo de corazón con zirconias enchapado en oro 14k, talla 10", precio: 15 },
  { id: 15, nombre: "Anillo elegante y sencillo de perla enchapado en oro 14k, talla 6, 7 y 9", precio: 15 },
  { id: 16, nombre: "Anillo con círculo de estilo moderno enchapado en oro 14k, talla 6, 7, 8 y 9", precio: 15 },
  { id: 17, nombre: "Juego de cadena y pulsera de eslabón cubano con dije de sirena. Cadena 50 cm, pulsera 20 cm, todo enchapado en 14k, unisex", precio: 50 },
  { id: 18, nombre: "Juego de cadena y manilla enchapados en oro 14k con estilo de diseño. Manilla 20 cm y cadena 50 cm con zirconias", precio: 50 },
  { id: 19, nombre: "Anillo de diseño con piedra enchapado en oro 18k, talla", precio: 15 },
  { id: 20, nombre: "Anillo de diseño blanco con enchape 14k, talla 7 y 8", precio: 15 },
  { id: 21, nombre: "Anillo enchapado en oro rosa con piedra, talla 8 y 12", precio: 15 },
  { id: 22, nombre: "Anillo enchapado en oro 14k, talla 8, 9 y 10", precio: 15 },
  { id: 23, nombre: "Anillo con zirconia enchapado en oro 14k, talla 9 y 10", precio: 15 },
  { id: 24, nombre: "Anillo de diseño enchapado en oro 14k, talla 9", precio: 15 },
  { id: 25, nombre: "Anillo doble de diseño con trébol enchapado en 14k, talla 8 y 9", precio: 15 },
  { id: 26, nombre: "Anillo de trébol con zirconias enchapado en 14k, talla 9", precio: 15 },
  { id: 27, nombre: "Anillo con corazón y zirconias enchapado en 14k, talla 10", precio: 15 },
  { id: 28, nombre: "Cadena de diseño de trébol negro enchapado en 14k", precio: 25 },
  { id: 29, nombre: "Cadena fina con dije de zirconias enchapado en 14k", precio: 20 },
  { id: 30, nombre: "Cadena con dije de panda enchapado en 14k", precio: 15 },
  { id: 31, nombre: "Cadena fina personalizada ajustable con dijes de iniciales con zirconias y separador enchapada en 14k", precio: 20 },
  { id: 32, nombre: "Cadena con dije de chile enchapada en 14k", precio: 10 },
  { id: 33, nombre: "Cadena fina con dije negro con estrella enchapados en 14k", precio: 15 },
  { id: 34, nombre: "Cadena fina con dije azul cielo con ancla enchapados en 14k", precio: 15 },
  { id: 35, nombre: "Cadena fina con dije rosa bebé con estrella de mar enchapados en 14k", precio: 15 },
  { id: 36, nombre: "Cadena fina con dije rosa bebé con alas de ángel enchapados en 14k", precio: 15 },
  { id: 37, nombre: "Cadena fina con dije blanco con patita de perro enchapados en 14k", precio: 15 },
  { id: 38, nombre: "Cadena fina con dije blanco con cruz enchapados en 14k", precio: 15 },
  { id: 39, nombre: "Cadena fina con dije lila con luna enchapados en 14k", precio: 15 },
  { id: 40, nombre: "Cadena fina con dije lila con mariposa enchapados en 14k", precio: 15 },
  { id: 41, nombre: "Cadena trenzada doble enchapada en 14k", precio: 20 },
  { id: 42, nombre: "Tobillera de eslabón cubano enchapada en oro 14k de 25 cm", precio: 15 },
  { id: 43, nombre: "Tobillera de eslabón cubano enchapada en oro 14k de 25 cm", precio: 15 },
  { id: 44, nombre: "Pulsera con piedras de eslabón liso con extensión, mide 18 cm contando extensión, enchapada en 14k", precio: 10 },
  { id: 45, nombre: "Pulsera Mano de Fátima de 17.5 cm, enchapada en oro 14k, ajustable", precio: 15 },
  { id: 46, nombre: "Pulseras de trébol blancas y plateadas de 18k, de 19 cm", precio: 20 },
  { id: 47, nombre: "Juego de cadena y manilla enchapados en oro 14k con estilo de diseño. Manilla de 20 cm y cadena 50 cm con zirconias", precio: 50 },
  { id: 48, nombre: "Pulseras de trébol negros y plateados de 18k, de 19 cm", precio: 20 },
  { id: 49, nombre: "Pulseras de trébol rosa bebé de 18k, de 19 cm", precio: 20 },
  { id: 50, nombre: "Pulsera enchapada en 14k para niña y mujer de 18 cm", precio: 10 },
  { id: 51, nombre: "Pulsera de perla y zirconia enchapada en 14k para niña y mujer de 18 cm", precio: 10 },
  { id: 52, nombre: "Anillo con piedra elegante y sencillo enchapado en oro 14k, talla 6, 9 y 10", precio: 15 },
  { id: 53, nombre: "Cadena fina personalizada ajustable con dijes de iniciales con zirconias enchapada en 14k", precio: 15 },
];

// Carrito guardado o inicial vacío
let cart = JSON.parse(localStorage.getItem("jcglowCart")) || {};

// Elementos DOM
const productsContainer = document.getElementById("products");
const cartPanel = document.getElementById("cart-panel");
const cartItemsList = document.getElementById("cart-items");
const totalEl = document.getElementById("total");
const whatsappBtn = document.getElementById("whatsapp-button");
const cartToggleBtn = document.getElementById("cart-toggle");
const cartCountEl = document.getElementById("cart-count");
const cartCloseBtn = document.getElementById("cart-close");
const imageOverlay = document.getElementById("image-overlay");
const popupImg = document.getElementById("popup-img");
const imageCloseBtn = document.getElementById("image-close");

// Render productos en la página
function renderProducts() {
  productsContainer.innerHTML = "";
  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" tabindex="0" role="button" aria-label="Ver imagen de ${product.name}" />
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <button class="btn" aria-label="Agregar ${product.name} al carrito">Agregar al carrito</button>
    `;
    // Click para zoom imagen
    div.querySelector("img").addEventListener("click", () => showImage(product.image));
    div.querySelector("img").addEventListener("keypress", (e) => {
      if(e.key === "Enter") showImage(product.image);
    });
    // Click para agregar al carrito
    div.querySelector("button").addEventListener("click", () => addToCart(product));
    productsContainer.appendChild(div);
  });
}

// Guardar carrito en localStorage
function saveCart() {
  localStorage.setItem("jcglowCart", JSON.stringify(cart));
}

// Actualizar contador de carrito en botón flotante
function updateCartCount() {
  const totalQuantity = Object.values(cart).reduce((acc, item) => acc + item.quantity, 0);
  if (totalQuantity > 0) {
    cartCountEl.textContent = totalQuantity;
    cartCountEl.classList.remove("hidden");
  } else {
    cartCountEl.classList.add("hidden");
  }
}

// Añadir producto al carrito
function addToCart(product) {
  if (cart[product.id]) {
    cart[product.id].quantity += 1;
  } else {
    cart[product.id] = { ...product, quantity: 1 };
  }
  saveCart();
  updateCartUI();
  document.getElementById("clear-cart").addEventListener("click", () => {
  cart = {};
  localStorage.removeItem("jcglowCart");
  updateCartUI();
  hideCart();
});


  showCart();
}

// Quitar 1 unidad del producto o eliminarlo si queda 0
function removeFromCart(productId) {
  if (!cart[productId]) return;
  cart[productId].quantity -= 1;
  if (cart[productId].quantity <= 0) {
    delete cart[productId];
  }
  saveCart();
  updateCartUI();
}

// Actualizar la UI del carrito (lista, total, WhatsApp)
function updateCartUI() {
  cartItemsList.innerHTML = "";
  let total = 0;

  Object.values(cart).forEach(item => {
    total += item.price * item.quantity;

    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${item.name}</strong><br>
      Cantidad: ${item.quantity} - Subtotal: $${item.price * item.quantity}
      <button aria-label="Quitar una unidad de ${item.name}" class="remove-btn">❌</button>
    `;
    li.querySelector("button").addEventListener("click", () => removeFromCart(item.id));
    cartItemsList.appendChild(li);
  });

  totalEl.textContent = `Total: $${total}`;

  // Mensaje WhatsApp con resumen
  const msg = `Hola JC Glow ✨ Quiero comprar:%0A` +
    Object.values(cart).map(item => `• ${item.name} x${item.quantity} - $${item.price * item.quantity}`).join("%0A") +
    `%0A%0ATotal: $${total}`;

  whatsappBtn.href = `https://wa.me/17865336479?text=${msg}`;

  updateCartCount();
}

// Mostrar panel carrito
function showCart() {
  cartPanel.classList.remove("hidden");
}

// Ocultar panel carrito
function hideCart() {
  cartPanel.classList.add("hidden");
}

// Mostrar imagen grande en overlay
function showImage(image) {
  popupImg.src = image;
  imageOverlay.classList.remove("hidden");
}

// Ocultar overlay imagen
function hideImage() {
  imageOverlay.classList.add("hidden");
  popupImg.src = "";
}

// Eventos
cartToggleBtn.addEventListener("click", () => {
  if (cartPanel.classList.contains("hidden")) {
    showCart();
  } else {
    hideCart();
  }
});

cartCloseBtn.addEventListener("click", hideCart);

imageCloseBtn.addEventListener("click", hideImage);

imageOverlay.addEventListener("click", (e) => {
  if (e.target === imageOverlay) hideImage();
});

// Inicialización
window.addEventListener("load", () => {
  renderProducts();
  updateCartUI();
});

const cartOverlay = document.getElementById("cart-overlay");

function showCart() {
  cartPanel.classList.remove("hidden");
  cartOverlay.classList.remove("hidden");
}

function hideCart() {
  cartPanel.classList.add("hidden");
  cartOverlay.classList.add("hidden");
}

cartOverlay.addEventListener("click", hideCart);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") hideCart();
});

