
function createMainPage(){
    
    const mainDiv = document.getElementById("main-div");
     
}

//TODO Read the querystring
var querystring = window.location.search;
var urlParameters = new URLSearchParams(querystring);

// retrieve the id property
let idParam = urlParameters.get("id");

function deleteProduct(){
    fetch(`https://localhost:7226/Products/Products/Delete/${idParam}`,{
        method: "DELETE",
        headers: {
            "Content-Type":"application/json"
        }
    })
    .then(data => {
        
        alert("Product deleted succesfully.");
        window.location.href = "http://127.0.0.1:5500/";
    })
}

function updateProduct(){
    debugger
    fetch(`https://localhost:7226/Products/Products/Update/${idParam}`,{
        method: "PUT",
        headers:{
            "Content-Type":"application/json"
        }
        
    }).then(response => response.json())
    .then(product => {
        let imgEL = document.getElementById("img-url");
        imgEL.src = product.imgUrl;
        console.log(imgEL);
        
        let nameEL = document.getElementById("txt-name");
        nameEL.innerText = product.name;
        
    
        let infoEL = document.getElementById("description-txt");
        infoEL.innerText = product.description;
    
        let priceEL = document.getElementById("price");
        priceEL.innerText = "R$: "+product.price;
    
        let quantityEL = document.getElementById("quantity");
        quantityEL.innerText = product.quantity+" in stock";
    })
}

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
    

    let infoEL = document.getElementById("p-description");
    infoEL.innerText = product.description;

    let priceEL = document.getElementById("p-price");
    priceEL.innerText = "R$: "+product.price;

    let quantityEL = document.getElementById("p-quantity");
    quantityEL.innerText = product.quantity+" in stock";
})

let products = [];
let product = {};

// fetch("productBasket.json")
// .then(response => response.json())
// .then(productsReceived => {
//     products = productsReceived;         
//     // use the id property to obtain the corresponding object from products array
//     product = products.find(p => p.id == idParam);   
    
    
//     console.log(product[0]);
//     //" draw "  the product on the screen

//     let imgEL = document.getElementById("p-img");
//     imgEL.src = product.imgUrl;
//     console.log(imgEL);
    
//     let nameEL = document.getElementById("p-name");
//     nameEL.innerText = product.name;
    

//     let infoEL = document.getElementById("p-description");
//     infoEL.innerText = product.description;

//     let priceEL = document.getElementById("p-price");
//     priceEL.innerText = "R$: "+product.price;

//     let quantityEL = document.getElementById("p-quantity");
//     quantityEL.innerText = product.quantity+" in stock";
// });

function increaseQuantity()
{
    let numberEl = document.getElementById("number");
    let number = Number(numberEl.innerText);



    if(number >= product.quantity)
    {
        return;
    }

    number++;
    numberEl.innerText = number;    
}

function decreaseQuantity()
{
    let numberEl = document.getElementById("number");
    let number = Number(numberEl.innerText);

    if(number <= 1)
    {   
        return;
    }

    number--;
    numberEl.innerText = number; 
}

function clearAll()
{
    let editDiv = document.getElementById("edit-form-div");
    editDiv.innerHTML = "";
}


function showOrHideProductEditor(){

    let editDiv = document.getElementById("edit-form-div");
    
    if(editDiv.hasAttribute("hidden")){
        editDiv.removeAttribute("hidden");
    }
    else if(editDiv.hasAttribute("hidden") == false)
    {
        editDiv.setAttribute("hidden", true);
    }

}

function updateProductWithBody(event)
{
  
    event.preventDefault();
    const Name = document.getElementById("txt-name").value;
    const ImgUrl = document.getElementById("img-url").value;
    const Description = document.getElementById("description-txt").value;
    const Price = document.getElementById("price").value;
    const Quantity = document.getElementById("quantity").value;

    const body ={
        Name,
        ImgUrl,
        Description,
        Price,
        Quantity
    };
    const url = `https://localhost:7226/Products/Products/Update/${idParam}`;
    fetch(url,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json"

        },
        body:JSON.stringify(body)
    }).then(data =>{
            console.log(data);
            alert("Product was succesfully saved.");
            window.location.href = `http://127.0.0.1:5500/product.html?id=${idParam}`;
    })
    
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