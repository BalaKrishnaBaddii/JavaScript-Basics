const person = {
  name: "Alice",
  age: 30,
  address: {
    city: "Wonderland",
    zipCode: 12345,
  },
};

//Write a destructuring assignment to extract the name and city properties into variables.
let { name, address } = person;
let { city } = address;
city;

// GPT
const {
  name: n,
  address: { city: c },
} = person;

n;
c;

// Problem 2:
const colors = ["red", "green", "blue", "yellow", "purple"];
const [fistColor, , thirdcolor] = colors;
fistColor;
thirdcolor;

console.log(colors[4]);

const student = {
  name: "Alice",
  age: 20,
  scores: {
    math: 90,
    science: 85,
    history: 95,
  },
};

let {
  name: n3,
  age,
  scores: { math },
} = student;
console.log(n3);
console.log(age);
console.log(math);

const car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
};

const { make: brand, model, year } = car;

person;

const {
  name: name2 = "Unknown",
  age: age2 = "Unknown",
  address: adrs = "Unknown",
  country = "Unknown",
} = person;

console.log(name2, age2, adrs, country);

const fruits = ["Apple", "Banana", "Orange", "Grapes", "Mango"];

const [fruit1, fruit2, fruit13, ...otherFruits] = fruits;

fruit1;
otherFruits;
