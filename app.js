// var userOutput=prompt("Welcome whats your name?");
// alert("Welcome "+userOutput);
var txtArea=document.querySelector("#txt-area");
var txtAreaOutput=document.querySelector("#txt-area-output");

var translatebtn=document.querySelector("#btn-translate");
translatebtn.addEventListener("click",btnClicked);
function btnClicked(){
    var inputvalue=txtArea.value;
    txtAreaOutput.innerText=inputvalue;
}



