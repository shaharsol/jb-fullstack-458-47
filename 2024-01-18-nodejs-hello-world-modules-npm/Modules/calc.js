const add = (a, b) => {
  return a + b;
};

const sub = (a, b) => a - b;
const multiply = (a, b) => a * b;
// const div = (a, b) => a / b;

const power = (a, b) => a ^ b;
const factorial = (a, b) => a & b;

// equivalent to TypeScript export
module.exports = {
  mul: multiply,
  multiply,
  add,
  sub,
};
