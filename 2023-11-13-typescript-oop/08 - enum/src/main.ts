import FamilyStatus from './family-status.js';
import Person from './person.js';

console.log(FamilyStatus.Married);
console.log(FamilyStatus.Divorced);

// const person: Person = new Person('married'); // error
// const person: Person = new Person('Married'); // error
// const person: Person = new Person('Marryied'); // error
// const person: Person = new Person(1) // error
const person: Person = new Person(FamilyStatus.Divorced)