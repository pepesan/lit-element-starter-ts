export class Person {
  name: string;
  age: number;

  constructor(_name = "", _age = 0) {
    this.name = _name;
    this.age = _age;
  }
}