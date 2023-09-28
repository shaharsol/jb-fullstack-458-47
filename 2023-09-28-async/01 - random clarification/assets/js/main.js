const number = Math.random();

// get random number between 20-50
// max - min = 50 - 20 = 30
const number2 = number * 31; // this gives irrational number between 0-30
const number3 = Math.floor(number2); // this will give a rational number between 0-30
const number5 = number3 + 20; // this will give number between 20 - 50


const num = Math.floor(Math.random() * 31) + 20;

console.log(num);