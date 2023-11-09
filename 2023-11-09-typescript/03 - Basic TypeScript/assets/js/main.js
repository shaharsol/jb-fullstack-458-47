// typed variables
let age;
age = 19;
// age = '19'; // error
let username;
username = 'Bar';
let isStudent;
isStudent = true;
// isStudent = 2; // error
// Union type
let value; // <- abstract union example
let returnValue;
let streetName; // <- real life union example
value = 9;
value = 'nine';
// value = false; // error\
// Objects
let kitten;
kitten = { name: 'mitzi', age: 4 };
// kitten = {name: 'mitzi', age: 4, isSiamese: false}; // error
// kitten = {name: 'kitzi'}; // error
console.log(kitten.name);
// console.log(kitten.color); // error
// kitten = {name: 'Asi', age: 'four'} // error
let obj;
obj = {};
obj = { name: 'mitzi' };
obj = { name: 'mitzi', age: 3 };
// obj = 1; // error
// arrays
let grades;
grades = [1, 2, 3];
// grades = 1; // error
// grades = ['', '']; // error
// grades = new Set(); // error
let kittens;
kittens = [{ name: 'mitzi', age: 4 }];
// kittens = [{name: 'mitzi', age: 4}, {name: 'kitzi'}]; // error
// functions
function doSomething(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
    // return 1; // error
}
// doSomething(); // error
// doSomething(true, 'aaa', 1); // error
doSomething(1, '', true);
function calcSomething(a, b) {
    return a + b;
}
// const sum: string = calcSomething(1,1); // error
const sum = calcSomething(1, 1);
const someNewVar = calcSomething(1, 1);
const someConst = doSomething(1, '', true);
console.log('hello class');
console.log('hello class');
import { plus, multiply } from './calc.js';
const result = plus(1, 2);
console.log(result);
const result2 = multiply(3, 5);
console.log(result2);
import bar from './printing.js';
bar.printMessage('some string');
import doAnotherThing from './single.js';
console.log(doAnotherThing(6, 6));
