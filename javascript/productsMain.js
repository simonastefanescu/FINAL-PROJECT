const productList = [
    {
        "id": 1,
        "title": "Alocasia Black Velvet",
        "price": 15,
        "currency": "$",
        "description": "The Alocasia Black Velvet boasts velvety black leaves with contrasting bright white veins. Why are the leaves black? The plant absorbs light energy from almost the entire visible spectrum—perhaps an evolutionary need in its native low-light environments. But don't stick the Black Velvet in a dark corner; it is happiest in bright indirect light.",
        "image": "/images/product 1 alocasia black velvet/mainfinal.webp",
        "gallery1": "/images/product 1 alocasia black velvet/feey-pt4MBxK9its-unsplash.jpg",
        "gallery2": "/images/product 1 alocasia black velvet/feey-tDnlNLK_3dk-unsplash.jpg",
        "gallery3": "/images/product 1 alocasia black velvet/feey-WHiswpNrJU8-unsplash.jpg"
    }
    ,
    {
        "id": 2,
        "title": "ZZ Plant",
        "price": 20,
        "currency": "$",
        "description": "The ZZ Plant is characterized by its waxy green leaves above the surface of its potting mix, and its large potato-like rhizomes underneath. These rhizomes store water, making the ZZ a hardy, drought-tolerant houseplant that only needs water every few weeks.",
        "image": "/images/product 2 zz plant/main.jpg",
        "gallery1": "./images/product 2 zz plant/annie-spratt-RDE59yq9pRw-unsplash.jpg",
        "gallery2": "./images/product 2 zz plant/feey-1gwjE0c3PSQ-unsplash.jpg",
        "gallery3": "./images/product 2 zz plant/feey-h5hS_f99Vgo-unsplash.jpg"
    },
    {
        "id": 3,
        "title": "String of hearts",
        "price": 15,
        "currency": "$",
        "description": "Our String of Hearts is a lovely trailing succulent known for its heart-shaped leaves and tolerant nature. It can propagate quickly due to its shallow roots and ability to easily grow new roots and vines. We recommend putting it on an elevated surface like a bookshelf to give it space to cascade.",
        "image": "/images/product 3 String of hearts/main.webp",
        "gallery1": "images/product 3 String of hearts/gallery1.jpg",
        "gallery2": "images/product 3 String of hearts/gallery2.jpg",
        "gallery3": "images/product 3 String of hearts/gallery3.jpg"
        
    }
    , {
        "id": 4,
        "title": "Pothos Silver Satin",
        "price": 30,
        "currency": "$",
        "description": "The satin pothos (Scindapsus pictus) is a vine plant that has dark green leaves with silvery markings. Also called the satin silver pothos, this slow-growing trailing houseplant is very easy to care for. The eye-catching tropical plant looks stunning, growing in hanging baskets or climbing up a moss pole.",
        "image": "/images/product 4 Silver Satin Pothos/main.jpg",
        "gallery1": "/images/product 4 Silver Satin Pothos/pothos.jpg",
        "gallery2": "images/product 4 Silver Satin Pothos/Closeup-of-Scindapsus-pictus-leaf.jpg",
        "gallery3": "/images/product 4 Silver Satin Pothos/gryffyn-m-OSBEqWnoDYo-unsplash.jpg"
    }
    ,
    {
        "id": 5,
        "title": "Snake Plant",
        "price": 25,
        "currency": "$",
        "description": "The Snake Plant, is a succulent plant characterized by its upright sword-like leaves with vibrant yellow edges. It is popular for its incredibly easy-going nature (it can tolerate low light and drought) and its air-purifying capabilities. The easiest way to kill this plant is to overcare for it.",
        "image": "/images/product 5 snake plant/main.webp",
        "gallery1": "/images/product 5 snake plant/gallery1.jpg",
        "gallery2": "/images/product 5 snake plant/gallery2.jpg",
        "gallery3": "/images/product 5 snake plant/gallery3.jpg"
    }
    ,
    {
        "id": 6,
        "title": "Calathea Zebrina",
        "price": 12,
        "currency": "$",
        "description": "The Zebra plant (scientific name – Calathea zebrina) is a perennial foliage plant that displays fairly large ovate leaves at the tips of it’s long stalks, growing up to 1 metre tall. This species is fairly undemanding and suitable for growing indoors if enough light and humidity is provided, and the correct temperature conditions given.",
        "image": "/images/product 6 Calathea Zebrina/main.webp",
        "gallery1": "/images/product 6 Calathea Zebrina/gallery1.jpg",
        "gallery2": "/images/product 6 Calathea Zebrina/gallery2.jpg",
        "gallery3": "/images/product 6 Calathea Zebrina/gallery3.jpg"
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

