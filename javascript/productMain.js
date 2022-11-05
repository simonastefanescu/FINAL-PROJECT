const list = window.localStorage.getItem("productList");
const listProducts=JSON.parse(list)


const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());



const foundProduct = listProducts.find((item) => {
    return item.id === parseInt(params.id)
})

console.log(foundProduct);


