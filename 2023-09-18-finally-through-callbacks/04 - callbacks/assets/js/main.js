// 1. function is also an object and can be assigned into a variable
function doSomething1() {
  function f1() {
    console.log("f1");
    return 123;
  }

  const a = f1;
  console.log(a); // shows the function code

  const b = a;
  const c = a();
  doSomething5(c);

  console.log(b); // shows the function code
  console.log(c); // shows the function return value

  // summary
  // f() invokes the function
  // f is a variable that stores the function code
}

// we can build the function directly inside a variable
// this is called "inline function"
function doSomething2() {
  const a = function f2() {
    console.log("f2");
    return 123;
  };

  //   f2(); // will fail

  console.log(a); // shows the code
  console.log(a()); // runs the function and shows the result
}

// the name of an inline function is somewhat useless
// so we can drop the name entirely
// this is called anonymous function
function doSomething3() {
  const a = function (arg1) {
    console.log("anonymous function");
    return 123;
  };

  console.log(a); // shows the code
  console.log(a(b)); // runs the function and shows the result
}

function doSomething4() {
  function doAnotherSomething(callback) {
    if (typeof callback !== "function") {
      throw new Error("expecting a function as the 1st argument");
    }
    const result = callback();
    console.log(`result is ${result}`);
  }

  //   const a = function () {
  //     console.log("inner function");
  //     return 123;
  //   };
  //   doAnotherSomething(a);

  doAnotherSomething(function () {
    console.log("inner function");
    return 123;
  });

  doAnotherSomething(function () {
    console.log("another inner function");
    return 456;
  });
}

function doSomething5() {
  function doAnotherSomething(callback, value) {
    if (typeof callback !== "function") {
      throw new Error("expecting a function as the 1st argument");
    }
    const result = callback(value);
    console.log(`result is ${result}`);
  }

  doAnotherSomething(function (value) {
    console.log(value);
    return value;
  }, 450);

  doAnotherSomething(function (value) {
    console.log(value);
    return value;
  }, 900);
}
