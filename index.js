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

// function happyBirthday(userName, age){
//     console.log("Happy Birthday to you!");
//     console.log("Happy Birthday to you!");
//     console.log(`Happy Birthday dear ${userName}!`);
//     console.log(`Happy Birthday to you! You are ${age} years old`);
// }

// happyBirthday("Samarpan", 25);

// function isEven(number){
//     return number % 2 == 0 ? true: false;
// }
// console.log(isEven(16)); 

// function isValidEmail(Email){
//     return Email.includes("@") == true ? true : false;
// }
// console.log(isValidEmail("Samgmail.com"));

// const textBox = document.getElementById("textBox");
// const CelciustoFarenheit = document.getElementById("CelciustoFarenheit");
// const KelvinToFarenheit = document.getElementById("KelvinToFarenheit");
// const FarenheitToCelcius = document.getElementById("FarenheitToCelcius");
// const KelvinToCelcius = document.getElementById("KelvinToCelcius");
// const FarenheitToKelvin = document.getElementById("FarenheitToKelvin");
// const CelciusToKelvin = document.getElementById("CelciusToKelvin");
// const result = document.getElementById("result");
// let temp;

// function convert(){
//     if(CelciustoFarenheit.checked){
//         temp = Number(textBox.value);
//         temp = temp  * 9 / 5 + 32;
//         result.textContent = temp.toFixed(2) + "°F";
//     }
//     else if(KelvinToFarenheit.checked){
//         temp = Number(textBox.value);
//         temp = (temp - 273.15) * (9/5) + 32;
//         result.textContent = temp.toFixed(2) + "°F";
//     }
//     else if(FarenheitToCelcius.checked){
//         temp = Number(textBox.value);
//         temp = (temp - 32) * (5/9);
//         result.textContent = temp.toFixed(2) + "°C";
//     }
//     else if(KelvinToCelcius.checked){
//         temp = Number(textBox.value);
//         temp = (temp - 273.15);
//         result.textContent = temp.toFixed(2) + "°C";
//     }
//     else if(FarenheitToKelvin.checked){
//         temp = Number(textBox.value);
//         temp = (temp - 32) * (5.9) + 273.15;
//         result.textContent = temp.toFixed(2) + "K";
//     }
//     else if(CelciusToKelvin.checked){
//         temp = Number(textBox.value);
//         temp = (temp + 273.15);
//         result.textContent = temp.toFixed(2) + "K";
//     }
//     else{
//         result.textContent = "Please Select a Unit";
//     }
// }

//  const food1 = "Hamburger";
//   const food2 = "Pizza";
//   const food3 = "Sushi";
//   const food4 = "hotdog";
//   const food5 = "ramen";


// function getFoods(...foods){
//    return foods;
//  }

//   function openFridge(...foods){
//      console.log(...foods);
//   }

//   const foods = getFoods(food1, food2, food3, food4, food5);

//   openFridge(food1, food2, food3, food4, food5);
// function rollDice(){

//     const numOfDice = document.getElementById("numOfDice").value;
//     const diceResult = document.getElementById("diceResult");
//     const diceImages = document.getElementById("diceImages");
//     const values = [];
//     const images = [];

//     for(let i = 0; i<numOfDice; i++){
//         const ranVal = Math.floor(Math.random() * 6 + 1);
//         values.push(ranVal);
//         images.push(`<img src = "/${ranVal}.png">`);
//     }

//     diceResult.textContent = `dice: ${values.join(", ")}`;
//     diceImages.innerHTML  = images.join('');
//  }

// function generatePassword(length, hasUpper, hasLower, hasSymbols, hasNumbers){
//     const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const lower = "abcdefghijklmnopqrstuvwxyz";
//     const symbols = "!@#$%^&*()_";
//     const numbers = "1234567890";
//     let password = "";

//     let availStr = "";
//     availStr += hasUpper ? upper : ''; 
//     availStr += hasLower ? lower : ''; 
//     availStr += hasSymbols ? symbols : ''; 
//     availStr += hasNumbers ? numbers : ''; 

//     if(length < 1){
//         return `Password length must be at least 1`;
//     }

//     if (availStr.length === 0){
//         return `At least one set of character needs to be selected!`;
//     }

