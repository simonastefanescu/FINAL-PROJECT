const list = window.localStorage.getItem("productList");
const listProducts = JSON.parse(list)


const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());



const foundProduct = listProducts.find((item) => {
    return item.id === parseInt(params.id)
})

console.log(params.id);

//populating products-details
const mainImage = document.getElementById("main-image")
const title = document.getElementById("title")
const description = document.getElementById("description")
const price = document.getElementById("price")


mainImage.setAttribute("src", foundProduct.image)
title.textContent = foundProduct.title
description.textContent = foundProduct.description
price.textContent = foundProduct.price + foundProduct.currency

//populating gallery 
const firstImage=document.getElementById("gallery1");
const secondImage=document.getElementById("gallery2");
const thirdImage=document.getElementById("gallery3");

firstImage.setAttribute("src", foundProduct.gallery1);
secondImage.setAttribute("src", foundProduct.gallery2);
thirdImage.setAttribute("src", foundProduct.gallery3);




