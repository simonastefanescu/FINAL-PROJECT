const productList = [
    {
        "id": 1,
        "title": "Alocasia Black Velvet",
        "price": 15,
        "currency": "$",
        "description": "test",
        "image": "/images/product 1 alocasia black velvet/mainfinal.webp"
    }
    ,
    {
        "id": 2,
        "title": "ZZ Plant",
        "price": 20,
        "currency": "$",
        "description": "test",
        "image": "/images/product 2 zz plant/main.jpg"
    },
    {
        "id": 3,
        "title": "String of hearts",
        "price": 15,
        "currency": "$",
        "description": "Zamioculcas zamiifolia, affectionately called the ZZ plant or Zanzibar Gem, is a tropical plant in the aroid family, Araceae. It is native to Zanzibar, Kenya, and Eastern Africa. You might spot large potato-like rhizomes under the surface of its potting mix. Having evolved in drier conditions than most other aroids, these plants have evolved rhizomes that store water to help the ZZ plant survive drought in its natural environment. The rhizomes are actually underground stems, and what you see above ground are the stems' leaves. Using these underground rhizomes, the plant slowly creeps over time to new locations, spawning new aboveground leaves along the way.",
        "image": "/images/product 3 String of hearts/main.webp"
    }
    , {
        "id": 4,
        "title": "Pothos Silver Satin",
        "price": 30,
        "currency": "$",
        "description": "test",
        "image": "/images/product 4 Silver Satin Pothos/main.jpg"
    }
    ,
    {
        "id": 5,
        "title": "Snake Plant",
        "price": 25,
        "currency": "$",
        "description": "test",
        "image": "/images/product 5 snake plant/main.webp"
    }
    ,
    {
        "id": 6,
        "title": "Calathea Zebrina",
        "price": 12,
        "currency": "$",
        "description": "test",
        "image": "/images/product 6 Calathea Zebrina/main.webp"
    }
    ,
]

window.localStorage.setItem("productList", JSON.stringify(productList));
let list = window.localStorage.getItem("productList");
JSON.parse(list);

const itemList = document.getElementById("item-list")



for (let i = 0; i < productList.length; i++) {
    let item = document.createElement('div');
    item.classList.add('item');
    itemList.appendChild(item);
    item.setAttribute("id", productList[i].id)


    let image = document.createElement("img")
    image.setAttribute("src", productList[i].image);
    image.setAttribute("alt", "alocasia photo")
    item.appendChild(image);

    let title = document.createElement("h2")
    title.classList.add("itemTitle")
    title.textContent = productList[i].title
    item.appendChild(title);

    let price = document.createElement("p")
    price.classList.add("price")
    price.textContent = productList[i].price + productList[i].currency
    item.appendChild(price);

    let anchor=document.createElement("a")
    anchor.setAttribute("href", "./product.html?id=" + productList[i].id);
    item.appendChild(anchor)
    
    let button = document.createElement("button")

    button.textContent = "See product"
    anchor.appendChild(button);


}

//filter 
function liveSearch() {
    let items = document.querySelectorAll(".item")
    let searchInput = document.getElementById("searchbox").value;

    for (let i = 0; i < items.length; i++) {
        if (items[i].innerText.toLowerCase().includes(searchInput.toLowerCase())) {
            items[i].classList.remove("is-hidden");
        }
        else {
            items[i].classList.add("is-hidden");

        }
    }

}

