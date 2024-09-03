
function createMainPage(){
    
    const mainDiv = document.getElementById("main-div");
     
}

//TODO Read the querystring
var querystring = window.location.search;
var urlParameters = new URLSearchParams(querystring);

// retrieve the id property
let idParam = urlParameters.get("id");


let products = [];
let product = {};

fetch("productBasket.json")
.then(response => response.json())
.then(productsReceived => {
    products = productsReceived;         
    // use the id property to obtain the corresponding object from products array
    product = products.filter(p => p.id == idParam)[0];   
    
    
    console.log(product[0]);
    //" draw "  the product on the screen

    let imgEL = document.getElementById("p-img");
    imgEL.src = product.imgUrl;
    console.log(imgEL);
    
    let nameEL = document.getElementById("p-name");
    nameEL.innerText = product.name;
    

    let infoEL = document.getElementById("p-description");
    infoEL.innerText = product.description;

    let priceEL = document.getElementById("p-price");
    priceEL.innerText = "R$: "+product.price;

    let quantityEL = document.getElementById("p-quantity");
    quantityEL.innerText = product.quantity+" in stock";
});






