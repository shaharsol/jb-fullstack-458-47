function dividePositive(a, b) {
  if (b === 0) {
    throw new Error("cannot divide by zero");
  }

  if (b < 0 || a < 0) {
    throw new Error("cannot work with negative numbers");
  }
  return a / b;
}

function userDivide() {
  const a = +prompt("divide what?");
  const b = +prompt("divide in?");
  try {
    const result = dividePositive(a, b);
    console.log(`${a} / ${b} = ${result}`);
  } catch (err) {
    switch (err.message) {
      case "cannot divide by zero":
        console.log("please dont try to divide by zero");
        break;
      case "cannot work with negative numbers":
        console.log("please use only positive numbers");
        break;
    }
    console.log(err.message);
    console.log(err.name);
  }
}
