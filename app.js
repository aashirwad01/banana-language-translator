// var userOutput=prompt("Welcome whats your name?");
// alert("Welcome "+userOutput);
var txtArea=document.querySelector("#txt-area");
var txtAreaOutput=document.querySelector("#txt-area-output");

var translatebtn=document.querySelector("#btn-translate");
translatebtn.addEventListener("click",btnClicked);
var url="https://api.funtranslations.com/translate/minion.json"

function urlgenerator(url,text){
    var encodedURI=encodeURI(text);
    return `${url}?text=${encodedURI}`;}

function btnClicked(){
    
    var inputvalue=txtArea.value;
    var finalURL=urlgenerator(url,inputvalue);
    console.log(finalURL);
    
    fetch(finalURL)
    .then( response => response.json())
    .then( json => {txtAreaOutput.innerText=json.contents.translated})
    .catch(() => alert("error happended"))
}





