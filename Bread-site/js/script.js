document.getElementById("header-cart").onclick = function() {
   document.getElementById("cart").classList.add('cart-active');
};

document.getElementById("cart-close").onclick = function() {
   document.getElementById("cart").classList.remove('cart-active');
};

document.getElementById("header-menu").onclick = function() {
   document.getElementById("header-nav").classList.add('header__active');
};

document.getElementById("header-close").onclick = function() {
   document.getElementById("header-nav").classList.remove('header__active');
};