// Lista de productos (ejemplo, reemplaza con tus datos reales)
const products = [
  { id: 1, name: "Aretes con estilo de diseño enchapados en oro 14k", price: 15, image: "1.jpeg" },
  { id: 2, name: "Aretes enchapados en oro 14k con zirconias y doble cierres", price: 15, image: "2.jpeg" },
  { id: 3, name: "Anillos de compromiso con piedra y zirconias enchapados en oro 14k", price: 25, image: "3.jpeg" },
  { id: 4, name: "Anillo de flor con zirconia, enchapado en oro 14k, talla 10 y 6", price: 15, image: "4.jpeg" },
  { id: 5, name: "Pulseras elegantes inspiradas en diseño enchapadas en oro 14k", price: 25, image: "5.jpeg" },
  { id: 6, name: "Pulsera con estilo elegante enchapado en oro 18k", price: 25, image: "6.jpeg" },
  { id: 7, name: "Anillo de trébol con zirconia enchapado en oro 14k, talla 9", price: 15, image: "7.jpeg" },
  { id: 8, name: "Anillo con piedra elegante enchapado en oro 14k, talla 6, 9 y 10", price: 15, image: "8.jpeg" },
  { id: 9, name: "Anillos de compromiso modernos con piedra y zirconia, oro 14k, talla 6, 9 y 10", price: 25, image: "9.jpeg" },
  { id: 10, name: "Pulsera con anillo, diseño con piedra enchapado en oro 18k", price: 30, image: "10.jpeg" },
  { id: 11, name: "Anillo compromiso unisex enchapado en oro 14k, talla 6, 8, 12", price: 15, image: "11.jpeg" },
  { id: 12, name: "Pulsera elegante con zirconias enchapado en oro 14k", price: 20, image: "12.jpeg" },
  { id: 13, name: "Anillo con estilo moderno enchapado en oro 14k, talla 8, 9 y 10", price: 15, image: "13.jpeg" },
  { id: 14, name: "Anillo de corazón con zirconias enchapado en oro 14k, talla 10", price: 15, image: "14.jpeg" },
  { id: 15, name: "Anillo de perla sencillo enchapado en oro 14k, talla 6, 7 y 9", price: 15, image: "15.jpeg" },
  { id: 16, name: "Anillo con círculo moderno enchapado en oro 14k, talla 6, 7, 8 y 9", price: 15, image: "16.png" },
  { id: 17, name: "Juego de cadena y pulsera cubana con dije de sirena, oro 14k, unisex", price: 50, image: "17.jpeg" },
  { id: 18, name: "Juego cadena y manilla enchapado en oro 14k con zirconias, 50cm y 20cm", price: 50, image: "18.jpeg" },
  { id: 19, name: "Anillo de diseño con piedra enchapado en oro 18k", price: 15, image: "19.jpg" },
  { id: 20, name: "Anillo de diseño blanco con enchape 14k, talla 7 y 8", price: 15, image: "20.jpg" },
  { id: 21, name: "Anillo enchapado en oro rosa con piedra, talla 8 y 12", price: 15, image: "21.jpg" },
  { id: 22, name: "Anillo enchapado en oro 14k, talla 8, 9 y 10", price: 15, image: "22.jpg" },
  { id: 23, name: "Anillo con zirconia enchapado en oro 14k, talla 9 y 10", price: 15, image: "23.jpg" },
  { id: 24, name: "Anillo de diseño enchapado en oro 14k, talla 9", price: 15, image: "24.jpg" },
  { id: 25, name: "Anillo doble con trébol enchapado en 14k, talla 8 y 9", price: 15, image: "25.jpg" },
  { id: 26, name: "Anillo de trébol con zirconias enchapado en 14k, talla 9", price: 15, image: "26.jpg" },
  { id: 27, name: "Anillo con corazón y zirconias enchapado en 14k, talla 10", price: 15, image: "27.jpg" },
  { id: 28, name: "Cadena de diseño con trébol negro enchapado en 14k", price: 25, image: "28.jpg" },
  { id: 29, name: "Cadena fina con dije de zirconias enchapado en 14k", price: 20, image: "29.jpg" },
  { id: 30, name: "Cadena con dije de panda enchapado en 14k", price: 15, image: "30.jpg" },
  { id: 31, name: "Cadena fina personalizada con iniciales y zirconias enchapada en 14k", price: 20, image: "31.jpg" },
  { id: 32, name: "Cadena con dije de chile enchapada en 14k", price: 10, image: "32.jpg" },
  { id: 33, name: "Cadena fina con dije negro y estrella enchapados en 14k", price: 15, image: "33.jpg" },
  { id: 34, name: "Cadena fina con dije azul cielo y ancla enchapados en 14k", price: 15, image: "34.jpg" },
  { id: 35, name: "Cadena fina con dije rosa bebé y estrella de mar enchapados en 14k", price: 15, image: "35.jpg" },
  { id: 36, name: "Cadena fina con dije rosa bebé y alas de ángel enchapados en 14k", price: 15, image: "36.jpg" },
  { id: 37, name: "Cadena fina con dije blanco y patita de perro enchapados en 14k", price: 15, image: "37.jpg" },
  { id: 38, name: "Cadena fina con dije blanco y cruz enchapados en 14k", price: 15, image: "38.jpg" },
  { id: 39, name: "Cadena fina con dije lila y luna enchapados en 14k", price: 15, image: "39.jpg" },
  { id: 40, name: "Cadena trenzada doble enchapada en 14k", price: 20, image: "40.jpg" },
  { id: 41, name: "Tobillera de eslabón cubano enchapado en oro 14k de 25 cm", price: 15, image: "41.jpg" },
  { id: 42, name: "Tobillera de eslabón cubano enchapado en oro 14k de 25 cm", price: 15, image: "42.jpg" },
  { id: 43, name: "Pulsera con piedras de eslabón liso con extensión (18 cm), enchapado en 14k", price: 10, image: "43.jpg" },
  { id: 44, name: "Pulsera Mano de Fátima de 17.5 cm, enchapada en oro 14k, ajustable", price: 15, image: "44.jpg" },
  { id: 45, name: "Pulseras trébol blancas y plateadas de 18K, 19 cm", price: 20, image: "45.jpg" },
  { id: 46, name: "Juego de cadena y manilla enchapados en oro 14k con zirconias (20 y 50 cm)", price: 50, image: "46.jpg" },
  { id: 47, name: "Pulseras de trébol negros y plateados de 18K, 19 cm", price: 20, image: "47.jpg" },
  { id: 48, name: "Pulseras de trébol rosa bebé de 18K, 19 cm", price: 20, image: "48.jpg" },
  { id: 49, name: "Pulsera enchapada en 14k para niña y mujer (18 cm)", price: 10, image: "49.jpg" },
  { id: 50, name: "Pulsera de perla y zirconia enchapada en 14k para niña y mujer (18 cm)", price: 10, image: "50.jpg" },
  { id: 51, name: "Anillo con piedra elegante y sencillo enchapado en oro 14k, talla 6, 9 y 10", price: 15, image: "51.jpg" },
  { id: 52, name: "Cadena fina personalizada con iniciales y zirconias enchapada en oro 14k", price: 15, image: "52.jpg" }
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

