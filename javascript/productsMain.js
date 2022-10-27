const productList = [
    {
        "id": 1,
        "title": "Alocasia Black Velvet",
        "price": 15,
        "currency": "dollars",
        "description": "test",
        "image": "/images/product 1 alocasia black velvet/main.jpg"
    }
    ,
    {
        "id": 2,
        "title": "ZZ Plant",
        "price": 20,
        "currency": "dollars",
        "description": "test",
        "image": "/images/product 2 zz plant/main.jpg"
    },
    {
        "id": 3,
        "title": "Alocasia Black Velvet",
        "price": 15,
        "currency": "dollars",
        "description": "test",
        "image": "/images/product 1 alocasia black velvet/main.jpg"
    }
    ,{
        "id": 4,
        "title": "Alocasia Black Velvet",
        "price": 15,
        "currency": "dollars",
        "description": "test",
        "image": "/images/product 1 alocasia black velvet/main.jpg"
    }
    ,
    {
        "id": 5,
        "title": "Alocasia Black Velvet",
        "price": 15,
        "currency": "dollars",
        "description": "test",
        "image": "/images/product 1 alocasia black velvet/main.jpg"
    }
    ,
    {
        "id": 6,
        "title": "Alocasia Black Velvet",
        "price": 15,
        "currency": "dollars",
        "description": "test",
        "image": "/images/product 1 alocasia black velvet/main.jpg"
    }
    ,
]


const itemList = document.getElementById("item-list")



for (let i = 0; i < productList.length; i++) {
    let item = document.createElement('div');
    item.classList.add('item');
    itemList.appendChild(item);


    let image = document.createElement("img")
    image.setAttribute("src", productList[i].image);
    image.setAttribute("alt", "alocasia photo")
    item.appendChild(image);
    ""
    let title = document.createElement("h2")
    title.classList.add("itemTitle")
    title.textContent = productList[i].title
    item.appendChild(title);

    let price = document.createElement("p")
    price.classList.add("price")
    price.textContent = productList[i].price
    item.appendChild(price);

    let button = document.createElement("button")

    button.textContent = "See product"
    item.appendChild(button);


}

