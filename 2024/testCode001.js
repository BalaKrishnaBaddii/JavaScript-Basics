export default class calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  add() {
    return this.a + this.b;
  }

  sub() {
    return this.a - this.b;
  }

  mul() {
    return this.a * this.b;
  }

  div() {
    return this.a / this.b;
  }

  mod() {
    return this.a % this.b;
  }
}

const cal = new calculator(10, 3);

console.log(cal.add());
console.log(cal.sub());
console.log(cal.div());
console.log(cal.mul());
console.log(cal.mod());
