// custom modules

// equivalent to TypeScript import
// const mul = require("./calc");

// requiring an entire module
// const calc = require("./calc");

// more recommended: require only what you need
const { mul, add } = require("./calc");

const doSomething = () => {
  const a = 1;
  const b = 3;
  const c = a * b;
  return c;
};

const price = 100;
const vat = 1.17;
const absoluteVat = 17;
const total = mul(price, vat);
const total2 = add(price, absoluteVat);
console.log(`price including vat: ${total}`);
console.log(`price including absolute vat: ${total2}`);

const someValue = doSomething();
console.log(`return value of doSomething is ${someValue}`);

// Node.js modules
const os = require("os"); // os : shorthand for Operating System
console.log(`OS free memory: ${os.freemem()}`);
console.log(`OS free memory: ${os.userInfo().username}`);
console.log(`OS free memory: ${os.homedir}`);

// npm modules
const colors = require("colors");
console.log(colors.green("this is a green text"));
console.log(colors.blue("this is a green text"));
console.log(colors.america("this is a green text"));
console.log(colors.zebra("this is a green text"));
