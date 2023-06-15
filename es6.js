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

const walk = men.walk;
console.log(walk);

console.log(walk())















