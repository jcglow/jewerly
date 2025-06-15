
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
  { id: 16, name: "Anillo con círculo moderno enchapado en oro 14k, talla 6, 7, 8 y 9", price: 15, image: "16.jpeg" },
  { id: 17, name: "Juego de cadena y pulsera cubana con dije de sirena, oro 14k, unisex", price: 50, image: "17.jpeg" },
  { id: 18, name: "Juego cadena y manilla enchapado en oro 14k con zirconias, 50cm y 20cm", price: 50, image: "18.jpeg" }
];

const cart = [];

function addToCart(product) {
  cart.push(product);
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cart-items");
  const totalEl = document.getElementById("total");
  const whatsappBtn = document.getElementById("whatsapp-button");
  cartList.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    total += item.price;
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartList.appendChild(li);
  });

  totalEl.textContent = `Total: $${total}`;

  const msg = "Hola JC Glow Jewelry ✨ quiero comprar:%0A" +
    cart.map(item => `- ${item.name} - $${item.price}`).join("%0A") +
    `%0A%0ATotal: $${total}`;

  whatsappBtn.href = `https://wa.me/17865336479?text=${msg}`;
}

window.onload = () => {
  const container = document.getElementById("products");
  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <button class="btn" onclick='addToCart(${JSON.stringify(product)})'>Agregar al carrito</button>
    `;
    container.appendChild(div);
  });
};
