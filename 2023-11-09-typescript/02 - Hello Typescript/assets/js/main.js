// let myVar;
// in typescript, if you don't explicitly state the type
// the first value that is assigned into a variable
// determines the variable type.
let age = 20;
// age = 'twenty'; // error
// however, you want to be explicit as possible,
// or - mention the type always
let myNum;
myNum = 7;
myNum = 9 - 2;
// myNum = 'nine';
// myNum = false;
let secondNum;
secondNum = 20;
secondNum = '';
// secondNum is now of type any
let thirdNum;
thirdNum = 'string';
thirdNum = 1;
thirdNum = true;
console.log(thirdNum);
