function createShoppingCartCard(product){

    const cartDiv = document.getElementById("cart-div");
    const productDiv = document.createElement("div");
    const productItem = document.createElement("div");
    const productData = document.createElement("div");
    const productName = document.createElement("span");
    const productPrice = document.createElement("span");
    const productImg = document.createElement("img");

    cartDiv.appendChild(productDiv);
    productDiv.appendChild(productItem);
    productItem.appendChild(productImg);
    productItem.appendChild(productData);
    productItem.appendChild(productName);
    productItem.appendChild(productPrice);


    cartDiv.className = "cart-product-card-div";
    productDiv.className = "cart-product-div";
    productItem.className = "cart-item-div";
    productData.className = "cart-item-data";
    productName.className = "cart-product-name";
    productPrice.className = "cart-product-price";
    productImg.className = "cart-product-img";

    productImg.src = product.imgUrl;
    productImg.setAttribute("width","100%");
    productImg.setAttribute("height","100%");
    


}

function showCartContent(){

    createShoppingCartCard(product);

    let cartDiv = document.getElementById("cart-div");
    
    if(cartDiv.hasAttribute("hidden")){
        cartDiv.removeAttribute("hidden");
    }
    else if(cartDiv.hasAttribute("hidden") == false)
    {
        cartDiv.setAttribute("hidden", true);
    }
}