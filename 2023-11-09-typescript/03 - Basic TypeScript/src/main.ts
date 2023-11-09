// typed variables
let age: number;
age = 19;
// age = '19'; // error
let username: string;
username = 'Bar';
let isStudent: boolean;
isStudent = true;
// isStudent = 2; // error

// Union type
let value: number | string; // <- abstract union example
let returnValue: number | undefined;
let streetName: string | undefined; // <- real life union example
value = 9;
value = 'nine';
// value = false; // error\

// Objects
let kitten: { name: string, age: number };
kitten = { name: 'mitzi', age: 4 };
// kitten = {name: 'mitzi', age: 4, isSiamese: false}; // error
// kitten = {name: 'kitzi'}; // error
console.log(kitten.name);
// console.log(kitten.color); // error
// kitten = {name: 'Asi', age: 'four'} // error
let obj: object;
obj = {};
obj = { name: 'mitzi' };
obj = { name: 'mitzi', age: 3 };
// obj = 1; // error



// arrays
let grades: number[];
grades = [1, 2, 3];
// grades = 1; // error
// grades = ['', '']; // error
// grades = new Set(); // error

let kittens: { name: string, age: number }[];
kittens = [{ name: 'mitzi', age: 4 }];
// kittens = [{name: 'mitzi', age: 4}, {name: 'kitzi'}]; // error


// functions
function doSomething(a: number, b: string, c: boolean): void {
    console.log(a);
    console.log(b);
    console.log(c);
    // return 1; // error
}

// doSomething(); // error
// doSomething(true, 'aaa', 1); // error
doSomething(1, '', true);

function calcSomething(a: number, b: number): number {
    return a + b;
}

// const sum: string = calcSomething(1,1); // error
const sum: number = calcSomething(1, 1);

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
