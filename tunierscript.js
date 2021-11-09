


function hinzufügen() {

var namen1 = document.getElementById("namen1").value;


if(sessionStorage.getItem("storage1") != null){
arrayNew = sessionStorage.getItem("storage1") + "/" + namen1;
}
else{
    arrayNew = namen1 ;
}

sessionStorage.setItem("storage1", arrayNew);




console.log(sessionStorage.getItem("storage1"));



var namenFürAuslosung  = document.createElement("li");
namenFürAuslosung.innerHTML = namen1;
document.getElementById("namenFürAuslosung").appendChild(namenFürAuslosung);




}

function leeren1(){
    sessionStorage.clear();
    location.reload();
}


function auslosen(){
    var arraySplited = sessionStorage.getItem("storage1").split("/");



    
    let alleResults = [];
    let neueReihenfolge =[];
   

    for (let index = 0; index < 100; index++){
        
        
        
        let max = arraySplited.length -1;
        let min = 0;
        let step1 = max - min +1;
        let step2 = Math.random()*step1
        let result = Math.floor(step2)+ min;

        if (alleResults.includes(result) == false){
            neueReihenfolge.push(result);
        }

        
    
        
        alleResults.push(result)
        
        
       
    }

console.log(neueReihenfolge);

let newNeu = [];
for (let index = 0; index < neueReihenfolge.length; index++){
    let indexZahl = neueReihenfolge[index];


   
    

    //var interator = newNeu.values();



if (index %2 != 0){
    newNeu.push(" vs " + arraySplited[indexZahl] + ".");
    
}
else{
   

    newNeu.push(arraySplited[indexZahl]);
}



    }

    var newNeuString = newNeu.toString();

    var newNeu1 = newNeuString.replace(/,/g, "").split(".");

    var newNeu2 = newNeu1.values();

    
    
   localStorage.setItem("storage1", newNeuString);
   
    
    


  //  for (let letter of interator) {
  //      console.log(letter);
  //    }







  for (let letter of newNeu2) {
    
    
  
var auslosung = document.createElement("li")

auslosung.innerHTML = letter;
document.getElementById("auslosungErgebnis").appendChild(auslosung);
  }






    

}


//Datenbank und Server
async function submitVerarbeiten1() {
    let formData = new FormData(document.forms[0]);
    let string = localStorage.getItem("storage1");
    let stringFormData1 = formData.append("Bestellung", string);
    let url = "https://pongalong1.herokuapp.com/senden";
    let query = new URLSearchParams(formData);
    let query2 = new URLSearchParams(stringFormData1);
    url += "?" + query.toString() + query2;
    let response = await fetch(url);
    let answer = response.toString();
    //let split = answer.split("},");
console.log(answer);
    
}





//# sourceMappingURL=tunierscipt.js.map