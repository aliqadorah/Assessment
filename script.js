fun();
async function fun(){
    const response = await fetch("https://countriesnow.space/api/v0.1/countries/info?returns=currency,flag,unicodeFlag,dialCode");
    const data = await response.json();
    var contact = document.querySelector("#content");
    contact.innerHTML = "";
    switch(document.querySelector("#list").value) {
        case "name":
            data["data"].forEach(element => {
                contact.innerHTML += element.name + "<br>";
                contact.innerHTML += "<h1>-------------------------------------------------------------------</h1>";
            });
            break;
        
        case "currency":
            data["data"].forEach(element => {
                contact.innerHTML += element.currency + "<br>";
                contact.innerHTML += "<h1>-------------------------------------------------------------------</h1>";
            });
            break;

        case "unicodeFlag":
            data["data"].forEach(element => {
                contact.innerHTML += element.unicodeFlag + "<br>";
                contact.innerHTML += "<h1>-------------------------------------------------------------------</h1>";
            });
            break;

        case "flag":
            data["data"].forEach(element => {
                contact.innerHTML += element.flag + "<br>";
                contact.innerHTML += "<h1>-------------------------------------------------------------------</h1>";
            });
            break;

        case "dialCode":
            data["data"].forEach(element => {
                contact.innerHTML += element.dialCode + "<br>";
                contact.innerHTML += "<h1>-------------------------------------------------------------------</h1>";
            });
            break;

        default:
            data["data"].forEach(element => {
                contact.innerHTML += element.name + "<br>";
                contact.innerHTML += "<h1>-------------------------------------------------------------------</h1>";
            });
            break;
    }
    
};

