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
    total -= price; // ⭐ यही main fix है

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
