let count = 0;
let total = 0;

function addToCart(price) {
  count++;
  total += price;

  document.getElementById("cart").innerText = "Cart: " + count;
  document.getElementById("total").innerText = "Total: ₹" + total;
  document.getElementById("msg").innerText = "Item Added!";
}
function removeFromCart(price) {
  if (count > 0) {
    count--;
    total -= price;   // ⭐ यही main fix है

    document.getElementById("cart").innerText = "Cart: " + count;
    document.getElementById("total").innerText = "Total: ₹" + total;
    document.getElementById("msg").innerText = "Item Removed!";
  }
}

function resetCart() {
  count = 0;
  total = 0;

  document.getElementById("cart").innerText = "Cart: 0";
  document.getElementById("total").innerText = "Total: ₹0";
  document.getElementById("msg").innerText = "Cart Reset!";
}