function namenList() {

    var array1 = localStorage.getItem("storage");
    var namen1 = document.getElementById("namen1").value;
    var namen2 = document.getElementById("namen2").value;
    var arrayNew;
    arrayNew = namen1 + "/" + namen2;
    localStorage.setItem("storage", arrayNew);
    var name1 = document.createElement("li");
    name1.innerHTML = localStorage.getItem("storage");
    document.getElementById("12").appendChild(name1);
}
function leeren() {
    localStorage.clear();
}
function loschen() {
    var ulElem = document.getElementById("12");
    ulElem.removeChild(ulElem.childNodes[0]);
}


function success() {
	 if(document.getElementById("namen1").value==="") {
            document.getElementById("button1").disabled = true;
        } else {
            document.getElementById("button1").disabled = false;
        }
    }


function namenList() {

    var array1 = localStorage.getItem("storage");
    var namen1 = document.getElementById("namen1").value;
    var namen2 = document.getElementById("namen2").value;
    var arrayNew;
    arrayNew = namen1 + "/" + namen2;
    localStorage.setItem("storage", arrayNew);
    var name1 = document.createElement("li");
    name1.innerHTML = localStorage.getItem("storage");
    document.getElementById("12").appendChild(name1);
}
function leeren() {
    localStorage.clear();
}
function loschen() {
    var ulElem = document.getElementById("12");
    ulElem.removeChild(ulElem.childNodes[0]);
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
        let url = "https://pongalong1.herokuapp.com/senden";
        let query = new URLSearchParams(formData);
        let query2 = new URLSearchParams(stringFormData1);
        url += "?" + query.toString() + query2;
        let response = await fetch(url);
        let responseUrl = response.url;}