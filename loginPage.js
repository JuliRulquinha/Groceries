function getUser(){

    debugger;
    let Email = document.getElementById("email").value;
    let Password = document.getElementById("password").value;

    const body={
        Email,
        Password,
    }

    fetch(`https://localhost:7226/User/Authenticate`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(body)
    }).then(response => {
        debugger;
        if(response.status === 200){
            return response.json()
        }
    }).then(data => { 
        debugger;
        console.log(data);
        window.location.href = window.location.origin+"?token="+data.token;
    });
    
}

//TODO Read the querystring
var querystring = window.location.search;
var urlParameters = new URLSearchParams(querystring);

// retrieve the id property
let idParam = urlParameters.get("token");