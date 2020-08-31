document.getElementById("headerCart").onclick = function() {
   let cartActive = document.getElementById("cart");
   cartActive.classList.add('cartActive');
};

document.getElementById("cartClose").onclick = function() {
   let cartActive = document.getElementById("cart");
   cartActive.classList.remove('cartActive');
};