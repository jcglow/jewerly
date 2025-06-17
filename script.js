// Lista de productos (ejemplo, reemplaza con tus datos reales)
const productos = [
  { id: 1, name: "Aretes con estilo de diseño enchapados en oro 14k", price: 15, image: "1.jpg" },
  { id: 2, name: "Aretes enchapados en oro 14k con zirconias y doble cierre", price: 15, image: "2.jpg" },
  { id: 3, name: "Anillos de compromiso con piedra y zirconias enchapados en oro 14k", price: 25, image: "3.jpg" },
  { id: 4, name: "Anillo de flor con zirconia, enchapado en oro 14k, talla 10 y 6", price: 15, image: "4.jpg" },
  { id: 5, name: "Pulseras elegantes inspiradas en diseño enchapadas en oro 14k", price: 25, image: "5.jpg" },
  { id: 6, name: "Pulsera con estilo elegante inspirada en diseño enchapada en oro 18k", price: 25, image: "6.jpg" },
  { id: 7, name: "Anillo de trébol con zirconia enchapado en oro 14k, talla 9", price: 15, image: "7.jpg" },
  { id: 8, name: "Anillo con piedra elegante y sencillo enchapado en oro 14k, talla 6, 9 y 10", price: 15, image: "8.jpg" },
  { id: 9, name: "Anillos de compromiso con estilos elegantes y modernos enchapados en oro 14k, talla 6, 9 y 10", price: 25, image: "9.jpg" },
  { id: 10, name: "Pulsera elegante con anillo estilo de diseño con piedra enchapado en oro 18k", price: 30, image: "10.jpg" },
  { id: 11, name: "Anillo de compromiso unisex enchapado en oro 14k, talla 6, 8 y 12", price: 15, image: "11.jpg" },
  { id: 12, name: "Pulsera elegante con zirconias enchapada en oro 14k", price: 20, image: "12.jpg" },
  { id: 13, name: "Anillo con estilo moderno enchapado en oro 14k, talla 8, 9 y 10", price: 15, image: "13.jpg" },
  { id: 14, name: "Anillo de corazón con zirconias enchapado en oro 14k, talla 10", price: 15, image: "14.jpg" },
  { id: 15, name: "Anillo elegante y sencillo de perla enchapado en oro 14k, talla 6, 7 y 9", price: 15, image: "15.jpg" },
  { id: 16, name: "Anillo con círculo de estilo moderno enchapado en oro 14k, talla 6, 7, 8 y 9", price: 15, image: "16.jpg" },
  { id: 17, name: "Juego cadena y pulsera eslabón cubano con dije de sirena, enchapado 14k", price: 50, image: "17.jpg" },
  { id: 18, name: "Juego cadena y manilla enchapados en oro 14k con zirconias", price: 50, image: "18.jpg" },
  { id: 19, name: "Anillo de diseño con piedra enchapado en oro 18k", price: 15, image: "19.jpg" },
  { id: 20, name: "Anillo blanco enchapado en oro 14k, talla 7 y 8", price: 15, image: "20.jpg" },
  { id: 21, name: "Anillo enchapado en oro rosa con piedra, talla 8 y 12", price: 15, image: "21.jpg" },
  { id: 22, name: "Anillo enchapado en oro 14k, talla 8, 9 y 10", price: 15, image: "22.jpg" },
  { id: 23, name: "Anillo con zirconia enchapado en oro 14k, talla 9 y 10", price: 15, image: "23.jpg" },
  { id: 24, name: "Anillo de diseño enchapado en oro 14k, talla 9", price: 15, image: "24.jpg" },
  { id: 25, name: "Anillo doble diseño trébol enchapado en 14k, talla 8 y 9", price: 15, image: "25.jpg" },
  { id: 26, name: "Anillo de trébol con zirconias enchapado en 14k, talla 9", price: 15, image: "26.jpg" },
  { id: 27, name: "Anillo con corazón y zirconias enchapado en 14k, talla 10", price: 15, image: "27.jpg" },
  { id: 28, name: "Cadena trébol negro enchapado en 14k", price: 25, image: "28.jpg" },
  { id: 29, name: "Cadena fina con dije de zirconias enchapado en 14k", price: 20, image: "29.jpg" },
  { id: 30, name: "Cadena con dije de panda enchapado en 14k", price: 15, image: "30.jpg" },
  { id: 31, name: "Cadena ajustable personalizada con dijes iniciales enchapada en 14k", price: 20, image: "31.jpg" },
  { id: 32, name: "Cadena con dije de chile enchapada en 14k", price: 10, image: "32.jpg" },
  { id: 33, name: "Cadena dije negro con estrella enchapado en 14k", price: 15, image: "33.jpg" },
  { id: 34, name: "Cadena dije azul con ancla enchapado en 14k", price: 15, image: "34.jpg" },
  { id: 35, name: "Cadena dije rosa con estrella de mar enchapado en 14k", price: 15, image: "35.jpg" },
  { id: 36, name: "Cadena rosa con alas de ángel enchapado en 14k", price: 15, image: "36.jpg" },
  { id: 37, name: "Cadena dije blanco con patita de perro enchapado en 14k", price: 15, image: "37.jpg" },
  { id: 38, name: "Cadena dije blanco con cruz enchapado en 14k", price: 15, image: "38.jpg" },
  { id: 39, name: "Cadena dije lila con luna enchapado en 14k", price: 15, image: "39.jpg" },
  { id: 40, name: "Cadena dije lila con mariposa enchapado en 14k", price: 15, image: "40.jpg" },
  { id: 41, name: "Cadena trenzada doble enchapada en 14k", price: 20, image: "41.jpg" },
  { id: 42, name: "Tobillera eslabón cubano enchapada en oro 14k de 25 cm", price: 15, image: "42.jpg" },
  { id: 43, name: "Tobillera eslabón cubano enchapada en oro 14k de 25 cm", price: 15, image: "43.jpg" },
  { id: 44, name: "Pulsera piedras eslabón liso, 18 cm, enchapada en 14k", price: 10, image: "44.jpg" },
  { id: 45, name: "Pulsera Mano de Fátima 17.5 cm, enchapada en oro 14k", price: 15, image: "45.jpg" },
  { id: 46, name: "Pulseras trébol blancas y plateadas de 18k, 19 cm", price: 20, image: "46.jpg" },
  { id: 47, name: "Juego cadena y manilla enchapados en oro 14k con zirconias", price: 50, image: "47.jpg" },
  { id: 48, name: "Pulseras trébol negros y plateados de 18k, 19 cm", price: 20, image: "48.jpg" },
  { id: 49, name: "Pulseras trébol rosa bebé de 18k, 19 cm", price: 20, image: "49.jpg" },
  { id: 50, name: "Pulsera enchapada en 14k para niña y mujer de 18 cm", price: 10, image: "50.jpg" },
  { id: 51, name: "Pulsera de perla y zirconia enchapada en 14k para niña y mujer, 18 cm", price: 10, image: "51.jpg" },
  { id: 52, name: "Anillo con piedra elegante y sencillo enchapado en oro 14k, talla 6, 9 y 10", price: 15, image: "52.jpg" },
  { id: 53, name: "Cadena ajustable con dijes de iniciales y zirconias, enchapada en 14k", price: 15, image: "53.jpg" },
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

