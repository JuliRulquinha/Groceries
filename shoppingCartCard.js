



function createShoppingCartCard(product){
    
    debugger;
    const cartDiv = document.getElementById("cart-div");
    const productDiv = document.createElement("div");
    const productItem = document.createElement("div");
    const productName = document.createElement("span");
    const productPrice = document.createElement("span");
    const productImg = document.createElement("img");

    
    productDiv.appendChild(productItem);
    productItem.appendChild(productImg);
    productItem.appendChild(productName);
    productItem.appendChild(productPrice);
    cartDiv.appendChild(productDiv);


    productDiv.className = "cart-product-div";
    productItem.className = "cart-item-div";
    productName.className = "cart-product-name";
    productPrice.className = "cart-product-price";
    productImg.className = "cart-product-img";

    

}

function showCartContent(){


    let cartDiv = document.getElementById("cart-div");
    
    if(cartDiv.hasAttribute("hidden")){
        cartDiv.removeAttribute("hidden");
    }
    else if(cartDiv.hasAttribute("hidden") == false)
    {
        cartDiv.setAttribute("hidden", true);
    }
}

function closeCartTab(){

    let cartDiv = document.getElementById("cart-div");
    
    if(cartDiv.hasAttribute("hidden") == false)
    {
        cartDiv.setAttribute("hidden", "");
    }
}

function getProduct(){

    fetch(`https://localhost:7226/Products/${idParam}`,{
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
        
    }).then(response => response.json())
    .then(product => {
        let imgEL = document.getElementById("p-img");
        imgEL.src = product.imgUrl;
        console.log(imgEL);
        
        let nameEL = document.getElementById("p-name");
        nameEL.innerText = product.name;
    
        let priceEL = document.getElementById("p-price");
        priceEL.innerText = "R$: "+product.price;
    
    })
}