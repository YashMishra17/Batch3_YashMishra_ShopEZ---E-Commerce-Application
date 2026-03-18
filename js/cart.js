// cart.js
// Handles cart operations using LocalStorage

$(document).ready(function(){

// When user clicks Add To Cart
$(document).on("click",".addCartBtn",function(){

let productId = $(this).data("id");

$.getJSON("data/products.json", function(products){

let product = products.find(p => p.id == productId);

addToCart(product);

alert("Product added to cart");

});

});

// Load cart items if on cart page
if($("#cartItems").length){

loadCart();

}

});


// Add product to LocalStorage cart
function addToCart(product){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.push(product);

localStorage.setItem("cart", JSON.stringify(cart));

}


// Load cart items
function loadCart(){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let html = "";
let total = 0;

cart.forEach(function(item,index){

total += item.price;

html += `
<tr>
<td>${item.name}</td>
<td>₹ ${item.price}</td>
<td>
<button class="btn btn-danger removeItem" data-index="${index}">
Remove
</button>
</td>
</tr>
`;

});

$("#cartItems").html(html);

$("#cartTotal").text(total);

}


// Remove item from cart
$(document).on("click",".removeItem",function(){

let index = $(this).data("index");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.splice(index,1);

localStorage.setItem("cart", JSON.stringify(cart));

loadCart();

});