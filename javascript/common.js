
//cart counter
const cartCountDiv = document.querySelector('.item-count');
const cartCount = localStorage.getItem('cartCount');
cartCountDiv.textContent = cartCount;
if (cartCount !== '0') {
    cartCountDiv.classList.remove('hide');
}

//cart-container-unhide


const cartContainer = document.querySelector(".cart-container");
const shoppingCart = document.querySelector(".shopping-cart");


function unhide() {

    cartContainer.classList.remove("hide");
}


shoppingCart.addEventListener("click", unhide);

//cart-container-close

const closeCartContainer = document.getElementById("close-cart-container");

function hide() {
    cartContainer.classList.add("hide");
}
closeCartContainer.addEventListener("click", hide)
//populating the cart container

const lista = localStorage.getItem("productList")

let allProducts = JSON.parse(lista)

const cartProducts = document.getElementById("productList")

for (let i = 0; i < allProducts.length; i++) {
    let product = document.createElement("li");
    cartProducts.appendChild(product);
    product.classList.add('hidden');

    let productImage = document.createElement("img");
    product.appendChild(productImage)
    productImage.setAttribute("src", allProducts[i].image);

    let productTitle = document.createElement("p")
    product.appendChild(productTitle);
    productTitle.textContent=allProducts[i].title 

    let productPrice = document.createElement("p")
    product.appendChild(productPrice);
    productPrice.textContent=allProducts[i].price + "" + allProducts[i].currency

    let quantity = document.createElement("button");
    product.appendChild(quantity);
    quantity.textContent=1
    let remove = document.createElement("span")
    let add = document.createElement("span")
    remove.classList.add('remove-product');
    add.classList.add('add-product');
    quantity.appendChild(remove)
    quantity.appendChild(add)
    remove.textContent="-"
    
    add.textContent="+"
    

}


