function runUserCode() {
  //   f1();
  const string = prompt("enter some javascript code");
  console.log(string);
  try {
    // if string contains a code, it will run
    eval(string);
  } catch (err) {
    // if string contains broken code, or no code at all, it will fail
    console.log(err);
  }
}

// whenever something or someone throws an error, it bubbles up
// the stack trace (chain of functions calling functions)
// until it is caught in the 1st catch block it finds
// or until the entire program crashes
// this is why it is very imortant to wrap our main function with try/catch block
function f1() {
  try {
    f2();
  } catch (err) {
    console.log(`f1 caught an error ${err}`);
  }
}

function f2() {
  f3();
}

function f3() {
  throw new Error("inside f3");
}
