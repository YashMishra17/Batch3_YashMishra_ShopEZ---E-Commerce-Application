// checkout.js
// Handles checkout process

$(document).ready(function(){

loadOrderSummary();

$("#checkoutForm").submit(function(e){

e.preventDefault();

alert("Order placed successfully!");

localStorage.removeItem("cart");

window.location.href="index.html";

});

});


// Display order summary
function loadOrderSummary(){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let html="";
let total=0;

cart.forEach(function(item){

total += item.price;

html += `
<li class="list-group-item d-flex justify-content-between">
<span>${item.name}</span>
<span>₹ ${item.price}</span>
</li>
`;

});

html += `
<li class="list-group-item d-flex justify-content-between fw-bold">
<span>Total</span>
<span>₹ ${total}</span>
</li>
`;

$("#orderSummary").html(html);

}