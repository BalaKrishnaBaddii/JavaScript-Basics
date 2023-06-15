

console.log("----------Here we are starting ES6 fucntions---------")


// lets learn the es6 functions...

function sayhello(){
    for (var i=1;  i<8; i++){
        console.log(i)
    }
    console.log(i)
}

sayhello();


function sayhello2(){
    for (let i=1;  i<8; i++){
        console.log(i)
    }
    // console.log(i) // this weill show an error
}

sayhello2();


// function sayhello(){
//     for (const i=1;  i<8; i++){
//         console.log(i)
//     }
//     console.log(i)
// }

// sayhello();



const person = {
    name : "Bala Krishana baddi",
    salary() {},
    talk () {}
}

person.talk();
person.name = '';

const field = 'name'

person[field] = 'Bal';
console.log(person)


// THis keyword 

const men = {
    name : "balu",
    walk() {
        console.log(this);
    }
};

// const walk = men.walk;
// console.log(walk);
const walk = men.walk.bind(person);
walk();

//Arrow Functions
// const bmi = function(number){
//     return 25*2/number;
// }

// console.log(bmi(45));

// now es6 function...
const bmi = number =>number*number;

console.log(bmi(23));


const jobs = [
    {id:1,isactive:true},
    {id:2,isactive:true},
    {id:3,isactive:false},
];


//filter method...
// const active_jobs= jobs.filter(function(job) {
//     return job.isactive;
// })


const active_jobs= jobs.filter(job=> job.isactive);
console.log(active_jobs)


// arrow functions and this keyword...
//timeout functons...
// const balu = {
//     talk() {
//         setTimeout(() => {
//             console.log('this',this)
//         }, 1000);
//     }
// }
// balu.talk();


// const balu = {
//     talk() {
//         var self = this
//         setTimeout(function() {
//             console.log('self',self)
//         }, 1000);
//     }
// }
// balu.talk();


// const balu2 = {
//     talk() {
//         var self = this
//         setTimeout(() => {
//             console.log('this',this)
//         }, 1000);
//     }
// }
// balu2.talk();



// map ...... used to render the list..
const colors = ['red','green','blue'];

const items = colors.map(
    function(color) {
        return '<li>' + color + '</li>';
    }
)


console.log(items)


//arrow map
const items2 = colors.map(color=> '<li>' + color + '</li>');
console.log(items2)

//use template literals...
//arrow map
const items3 = colors.map(color=> `<li>${color}</li>`);
console.log(items3)


//object distructing...
const address = {
    street : 'bal',
    city : '',
    country :''
}

// const street = address.street;
// const city = address.city;
// const country = address.country;

// const {street,city,country} =address;
const {street:st} =address;

console.log(st)


//spread operator...
const first =[1,2,3];
const second =[4,5,6];

const combined = first.concat(second)
console.log(combined);

const combined2 = [...first,'a',...second,'b']
console.log(combined2)

//clone array....
const clone = [...first];
console.log(clone);

//spread operator for objects...
const shop ={product:"apple"};
const customer = {name:"Balu"};

const bill = {...shop,...customer,price:3000}
console.log(bill);

// //claasses...

// class rdj {
//     constructor(name){
//         this.name = name;
//     }
//     fly (){
//         console.log(`${this.name} is flying`);
//     }
// }


// const ironman1 =  new rdj('balu');
// console.log(ironman1);
// ironman1.fly();


// // Inheritence...
// class Teacher extends rdj {
//     constructor(name,degree){
//     super(name);
//     this.degree = degree;
//     }
//     teach(){
//         console.log('teach')
//     }
// }

// const teacher = new Teacher('ramarao','mca');
// teacher.fly();
