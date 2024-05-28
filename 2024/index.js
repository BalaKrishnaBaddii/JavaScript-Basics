// This is my first java scrpt code...
// console.log("Hello Apparao!");
let name;
console.log(name);

let firstName,
  lastName = "Baddi";
firstName = "Bala Krishna";
console.log(firstName + " " + lastName);

// let interestRate = 0.3;
const interestRate = 0.3; // we cannot change the const variable..
// interestRate = 1;
console.log(interestRate);

// premitieve DataTypes..            Reference DataTypes
/*
    String                              Object
    Number                              Array
    Boolean                             Function
    undefined
    null
*/
// ####################################
let city = "california"; // String literal
let age = 40; // Number Literal..
let voted = true; // Boolean literal
let status = undefined;
let dob = null;

//#################
let color = "pink";
let legs = 4;
let animal = { color: "black", legs: 4 }; // object literal
console.log(animal.color, " ", animal.legs);
animal["color"] = "black";
console.log(animal.color);

// Arrays..
let colors = ["black", "red", "white"];
colors[1] = "yellow";
console.log(colors[2]);
console.log(colors[1]);
console.log(colors);
console.log(colors.length);

// Functions..
function add(a, b) {
  return a + b;
}

let c = add(1, 20);
console.log("Total is " + c);
