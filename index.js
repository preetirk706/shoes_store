let cart = {};
function resetCart() {
  count = 0;
  total = 0;

  document.getElementById("cart").innerText = "Cart: 0";
  document.getElementById("total").innerText = "Total: ₹0";
  document.getElementById("msg").innerText = "Cart Reset!";
}

function searchProduct() {
  let input = document.getElementById("search").value.toLowerCase();
  let product = document.getElementsByClassName("product");

  for (i = 0; i < product.length; i++) {
    let name = product[i].getElementsByClassName("pname")[0];
    let text = name.innerText.toLowerCase();

    if (text.includes(input)) {
      product[i].style.display = "block";
    } else {
      product[i].style.display = "none";
    }
  }
}
function filterProduct(category) {
  let products = document.getElementsByClassName("product");

  for (let i = 0; i < products.length; i++) {
    let productCategory = products[i].getAttribute("data-category");

    if (category === "all" || productCategory === category) {
      products[i].style.display = "";
    } else {
      products[i].style.display = "none";
    }
  }
}

let count = 0;
let total = 0;

function increaseQty(btn, price) {
  let product = btn.parentElement;
  let name = product.querySelector(".pname").innerText;

  let qtyElement = product.querySelector(".qty");
  let qty = parseInt(qtyElement.innerText);

  qty++;
  qtyElement.innerText = qty;

  count++;
  total += price;

  // ⭐ cart update
  if (cart[name]) {
    cart[name]++;
  } else {
    cart[name] = 1;
  }

  updateCartUI();

  document.getElementById("cart").innerText = "Cart: " + count;
  document.getElementById("total").innerText = "Total: ₹" + total;
}
function decreaseQty(btn, price) {
  let product = btn.parentElement;
  let name = product.querySelector(".pname").innerText;

  let qtyElement = product.querySelector(".qty");
  let qty = parseInt(qtyElement.innerText);

  if (qty > 0 && cart[name]) {
    qty--;
    qtyElement.innerText = qty;

    count--;
    total -= price;

    cart[name]--;

    if (cart[name] === 0) {
      delete cart[name];
    }

    updateCartUI();

    document.getElementById("cart").innerText = "Cart: " + count;
    document.getElementById("total").innerText = "Total: ₹" + total;

    updateCartUI();

    document.getElementById("cart").innerText = "Cart: " + count;
    document.getElementById("total").innerText = "Total: ₹" + total;
  }
}
function updateCartUI() {
  let cartBox = document.getElementById("cartItems");
  cartBox.innerHTML = "";

  for (let item in cart) {
    let div = document.createElement("div");

    div.innerHTML = `
      ${item} x ${cart[item]} 
      <button onclick="removeItem('${item}')">Remove</button>
    `;

    cartBox.appendChild(div);
  }
}
function removeItem(name) {
  if (!cart[name]) return;

  let qtyToRemove = cart[name];

  let products = document.getElementsByClassName("product");

  for (let i = 0; i < products.length; i++) {
    let pname = products[i].querySelector(".pname").innerText;

    if (pname === name) {
      let price = parseInt(products[i].querySelector("p").innerText);

      total -= price * qtyToRemove;
      count -= qtyToRemove;

      products[i].querySelector(".qty").innerText = 0;
    }
  }

  delete cart[name];

  document.getElementById("cart").innerText = "Cart: " + count;
  document.getElementById("total").innerText = "Total: ₹" + total;

  updateCartUI();
}
