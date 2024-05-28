export class Dog {
  // define constructor..
  constructor(animal) {
    this.animal = animal;
  }
  sound() {
    if (this.animal === undefined) {
      console.log("Shit Unknow animal");
    } else {
      console.log(`${this.animal} Barks`);
    }
  }
}
