



function createShoppingCartCard(product){
    
    debugger;
    const cartDiv = document.getElementById("cart-div");
    const productDivEl = document.createElement("div");
    const productItemEl = document.createElement("div");
    const productPriceAndBinDivEl = document.createElement("div");
    const productNameEl = document.createElement("span");
    const productPriceEl = document.createElement("span");
    const productImgEl = document.createElement("img");
    const trashBinEl = document.createElement("img");

    productImgEl.src = product.imgUrl;
    productNameEl.innerText = product.name;
    productPriceEl.innerText = "R$: "+product.price; 
    trashBinEl.src = `https://cdn-icons-png.flaticon.com/512/54/54324.png`;

    productItemEl.appendChild(productImgEl);
    productItemEl.appendChild(productNameEl);
    productPriceAndBinDivEl.appendChild(trashBinEl);  
    productPriceAndBinDivEl.appendChild(productPriceEl);  
    productDivEl.appendChild(productItemEl);
    productDivEl.appendChild(productPriceAndBinDivEl);
    cartDiv.appendChild(productDivEl);

    productDivEl.className = "cart-product-div";
    productItemEl.className = "cart-item-div";
    productNameEl.className = "cart-product-name";
    productPriceEl.className = "cart-product-price";
    productImgEl.className = "cart-product-img";
    trashBinEl.className = "cart-product-trash-bin";
    productPriceAndBinDivEl.className = "cart-product-price-trash-bin-div";

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