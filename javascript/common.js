
//cart
const cartCountDiv = document.querySelector('.item-count');
const cartCount = localStorage.getItem('cartCount');
cartCountDiv.textContent = cartCount;
if (cartCount !== '0') {
    cartCountDiv.classList.remove('hide');
}

//cart-container


const cartContainer = document.querySelector(".cart-container");
const shoppingCart = document.querySelector(".shopping-cart");


function unhide() {
    
    cartContainer.classList.remove("hide");
}



shoppingCart.addEventListener("click", unhide);