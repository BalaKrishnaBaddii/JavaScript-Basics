// classes

class Dog {
  // define constructor..
  constructor(animal) {
    this.animal = this.animal;
  }
  sound() {
    if (this.animal == undefined) {
      console.log("Shit Unknow animal");
    } else {
      console.log(`${this.animal} Barks`);
    }
  }
}

const d = new Dog();
d.animal = "Kukka";
d.sound();

// Person..
class Person extends Dog {
  constructor(animal, name) {
    super();
    this.name = name;
  }

  work() {
    if (this.animal == undefined) {
      console.log(`${this.name} has no animals`);
    } else {
      console.log(`${this.name} has a ${this.animal}`);
    }
  }
}

const p = new Person();
p.animal = "anakonda";
p.name = "balu";
p.work();
