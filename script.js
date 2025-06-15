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
  { id: 18, name: "Juego cadena y manilla enchapado en oro 14k con zirconias, 50cm y 20cm", price: 50, image: "18.jpeg" }
];

// Carrito almacenado en un objeto
const cart = {};

// Agrega producto al carrito
function addToCart(product) {
  if (cart[product.id]) {
    cart[product.id].quantity += 1;
  } else {
    cart[product.id] = { ...product, quantity: 1 };
  }
  updateCart();
  showCart();
}

// Remueve una unidad del producto del carrito
function removeFromCart(productId) {
  if (cart[productId]) {
    cart[productId].quantity -= 1;
    if (cart[productId].quantity <= 0) {
      delete cart[productId];
    }
    updateCart();
  }
}

// Actualiza la lista del carrito y total
function updateCart() {
  const cartList = document.getElementById("cart-items");
  const totalEl = document.getElementById("total");
  const whatsappBtn = document.getElementById("whatsapp-button");

  cartList.innerHTML = "";
  let total = 0;

  Object.values(cart).forEach(item => {
    total += item.price * item.quantity;

    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${item.name}</strong><br>
      Cantidad: ${item.quantity} - Subtotal: $${(item.price * item.quantity).toFixed(2)}<br>
      <button class="remove-btn" onclick="removeFromCart(${item.id})">❌ Quitar 1</button>
    `;
    cartList.appendChild(li);
  });

  totalEl.textContent = `Total: $${total.toFixed(2)}`;

  // Mensaje para WhatsApp
  const msg = `Hola JC Glow ✨ Quiero comprar:%0A` +
    Object.values(cart).map(item => `• ${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`).join("%0A") +
    `%0A%0ATotal: $${total.toFixed(2)}`;

  whatsappBtn.href = `https://wa.me/17865336479?text=${msg}`;
}

// Mostrar el panel del carrito
function showCart() {
  const cartPanel = document.getElementById("cart-panel");
  cartPanel.classList.remove("hidden");
}

// Ocultar el panel del carrito
function hideCart() {
  const cartPanel = document.getElementById("cart-panel");
  cartPanel.classList.add("hidden");
}

// Mostrar imagen en overlay grande
function showImage(image) {
  const overlay = document.createElement("div");
  overlay.className = "image-overlay";
  overlay.innerHTML = `
    <div class="image-popup" role="dialog" aria-modal="true">
      <img src="${image}" alt="Imagen ampliada">
      <button onclick="this.parentElement.parentElement.remove()" aria-label="Cerrar imagen">Cerrar</button>
    </div>
  `;
  document.body.appendChild(overlay);
}

// Al cargar la página, carga los productos y agrega eventos
window.onload = () => {
  const container = document.getElementById("products");
  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" onclick="showImage('${product.image}')">
      <h3>${product.name}</h3>
      <p>$${product.price.toFixed(2)}</p>
      <button class="btn" onclick='addToCart(${JSON.stringify(product)})'>Agregar al carrito</button>
    `;
    container.appendChild(div);
  });

  // Botón abrir carrito
  document.getElementById("open-cart").addEventListener("click", showCart);
  // Botón cerrar carrito
  document.getElementById("close-cart").addEventListener("click", hideCart);
};
