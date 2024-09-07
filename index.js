//console.log("Hello!");
//console.log("I like pizza");

//window.alert(`This is an alert!`)
//window.alert(`I like pizza`)

//document.getElementById("myh1").textContent = `Hello`;
//document.getElementById("myp").textContent = `I love pizza`;
//This is a comment
/* this is a comment
*/

//let x = 100;
//console.log(x);

/** 
let price = 10.99;
let age = 25;
let gpa = 3.75;
let firstName = "Sam";
console.log(typeof firstName);

console.log(`you are ${age} years old.`);
console.log(`The price is $${price}`);
console.log(`Your gpa is: ${gpa}`);
console.log(`your name is ${firstName}`)*/

/** 
let online =  true;
let isStudent = false;

console.log(`Id this student enrolled?: ${isStudent}`);
console.log(`Bro is Online: ${online}`);*/

/**
let fullName = "Samarpan Koirala";
let age = 25;
let student = true;

document.getElementById("p1").textContent = `Your full name is ${fullName}`;
document.getElementById("p2").textContent = `you are ${age} years old`;
document.getElementById("p3").textContent = `Are you a Student?: ${student}`;
*/

/** 
let students  = 30;
students += -1;
students  *= 2;
students /= 2;
students **= 3;

console.log(students);*/

// let result = 12 % 5 + 8 / 2; s
// console.log(result)

// let userName = window.prompt("What's yor userName?");
// console.log(userName);\
// let userName;
// document.getElementById("mySubmit").onclick = function(){
//     userName = document.getElementById("myText").value;
//     document.getElementById("myh1").textContent = `hello ${userName}`;
// }

// let age = Number(window.prompt("How old are you? "));
// age += 1;
// console.log(age, typeof(age));

// let x = "Pizza";
// let y = "Pizza";
// let z = "";
// z = Boolean(z);
// console.log(z, typeof(z));


// let radius;
// let circumference;
// document.getElementById("mySubmit").onclick = function(){
// const PI = 3.14159;
// radius = Number(document.getElementById("myText").value);

// circumference = 2 * PI * radius;

// document.getElementById("myh3").textContent = circumference;
// }

// const decreaseBTN = document.getElementById("decreaseBTN");
// const increaseBTN = document.getElementById("increaseBTN");
// const resetBTN = document.getElementById("resetBTN");
// const countLabel = document.getElementById("countLabel");
// let count = 0;

// increaseBTN.onclick = function(){
//     count++;
//     countLabel.textContent = count;
// }

// decreaseBTN.onclick = function(){
//     count--;
//     countLabel.textContent = count;
// }

// resetBTN.onclick = function(){
//     count = 0;
//     countLabel.textContent = count;
// }
// let x = 100;
// let y = 2;
// let z = 1;
// let max = Math.max(x,y,z);
// let min = Math.min(x,y,z);
// console.log(Math.PI);
// console.log(Math.E)
// console.log(Math.round(Math.PI))

// console.log(Math.round(x));
// console.log(Math.floor(x));
// console.log(Math.ceil(x));
// console.log(Math.trunc(x));
// console.log(Math.sqrt(x));
// console.log(max);
// console.log(min);

// const min = 50;
// const max = 100;
// let randomNum = Math.floor(Math.random() * (max - min)) + min;
// console.log(randomNum);


// const myButton = document.getElementById("myButton");
// const myLabel = document.getElementById("myLabel");
// const min  = 1;
// const max = 6;
// let randomNum;

// myButton.onclick = function(){
//     randomNum = Math.floor(Math.random() * max + min);
//     myLabel.textContent = randomNum;
// 


//  if (isStudent){
//     console.log("You are a student");
// }
// else{
//     console.log("You are not a student");
// }

let age;
document.getElementById("myButton").onclick = function(){
    age = document.getElementById("myText").value;
    if (age >= 100){
        document.getElementById("myLabel").textContent = "You are too OLD to enter this site";
    }
    else if (age == 0){
        document.getElementById("myLabel").textContent = "You can't enter. You were just born.";
    }
    else if (age >=18){
        document.getElementById("myLabel").textContent = "You are old enough to enter this site!";
    }
    else if (age < 0){
        document.getElementById("myLabel").textContent = "Your age can't be less than 0.";
    }
    else{
        document.getElementById("myLabel").textContent = "You must be 18+ to enter this site.";
    }
    
}





