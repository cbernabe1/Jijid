let btnyes = document.querySelector(".yesBtn");
let btnno = document.querySelector(".noBtn");
let ans = document.querySelector(".answer");
var counter = 0;
let gifImage = document.getElementById("gif");
const yesAnswer= "Dapat lang nanananana, no choice ka!";
const noAnswer = "k fine.";

function YesAnswer(){
    ans.innerHTML = yesAnswer;
    gifImage.setAttribute("src","https://giphy.com/embed/xT77XGJnyyqx2PFwDC");
    gifImage.style.display = "flex";
}

function NoAnswer(){
    ans.innerHTML = noAnswer;
    gifImage.setAttribute("src","https://giphy.com/embed/duf84Bx74ujSXvJs0I");
    gifImage.style.display = "flex";
}