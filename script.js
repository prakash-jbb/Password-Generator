console.log("Runing....");
var display = document.querySelector(".displayPwd");
var copyBtn = document.querySelector(".copyBtn");


var charA = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';:.*/-&$@!";



function genPwd(){
    var pwd = "";
    for(i=1;i<12;i++){
        var postion = Math.floor(Math.random()*73);
        var result = charA.charAt(postion)
        pwd+=result;
    }
    display.value=pwd;
    copyBtn.innerHTML="Copy";
}


function copyPwd(){
    copyBtn.innerHTML="Copied";
    navigator.clipboard.writeText(display.value);
}

// document.querySelector(".copyBtn").copyBtn.innerHTML="Copy";

document.querySelector(".displayPwd").addEventListener("change",() =>{
    copyBtn.innerHTML="Copy";
}
)