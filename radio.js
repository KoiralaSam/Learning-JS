const myCheckbox = document.getElementById("myCheckBox");
const myVisa = document.getElementById("myVisa");
const myMasterCard = document.getElementById("myMasterCard");
const myPayPal = document.getElementById("myPayPal");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
    if (myCheckbox.checked){
        subResult.textContent = "You are subscribed!";
    }
    else{
        subResult.textContent ="You are NOT subscribed!";
    }

    if (myVisa.checked){
        paymentResult.textContent = "You are paying with Visa";
    }
    else if(myMasterCard.checked){
        paymentResult.textContent = "You are paying with Master Card";
    }
    else if(myPayPal.checked){
        paymentResult.textContent = "You are paying with PayPal Card";
    }
    else{
        paymentResult.textContent = "You have NOT selected a payment option!"
    }
}