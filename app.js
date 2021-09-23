// var userOutput=prompt("Welcome whats your name?");
// alert("Welcome "+userOutput);
var txtArea=document.querySelector("#txt-area");
var txtAreaOutput=document.querySelector("#txt-area-output");

var translatebtn=document.querySelector("#btn-translate");
translatebtn.addEventListener("click",btnClicked);
url="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
function urlgenerator(url,text){
    return url+"?text="+text;}

function btnClicked(){
    
    var inputvalue=txtArea.value;
    
    fetch(urlgenerator(url,inputvalue))
    .then( response => response.json())
    .then( json => {txtAreaOutput.innerText=json.contents.translated});
}




