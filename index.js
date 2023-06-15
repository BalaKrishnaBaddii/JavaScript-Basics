//this is a commnet section
console.log("hello world");


//variable...
//cannot be a reserved keyword
// should be a meanignful eg.desctiptive names..
// cannot start with number eg 1name
// Cannot contain space or hyphen
// Are case sensitive..

// var a = 20;
console.log(20);

let b; //undefined
console.log(b);

let name = "Bala";
console.log(name);

//camerl notaion..
let firstName;
let LastName;

firstName = "Bala Krishna";
LastName = 'baddi'

console.log(firstName," ",LastName)


//constants..
let salary = 4000;
console.log(salary);
salary =50;
console.log(salary);

const salary2 = 4000;
console.log(salary2);
// salary2 =50;  This will throgn an error...
console.log('Cannot assigne value to the constant...')


//premitive/values Types (String,Number,Boolen,Undefined,null)
let a = 'bala'; //string literal..
let number = 30; //number literal
let isdone = false; //boolean literal
let un = undefined; //undefined
let selected = null; // null

console.log('-------------------->',a,number,isdone,un,selected)

// Dynamic Typing...
console.log(typeof a)

a = 4.3
console.log(typeof a)

console.log(typeof un)

console.log(typeof isdone)

console.log(typeof selected)



// Reference Types.........( Objects, array Functions)
//object ...
let person = {
    name:"Bala Krishna Baddi",
    age : 25
};

//change name of the object..
person.name = "John";
person['name'] =  "Bala Krishna Baddi"

let field = 'name';
person[field] = 'Rama Rao'

console.log(person)


// Arrays...
let colors = ['red','yellow']
console.log(colors)

colors[2] = 'black'

//access array elements...
console.log(colors[1])
console.log(colors)

console.log(colors.length)

//Functions..

function greet() {
    console.log("Hello world");
}

greet();


function greet(name,age) {
    console.log("Hello world"+ " "+name,age);
    console.log(typeof name, typeof age)
}

greet("Bala"); //sendin
greet("Baddi","23");


//calculate value withy functions...
function bmi(age,height,weight){
    console.log('you BMI is : ' + (age*height)/weight)
}
bmi(25,165,60);








