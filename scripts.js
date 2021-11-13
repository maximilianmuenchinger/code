
submitVerarbeiten2();

async function submitVerarbeiten2() {
    let formData = new FormData(document.forms[0]);
    let url = "https://pongalong3.herokuapp.com";
    let query = new URLSearchParams(formData);
    url += "?" + query.toString();
    console.log(url);
    let response2 = await fetch(url);
    let answer = await response2.text();
    
    



    var name1 = document.createElement("li");
    name1.innerHTML = answer;
    document.getElementById("12").appendChild(name1);
    
}








function namenList() {

    var array1 = localStorage.getItem("storage");
    var namen1 = document.getElementById("namen1").value;
    var namen2 = document.getElementById("namen2").value;
    var arrayNew;
    arrayNew = namen1 + "/" + namen2;
    localStorage.setItem("storage", arrayNew);
    

//Aus Server einfügen

}
function leeren() {
    localStorage.clear();
}
async function loschen() {
    
        
        
        
        let url = "https://pongalong2.herokuapp.com";
        
        let response = await fetch(url);

        document.getElementById("12").innerHTML = "";
        submitVerarbeiten2();

}




function success() {
	 if(document.getElementById("namen1").value==="") {
            document.getElementById("button1").disabled = true;
        } else {
            document.getElementById("button1").disabled = false;
        }
    }


    async function submitVerarbeiten1() {
        let formData = new FormData(document.forms[0]);
        let string = localStorage.getItem("storage");
        
        let stringFormData1 = formData.append("Bestellung", string);
        let url = "https://pongalong1.herokuapp.com/senden" + string;
        let query = new URLSearchParams(formData);
        let query2 = new URLSearchParams(stringFormData1);
        url += "?" + query.toString() + query2;
        let response = await fetch(url);
        let responseUrl = response.url;
        console.log(responseUrl);
        document.getElementById("12").innerHTML = "";
        submitVerarbeiten2();
    }