//     for (let i = 0; i < length; i++){
//         const randNum = Math.floor(Math.random() * availStr.length);
//         password += availStr[randNum];
//     }
//     return password;
// }

// const length = 100;
// const hasUpper = false;
// const hasLower = false;
// const hasSymbols = false;
// const hasNumbers = true; 

// const password = generatePassword(length, hasUpper, hasLower, hasSymbols, hasNumbers);

// console.log(password);

//CALLBACKS and for each
//for each provides element, index and array to the callback function within.

// let numbers = [1,2,3,4,5];
// numbers.forEach(cube);
// numbers.forEach(display);

// function double(element, index, array){
//     array[index] = 2 * element;
// }

// function square(element, index, array){
//     array[index] = Math.pow(element, 2);
// }

// function cube(element, index, array){
//     array[index] = Math.pow(element, 3);
// }

// function display(element){
//     console.log(element);
// }

// let fruits = ["apple", "orange", "banana", "kiwi"]

// fruits.forEach(uppercase);
// fruits.forEach(lowerCase);
// fruits.forEach(capitalize);
// fruits.forEach(display);


// function uppercase(element, index, array){
//     array[index] = element.toUpperCase();
// }

// function lowerCase(element, index, array){
//     array[index] = element.toLowerCase();
// }

// function capitalize(element, index, array){
//     array[index] = element.charAt(0).toUpperCase() + element.substring(1);
// }
// function display(element){
//     console.log(element);
// }
// MAPS also provides element, index and array but returns a new array unlike for Each

// const numbers = [1,2,3,4,5]

// const squares = numbers.map(square);
// const cubes = numbers.map(cube);

// function cube(element){
//     return Math.pow(element, 3);
// }
// function square(element){
//     return Math.pow(element, 2);
// }
// console.log(squares);
// console.log(cubes);

// const dates = ["2024-1-10", "2025-2-20", "2025-4-31"];
// const formattedDates = dates.map(formatdates);
// console.log(formattedDates);
// function formatdates(element){
//     const parts = element.split("-");
//     return `${parts[1]}/${parts[2]}/${parts[0]}`;
// }

// //Filter creates a new array by filtering the elements based on the condition
// let numbers = [1,2,3,4,5,6,7,8];
// let evenNums = numbers.filter(iseven);
// let oddNums = numbers.filter(isOdd);
// console.log(evenNums);
// console.log(oddNums);
// function iseven(element){
//     return element % 2 === 0;
//     }
// function isOdd(element){
//     return element % 2 !== 0;
// }

//.reduce() = reduce the elements of an array to a single value
// const prices = [5, 30, 15, 25,0, 6];
// const total = prices.reduce(sum);
// console.log(`$${total.toFixed(2)}`);
// function sum(prevTotal, next){
//     return prevTotal + next;
// }

//function declaration
// const nums = [1,3,5,7,9,32];
// const squares = nums.map(function(element){
//     return Math.pow(element,2);
// });
// const evenNums = nums.filter(function(element){
//     return element%2==0;
// })
// const oddNums = nums.filter(function(element){
//     return element % 2 !== 0;
// })
// console.log(squares);
// console.log(evenNums);
// console.log(oddNums);

//Arraow functions - good functions that ypu only use once
// regular function
// function hello(){
//     console.log("Hello");
// }
// hello();

//function expression
// const hello = function(){
//     console.log("Hello")
// }
// hello();

// //arrow function
// const hello = (name, age) => {console.log(`Hello ${name}`)
//                         console.log(`You are ${age} years old!`)};
// hello("Samarpan",21);

//Timeout function (based on observation it runs after all other methods in a block of code even if the time is less!)
// function hello(){
//     console.log("Hello");
// }
// setTimeout(() => console.log("Hello"), 30000``);

// const nums = [1,2,3,4,5,6];
// const squares = nums.map((element)=> Math.pow(element,2));
// console.log(squares);
// const cubes = nums.map((element)=>Math.pow(element,3));
// console.log(cubes);
// const evenNums = nums.filter((element)=>element%2==0);
// console.log(evenNums);
// const oddNums = nums.filter((element)=>element%2!=0);
// console.log(oddNums);
// const total = nums.reduce((accumulator, element)=>accumulator+element);
// console.log(total);

