// ES6 Functions for java Script...
// var --> accessable in function
// let --> accessable in block
// const --> accessable in block
function sayHello() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  //   console.log(i); // variable is accessabel outside loop
}
sayHello();

const calculate = {
  name: "calculate",
  add(a, b) {
    return a + b;
  },
  sub(a, b) {
    return a - b;
  },
};

calculate["name"] = "calculator";
console.log(calculate.name);
console.log("Total is ", calculate.add(1, 2));
console.log("Total is ", calculate.sub(2, 2));

// this keyword.
const animal = {
  legs: 4,
  color: "black",
  sound() {
    console.log(this);
  },
};
animal.sound();

const sound = animal.sound.bind(animal);
sound();

// Array Functions..
const square = (number) => {
  return number * number;
};

console.log(square(10));

// same as above one
const add = (a, b) => "Total is " + a + b;
console.log(add(1, 2));

// using filter program...
const job = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false },
];

const activeJobs = job.filter(function (job) {
  return job.isActive;
});
console.log(activeJobs);

const unActiveJobs = job.filter((job) => job.isActive == false);
console.log(unActiveJobs);

const a = 20;
if (a == 20) {
  console.log(a);
}

//
const balu = {
  walk() {
    setTimeout(() => console.log("this", this), 3000);
  },
};

balu.walk();

// array.map()
const ages = [1, 2, 3, 4, 5];
const items = ages.map((age) => `<li>${age}</li>`);
console.log(items);

// object destructuring...
const addresses = {
  city: "anakapalli",
  street: "khajeepalem",
  country: "India",
};

const { city, street: st, country } = addresses;
console.log(st);

// spread operator...
const first = [1, 2, 3, 4];
const second = [2, 4, 5, 6];

const totla1 = first.concat(second);
console.log(totla1);

const totla12 = [...first, 100, ...second, 100];
console.log(totla12);

const x = { name: "Balu", age: 23 };
const y = { city: "anakpali" };
console.log({ ...x, ...y, status: "Alive" });
