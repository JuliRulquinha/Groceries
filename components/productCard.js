
function createCard(product)
{
    const cardDiv = document.createElement("div");
    const imageContainerDiv = document.createElement("div");
    const textContainerDiv = document.createElement("div");
    const nameContainerdiv = document.createElement("div");
    const mainDiv = document.getElementById("main-div");
    const paragraphElement = document.createElement("p");
    const productImgElement = document.createElement("img");
    const priceContainerDiv = document.createElement("div");
    const ratingContainerDiv = document.createElement("div");
    const quantityContainerDiv = document.createElement("div");
    let isAvailableContainerDiv = document.createElement("div");

    mainDiv.appendChild(cardDiv);
    cardDiv.appendChild(nameContainerdiv);
    cardDiv.appendChild(imageContainerDiv);
    cardDiv.appendChild(textContainerDiv);
    cardDiv.appendChild(priceContainerDiv);
    cardDiv.appendChild(ratingContainerDiv);
    cardDiv.appendChild(quantityContainerDiv);
    cardDiv.appendChild(isAvailableContainerDiv);
    
    
    cardDiv.className = "card-div";
    imageContainerDiv.className = "image-container";
    textContainerDiv.className = "text-container";
    nameContainerdiv.className = "name-container";
    priceContainerDiv.className = "price-container";
    ratingContainerDiv.className = "rating-container";
    quantityContainerDiv.className = "quantity-container";
    isAvailableContainerDiv.className = "availability-check";


    
    productImgElement.src = product.imgUrl;
    productImgElement.setAttribute("width","100%");
    productImgElement.setAttribute("height","100%");
    imageContainerDiv.appendChild(productImgElement);


    nameContainerdiv.innerText = product.name;
    paragraphElement.innerText = product.description;
    priceContainerDiv.innerText = "R$ "+product.price;
    textContainerDiv.appendChild(paragraphElement); 
    isAvailableContainerDiv = product.isAvailable;
    
    if(product.quantity > 0)
    {
        product.isAvailable = true;
        quantityContainerDiv.innerText = product.quantity+" in stock";
    
    }
    else
    {
        product.isAvailable = false;
        quantityContainerDiv.innerText = "This product is not available at the moment";
    }
    

   
}

