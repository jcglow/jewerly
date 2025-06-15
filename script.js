const products = [
  { id: 1, name: "Aretes diseño oro 14k", price: 15 },
  { id: 2, name: "Aretes con zirconias", price: 15 },
  { id: 3, name: "Anillo compromiso piedra", price: 25 },
  { id: 4, name: "Anillo flor zirconia", price: 15 },
  { id: 5, name: "Pulsera elegante oro 14k", price: 25 },
  { id: 6, name: "Pulsera elegante oro 18k", price: 25 }
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
      <img src="https://via.placeholder.com/200?text=${encodeURIComponent(product.name)}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <button class="btn" onclick='addToCart(${JSON.stringify(product)})'>Agregar al carrito</button>
    `;
    container.appendChild(div);
  });
};
