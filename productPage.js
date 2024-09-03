
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
    product = products.filter(p => p.id == idParam);   
    
    
    console.log(product[0]);
    //" draw "  the product on the screen

    let imgEL = document.getElementById("p-img");
    imgEL.src = product[0].imgUrl;
    console.log(imgEL);
    
});






