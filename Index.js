let product = 
{
    "name": String,
    "imgUrl": String,
    "description": String,
    "price": Number,
    "quantity": Number,
    "isAvailable": true
}
  
function createProduct(name, imgUrl, description,price, quantity,isAvailable)
{
    //^1. Assign desired values as parameters 
    //^2. Parameters become now the value of each property of the object "product"
    return {

        name,
        imgUrl,
        description,
        price,
        quantity,
        isAvailable

    }
}

let productBasket = [createProduct("APRICOT",`https://cdn.britannica.com/36/160636-050-B1DC5C0A/Laetrile-apricot-pits.jpg`,
    `Similar in shape to a peach, the product is nearly smooth, 
    round to oblong in some varieties, 
    and somewhat flattened but with little 
    to no hairiness when ripe. Its flesh is 
    typically a rich yellow to yellowish orange.`, 23.99, 200, true), 
    createProduct("BANANA","https://static.libertyprim.com/files/familles/banane-large.jpg?1569271725",`Bananas are long, curved products with smooth skin 
    that are usually yellow, but can also be green, red, 
    or purple depending on the variety. 
    They are about 7 to 9 inches long and 2 to 3 inches in diameter.`, 7.99, 5000, true), 
    createProduct("STRAWBERRY",`https://www.collinsdictionary.com/images/full/strawberry_227472010.jpg`
    ,`Strawberries are soft, sweet, and juicy red berries that grow on low-flowering plants. 
    They have tiny edible seeds that cover their surface and are 
    the enlarged ends of the plant's stamen.`,10.99, 1000, true)];

    productBasket.sort( (a,b) => b.price - a.price);

for(let product of productBasket)
{
    createCard(product);
}

function reorder(event)
{
    console.log(event.target.value);

    switch(event.target.value)
    {
        case "highest price":
            productBasket.sort( (a,b) => b.price - a.price);
        break;

        case "lowest price":
            productBasket.sort( (a,b) => a.price - b.price);
        break;

        case "name":
            productBasket.sort((a,b) => 
                {
                    if(a.name > b.name)
                        return 1;
                    else if(a.name < b.name)
                        return -1;
                });
        break;
    }
    
    clearAll();

    for(let product of productBasket)
    {
        createCard(product);
    }
        
}

function clearAll()
{
    let mainDiv = document.getElementById("main-div");
    mainDiv.innerHTML = "";
}

function addProduct()
{
    const name = document.getElementById("p-name").value;
    const imgUrl = document.getElementById("p-img").value;
    const description = document.getElementById("p-description").value;
    const price = document.getElementById("p-price").value;
    const quantity = document.getElementById("p-quantity").value;

    let newProduct = createProduct(name, imgUrl, description, price, quantity, true);

    createCard(newProduct);

    
}