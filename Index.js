let product = 
    {
        "name": String,
        "imgUrl": String,
        "description": String
    }
  
    function createProduct(name, imgUrl, description)
    {
        //^1. Assign desired values as parameters 
        //^2. Parameters become now the value of each property of the object "product"
        return {

            name,
            imgUrl,
            description

        }
    }



let productBasket = [createProduct("Apricot",`https://cdn.britannica.com/36/160636-050-B1DC5C0A/Laetrile-apricot-pits.jpg`,
    `Similar in shape to a peach, the product is nearly smooth, 
    round to oblong in some varieties, 
    and somewhat flattened but with little 
    to no hairiness when ripe. Its flesh is 
    typically a rich yellow to yellowish orange.`), 
    createProduct("Banana","https://static.libertyprim.com/files/familles/banane-large.jpg?1569271725",`Bananas are long, curved products with smooth skin 
    that are usually yellow, but can also be green, red, 
    or purple depending on the variety. 
    They are about 7 to 9 inches long and 2 to 3 inches in diameter.`), 
    createProduct("Strawberry",`https://www.collinsdictionary.com/images/full/strawberry_227472010.jpg`
    ,`Strawberries are soft, sweet, and juicy red berries that grow on low-flowering plants. 
    They have tiny edible seeds that cover their surface and are 
    the enlarged ends of the plant's stamen.`
    )];


function showStatusOfproduct()
{
    // 1. Get the object in product basket.
    // 2. Alert its stats when the user clicks on the corresponding div.
    

}

function createCard(product)
{
    const newDiv = document.createElement("div");
    const imageContainerDiv = document.createElement("div");
    const textContainerDiv = document.createElement("div");

    const mainDiv = document.getElementById("main-div");
    mainDiv.appendChild(newDiv);
    newDiv.appendChild(imageContainerDiv);
    newDiv.appendChild(textContainerDiv);
 
    imageContainerDiv.className = "image-container";
    textContainerDiv.className = "text-container";

    const productImgElement = document.createElement("img");
    productImgElement.src = product.imgUrl;
    productImgElement.setAttribute("width","100%");
    productImgElement.setAttribute("height","100%")
    imageContainerDiv.appendChild(productImgElement);

    const paragraphElement = document.createElement("p");
    paragraphElement.innerText = product.name;
    textContainerDiv.appendChild(paragraphElement); 

    const paragraphElement2 = document.createElement("p");
    paragraphElement2.innerText = product.description;
    textContainerDiv.appendChild(paragraphElement2);
}

for(let product of productBasket)
    {
        createCard(product);
    }