// JavaScript Objects
//  const person = {
//     firstName: "SpongeBob",
//     lastName:  "SquarePants",
//     age: 30,
//     isEmployed: true,
//     sayHello: ()=>console.log("Hi, I am SpongeBob"),
//     eat: ()=> console.log("I am eating a crabby Patty"),
//  }

//  const person2 = {
//     firstName: "Patrick",
//     lastName:  "Star",
//     age: 42,
//     isEmployed: false,
//     sayHello: () => console.log("Hi, I am Patrick"),
//     eat: ()=> console.log("I am eating a Plankton"),
//  }
//  console.log(person.firstName);
//  console.log(person.lastName);
//  console.log(person.age);``
//  console.log(person.isEmployed);
//  person.sayHello();
//  person.eat();

//  console.log(person2.firstName);
//  console.log(person2.lastName);
//  console.log(person2.age);
//  console.log(person2.isEmployed);
//  person2.sayHello();
//  person2.eat();

//  //this- reference to the object where THIs is used
// cannot use this keyword with arrow function because it will point to the window object

//  const person1 = {
//     name: "SpongeBob",
//     favFood: "CrabbyPatties",
//     sayHello: function(){
//         console.log(`I am ${this.name}`)
//     },
//     eat: () => console.log(`${this.name} is eating ${this.favFood}`)
//  }

//  person1.sayHello();
//  person1.eat(); 

// function Car(make, model, year, color){
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   this.color = color;
//   this.drive = function(){
//     console.log(`You drive the ${this.model}`);
//   }
// }
// const car1 = new Car("Ford", "Mustang", 2024, "red");
// const car2 = new Car("Suzuki", "Celerio", 2017, "Silver");
// const car3 = new Car("Dodge", "Challenger", 2023, "SpaceGrey");

// console.log(car1.make);
// console.log(car1.model);
// console.log(car1.year);
// console.log(car1.color);
// car1.drive();

// console.log(car2.make);
// console.log(car2.model);
// console.log(car2.year);
// console.log(car2.color);
// car2.drive();

// console.log(car3.make);
// console.log(car3.model);
// console.log(car3.year);
// console.log(car3.color);
// car3.drive();

// //classes in JavaScript are (Es6 feature) 
// //instead of using constructor singly we use constructors in the classes
// class product{
//   constructor(name, price){
//     this.name = name;
//     this.price = price;
//   }

//   displayProduct(){
//     console.log(`Product: ${this.name}`);
//     console.log(`Price: $${this.price.toFixed(2)}`);
//   }

//   calculateTotal(salesTax){
//     return this.price + (this.price * (salesTax));
//   }
// }
// const product1 = new product("Shirt", 19.99);
// const product2 = new product("Pants", 22.50);
// const product3 = new product("UnderWear", 100.99);

// product1.displayProduct(); 
// const total1 = product1.calculateTotal(0.1099);
// console.log(`Total price(with tax) is ${total1.toF`ixed(2)}`);

// product3.displayProduct(); 
// const total3 = product3.calculateTotal(0.1099);
// console.log(`Total price(with tax) is ${total3.toFixed(2)}`);

// product2.displayProduct(); 
// const total2 = product2.calculateTotal(0.1099);
// console.log(`Total price(with tax) is ${total2.toFixed(2)}`);

// Static keyWord - defines properties or methods that belong to the class
// itself rather than the object meaning it can be acessed by every instance/obj of the class

// class MathUtil{
//   static PI = 3.14159;

//   static getDiameter(radius){
//     return radius * 2;
//   }
//   static getCircumference(radius){
//     return 2 * this.PI * radius;
//   }
//   static getArea(radius){
//     return this.PI * Math.pow(radius, 2)
//   }
// }
// console.log(MathUtil.PI);
// console.log(MathUtil.getDiameter(10));

// class User{
//   static userCount = 0;

//   constructor(userName){
//     this.userName = userName;
//     User.userCount++;
//   }
//   static getUserCount(){
//     console.log(`There are ${User.userCount} users online`);
//   }
//   sayHello(){
//     console.log("Hello, My name is " + this.userName);
//   }
// }
// const user1 = new User("SpongeBob");
// const user2 = new User("Patrick");

// console.log(User.userCount);
// user1.sayHello();
// User.getUserCount();

