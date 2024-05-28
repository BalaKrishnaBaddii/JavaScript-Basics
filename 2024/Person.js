import { Dog } from "./Dog.js";
import ironman from "../ironman.js";
// import Dog from "./Dog";
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

//iron man..
const i = new ironman("balu");
i.fly();
