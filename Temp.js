const textBox = document.getElementById("textBox");
const CelciustoFarenheit = document.getElementById("CelciustoFarenheit");
const KelvinToFarenheit = document.getElementById("KelvinToFarenheit");
const FarenheitToCelcius = document.getElementById("FarenheitToCelcius");
const KelvinToCelcius = document.getElementById("KelvinToCelcius");
const FarenheitToKelvin = document.getElementById("FarenheitToKelvin");
const CelciusToKelvin = document.getElementById("CelciusToKelvin");
const result = document.getElementById("result");
let temp;

function convert(){
    if(CelciustoFarenheit.checked){
        temp = Number(textBox.value);
        temp = temp  * 9 / 5 + 32;
        result.textContent = temp.toFixed(2) + "°F";
    }
    else if(KelvinToFarenheit.checked){
        temp = Number(textBox.value);
        temp = (temp - 273.15) * (9/5) + 32;
        result.textContent = temp.toFixed(2) + "°F";
    }
    else if(FarenheitToCelcius.checked){
        temp = Number(textBox.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(2) + "°C";
    }
    else if(KelvinToCelcius.checked){
        temp = Number(textBox.value);
        temp = (temp - 273.15);
        result.textContent = temp.toFixed(2) + "°C";
    }
    else if(FarenheitToKelvin.checked){
        temp = Number(textBox.value);
        temp = (temp - 32) * (5.9) + 273.15;
        result.textContent = temp.toFixed(2) + "K";
    }
    else if(CelciusToKelvin.checked){
        temp = Number(textBox.value);
        temp = (temp + 273.15);
        result.textContent = temp.toFixed(2) + "K";
    }
    else{
        result.textContent = "Please Select a Unit";
    }
}