//INheritence =  allows a new class to Inherit properties and methods from a existing class
//               helps with code reUsability

// class Animal{
//   alive  = true;
//   eat(){
//     console.log(`This ${this.name} is eating`)
//   }
//   sleep(){
//     console.log(`This ${this.name} is eating`);
//   }
// }

// class Rabbit extends Animal{
//   name = "Rabbit";

//   run(){
//     console.log(`This ${this.name} is running`);
//   }
// }
// class Fish extends Animal{
//   name = "Fish";
//   swim(){
//     console.log(`This ${this.name} is swimming`);
//   }
// }
// class Hawk extends Animal{
//   name = "Hawk";
//   fly(){
//     console.log(`This ${this.name} is flying`);
//   }
// }
// const rabbit = new Rabbit();
// const fish = new Fish();
// const hawk = new Hawk();

// rabbit.alive = false;
// console.log(rabbit.alive);
// rabbit.eat();
// rabbit.sleep();
// rabbit.run();

// fish.alive = false;
// console.log(fish.alive);
// fish.eat();
// fish.sleep();
// fish.swim();

// hawk.alive = false;
// console.log(hawk.alive);
// hawk.eat();
// hawk.sleep();
// hawk.fly();

//Super keyword- is used in classes to call the constructor or acess the properties and methods of a parent class
// class Animal{
//   constructor(name, age){
//     this.name = name;
//     this.age = age; 
//   }
//   eat(){
//     console.log(`The ${this.name} is eating.`);
//   }
//   sleep(){
//     console.log(`The ${this.name} is sleeping.`);
//   }
//   move(){
//     console.log(`This ${this.name} can move.`)
//   }
// }

// class Rabbit extends Animal{
//   constructor(name, age, runSpeed){
//     super(name, age);
//     this.runSpeed = runSpeed;
//   }
//   run(){
//     super.move(this.runSpeed);
//     console.log(`The ${this.name} is running at ${this.runSpeed} miles/hr`);
//     console.log("");
//   }
// }
// class Fish extends Animal{
//   constructor(name, age, swimSpeed){
//     super(name, age);
//     this.swimSpeed = swimSpeed;
//   }
//   swim(){
//     super.move(this.swimSpeed);
//     console.log(`The ${this.name} is swimming at ${this.swimSpeed} miles/hr`);
//     console.log("");
//   }
// } 
// class Hawk extends Animal{
//   constructor(name, age, flySpeed){
//     super(name, age);
//     this.flySpeed = flySpeed;
//   }
//   fly(){
//     super.move(this.flySpeed);
//     console.log(`The ${this.name} is flying at ${this.flySpeed} miles/hr`);
//     console.log("");
//   }
// }

// const rabbit  = new Rabbit("Rabbit", 2, 25);
// rabbit.eat();
// rabbit.sleep();
// rabbit.run();

// const fish  = new Fish("GoldFish", 1, 50);
// fish.eat();
// fish.sleep();
// fish.swim();

// const hawk  = new Hawk("BaldEagle", 5, 75);
// hawk.eat();
// hawk.sleep();
// hawk.fly()


//codespace test codeSpace test
//console.log(`this codespace is working`);

//getters and setters in JS
// getters method that makes a property readable
// setters method that makes a property readable

// class Rectangle{

//   constructor(width, height){
//     this.width = width;
//     this.height = height;
//   }

//   set width(newWidth){
//     if (newWidth>0){
//       this._width = newWidth;
//     }
//     else{
//       console.error("Width must be greater than 0");
//     }
//   }

//   set height(newHeight){
//     if (newHeight>0){
//       this._height = newHeight;
//     }
//     else{
//       console.error("Height must be greater than 0");
//     }
//   }

//   get width(){
//     return this._width;
//   }
//   get height(){
//     return this._height;
//   }
//   get area(){
//     return this._height * this._width;
//   }
// }

// const rectangle = new Rectangle(10, "4");

// console.log(rectangle.width);
// console.log(rectangle.height);
// console.log(rectangle.area);

// class person{

//   constructor(firstName, lastName, age){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }

//   set firstName(name){
//     if((typeof(name) === "string")&&(name.length>0)){
//       this._firstName = name;
//     }
//     else{
//       console.error("Name doesn't meet the requirements");
//     }
//   }

