/**
 * Recap about the basics of TypeScript
 */

const myName = 'Megan';
const myAge = 22;

const sum = (a: number, b: number): number => a + b;

sum(11, 11);

class Person {
  constructor(private age: number, private name: string) {}

  getSummary(): string {
    return `My name is ${this.name}, this is my age ${this.age}`;
  }
}

const megan = new Person(22, 'Megan');

megan.getSummary();
