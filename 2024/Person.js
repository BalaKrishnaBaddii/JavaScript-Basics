import { Dog } from "./Dog.js";
// Person..
class Person extends Dog {
  constructor(animal, name) {
    super(animal);
    this.name = name;
  }

  work() {
    if (this.animal === undefined) {
      console.log(`${this.name} has no animals`);
    } else {
      console.log(`${this.name} has a ${this.animal}`);
    }
  }
}

const p = new Person("Kukka", "Balu");
p.work();
p.sound();