//   set lastName(newLastName){
//     if((typeof(newLastName) === "string")&&(newLastName.length>0)){
//       this._lastName = newLastName;
//     }
//     else{
//       console.error("Last Name doesn't meet the requirements");
//     }
//   }

//   set age(newAge){
//     (newAge>0)&&(newAge<200) ? this._age = newAge : console.error("Age doesn't meet the requirements.");
//   }

//   get firstName(){
//     return this._firstName;
//   }

//   get lastName(){
//     return this._lastName;
//   }

//   get age(){
//     return this._age;
//   }

//   get fullName(){
//     return this._firstName + " " + this._lastName;
//   }
// }

// const person1 = new person("Pizza", "Maker", 56

// );
// console.log(person1.firstName);
// console.log(person1._lastName);
// console.log(person1.fullName);
// console.log(person1._age);

// //Destructuring = allows to extract values from arrays and objs
// //               and assign to variables in a convinient way
// //               [] = perform array destructuring
// //               {} = perform object destructuring

// //eg1- swap values of 2 variables using array desstructuring
// let a = 1;
// let b = 2;
// [a,b] = [b,a]
// console.log(a);
// console.log(b);

// const colors = ["red","green","blue","black","white"];
// [colors[0], colors[4]] = [colors[4],colors[0]];
// console.log(colors);

// const [firstColor, secondColor, thirdColor, ...extra] = colors;
// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(extra);

// function displayPerson(firstName, lastName, age, job){
//   console.log(`name: ${firstName} ${lastName}`);
//   console.log(`age: ${age}`);
//   console.log(`job: ${job ==undefined? "Unemployed": job}`);
// }


// const man = {
//   firstName: "spongeBob",
//   lastName: "SquarePants",
//   age: 30,
//   job: "fryCook",
// }

// const man2 = {
//   firstName: "Patrick",
//   lastName: "Star",
//   age: 25,
// }

// //const {firstName, lastName, age, job} = man2;

// const {firstName, lastName, age, job} = man;
// displayPerson(firstName, lastName, age, job);

//nested objects--{}
// const person = {
//   fullName: "SpongeBob SquarePants",
//   age: 30,
//   isStudent: true,
//   hobbies: ["karate", "jellyFishing", "cooking"],
//   address: {
//     street: "1234 Conch St.",
//     city: "Bikini Bottom",
//     country: "International Waters"
//   }
// }
// for (const property in person.address){
//   console.log(person.address[property]);
// }

// class Person{
//   constructor(name, age, ...address){
//     this.name = name;
//     this.age = age;
//     this.address = new Address(...address)
//   }
// }
// class Address{
//   constructor(Street, City, Country){
//     this.Street = Street;
//     this.Country = Country;
//     this.City = City;
//   }
// }
// const person1 = new Person("SpongeBob SquarePants", 30, "1234 Conch St.", "Bikini Bottoms", "International Waters");
// const person2 = new Person("Patrick Star", 25, "1256 Conch St.", "Bikini Bottoms", "International Waters");
// const person3 = new Person("SquidWards Edwards", 45, "1278 Conch St.", "Bikini Bottoms", "International Waters");
// for(const property in person1.address){
//   console.log(person3.address[property]);
// }

//ARRAY OF OBJECTS

// class fruits{
//   constructor(name, color, calories){
//     this.name = name;
//     this.color = color;
//     this.calories = calories;
//   }
// }
// const fruit1 = new fruits("apple","red",50);
// const fruit2 = new fruits("banana","yellow",78); 
// const fruit3 = new fruits("orange","orange",45);
// const fruit4 = new fruits("pineapple","yellow",87); 
// const fruit5 = new fruits("guava","green",63);

// const fruit = [fruit1, fruit2,fruit3, fruit4, fruit5 ];
// //fruit.forEach((element)=> console.log(element.name));
// fruitName = [];
// fruit.map((element) => fruitName.push(element.name));
// console.log(fruitName);
// const yellowFruits = fruit.filter((element)=> element.color === "yellow");
// yellowFruits.forEach((element)=> console.log(element.name));
// const lowCalFruits = fruit.filter((element)=> element.calories<=50);
// console.log(" ");
// lowCalFruits.forEach((element)=> console.log(element.name));

