/* Product related functions */

$(document).ready(function(){

// If product list exists on page load products
if($("#productList").length){

loadProducts();

}

// Load featured products on home page
if($("#featuredProducts").length){

loadFeaturedProducts();

}

// Load product details page
if($("#productDetails").length){

loadProductDetails();

}

});


// Load all products for products.html
function loadProducts(){

$.getJSON("data/products.json", function(products){

let html="";

products.forEach(function(product){

html+=`
<div class="col-md-4 mb-4">

<div class="card h-100">

<img src="${product.image}" class="card-img-top product-img">

<div class="card-body">

<h5 class="card-title">${product.name}</h5>

<p class="card-text">₹ ${product.price}</p>

<a href="product-details.html?id=${product.id}" class="btn btn-primary">View Details</a>

<button class="btn btn-success addCartBtn" data-id="${product.id}">
Add to Cart
</button>

</div>

</div>

</div>
`;

});

$("#productList").html(html);

});

}


// Load some products for homepage
function loadFeaturedProducts(){

$.getJSON("data/products.json", function(products){

let html="";

products.slice(0,3).forEach(function(product){

html+=`
<div class="col-md-4">

<div class="card">

<img src="${product.image}" class="card-img-top product-img">

<div class="card-body">

<h5>${product.name}</h5>

<p>₹ ${product.price}</p>

<a href="product-details.html?id=${product.id}" class="btn btn-primary">View</a>

</div>

</div>

</div>
`;

});

$("#featuredProducts").html(html);

});

}


// Load product details
function loadProductDetails(){

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

$.getJSON("data/products.json", function(products){

let product = products.find(p=>p.id == productId);

if(product){

let html=`
<div class="col-md-6">

<img src="${product.image}" class="img-fluid">

</div>

<div class="col-md-6">

<h2>${product.name}</h2>

<p>${product.description}</p>

<h4>₹ ${product.price}</h4>

<button class="btn btn-success addCartBtn" data-id="${product.id}">
Add to Cart
</button>

</div>
`;

$("#productDetails").html(html);

}

});

}