function clearAll()
{
    let editDiv = document.getElementById("edit-form-div");
    editDiv.innerHTML = "";
}

function updateProduct()
{
    
    const Name = document.getElementById("p-name").value;
    const ImgUrl = document.getElementById("p-img").value;
    const Description = document.getElementById("p-description").value;
    const Price = document.getElementById("p-price").value;
    const Quantity = document.getElementById("p-quantity").value;

    const body ={
        Name,
        ImgUrl,
        Description,
        Price,
        Quantity
    }
    fetch("https://localhost:7226/Products/Products",{
        method: "PUT",
        headers: {
            "Content-Type": "application/json"

        },
        body:JSON.stringify(body)
    }).then(response => response.json())
    .then(data =>{
            console.log(data);
    })
        
}

function showOrHideProductEditor(){

    let editDiv = document.getElementById("edit-form-div");
    
    if(editDiv.hasAttribute("hidden")){
        editDiv.removeAttribute("hidden");
    }
    else if(editDiv.hasAttribute("hidden") == false)
    {
        editDiv.getAttribute("hidden");
    }

}