// //reduce method
// const maxFruit = fruit.reduce((accumulator, element)=> element.calories > accumulator.calories ? element: accumulator);
// console.log(maxFruit);

// const minFruit = fruit.reduce((accumulator, element)=> element.calories < accumulator.calories ? element: accumulator);
// console.log(minFruit);



//sort() method = method used to sort elements of an array in a place 
    //            sorts elements as strings in a lexicographic order not alphabetical 
    //            lexicographic = (alphabet + numbers + symbols) as strings

// let numbers = [];
// for(let i = 0; i<=10;i++){
//   numbers.push(i);
// }
// //console.log(numbers.sort((a,b)=> a - b));

// const people = [{name: "Spongebod", age: 30, gpa: 3.0},
//                 {name: "Patrick", age: 37, gpa: 2.75},
//                 {name: "Squidward", age: 40, gpa: 3.2},
//                 {name: "Sandy", age: 25, gpa: 4.0}]

// people.sort((a,b)=> b.name.localeCompare(a.name));
// console.log(people);

//Fisher-Yates algorithm

// const cards = ["A",1,2,3,4,5,6,7,8,9,10,"J","Q","K"];
// shuffle(cards);
// //console.log(cards);

// function shuffle(array){
//   for(let i = array.length-1; i>0; i--){
//     const random = Math.floor(Math.random() * (i+1)); 
//     [array[i],array[random]] = [array[random],array[i]];
//   }
// }

// //Date Objects
// //const date = new Date(2024, 10, 4, 7, 49, 4);
// const date = new Date();
// const year =  date.getFullYear();
// const month = date.getMonth();
// const day = date.getDate();
// const hour = date.getHours();
// const minutes = date.getMinutes();
// const sec  = date.getSeconds();
// const dayOfWeek = date.getDay();

// console.log(year + " "+ month + " " +day + " " +hour + " " +minutes + " " + sec + " "+ dayOfWeek);

// closure = A function defined inside of a function. The inner function has access to the variables
// and scope of the outer function.
// Allow for private variables and state maintainence.
//Used frequently in JS frameworks
//Maintains the state of the variable and makes it private

// function outer(){
//   let message = "This is my message to you";
//   function print(){
//     console.log(message);
//   }
//   print();
// }
// outer();

// function counter(){
//   let count = 0;
//   function increment(){
//     count++;
//     console.log(`Count increased to ${count}`)
//   }

//   function getCount(){
//     return count;
//   }
//   return {increment, getCount};
// }

// const myCount = counter();
// myCount.increment();
// myCount.increment();
// myCount.increment();

// console.log(myCount.getCount());
// function keepScore(){
//   let score = 0;

//   function increaseScore(points){
//     score += points;
//     console.log(`+${points} points.`);
//   }

//   function decareaseScore(points){
//     score -= points;
//     console.log(`-${points} points.`);
//   }

//   function getScore(){
//     return score;
//   }
//   return {increaseScore, decareaseScore, getScore};
// }

// const theScore = new keepScore();
// theScore.increaseScore(5);
// theScore.decareaseScore(6);
// theScore.increaseScore(5);
// console.log(`The final score is ${theScore.getScore()}`);

//SetTimeout() method - function in JS that allows you to schedule the execution of a program
// in milliseconds. Times are appropriate based on the workload of the Java Runtime environment
// setTimeout(callBack, delay)

// function sayHello(){
//   window.alert("Hello");
// }
// setTimeout(function(){window,alert("Hello2")}, 3000);

// setTimeout(()=>window.alert("Hello3"), 3000);

//const timeoutId = setTimeout(function(){window,alert("Hello2")}, 3000);
//clearTimeout(timeoutId);
// let timeoutId; 

// function startTimer(){
//   timeoutId =  setTimeout(() => window.alert("Hello"), 3000);
//   console.log("Started");
// }

// function clearTimer(){
//   clearTimeout(timeoutId);
//   console.log("Cleared");
// }

//ES6 Modules
 import {PI, getArea, getCircumference, getVolume} from './mathUtil.js';
 console.log(PI);
 const area = getArea(6);
 const circumference = getCircumference(10);
 const vol = getVolume(6);
 console.log(`${circumference} cm`);
 console.log(`${area.toFixed(2)} sq.cm`);
 console.log(`${vol.toFixed(2)} cu.cm`);