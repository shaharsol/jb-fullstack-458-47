// missing types for variables
myVar = 1;
myVar2 = 2;
console.log(myVar + myVar2)
myVar = '1';
myVar2 = '2';
console.log(myVar + myVar2)
myVar = {value: 1};

console.log(myVar)

const myFunction = (a, b, c) => {
    return a + b + c;
}


// function signatures are not enforced
console.log(myFunction(1))
console.log(myFunction(1, 1, 1, 1))

const dog = {
    name: 'looky',
    age: 5
}

// objects are not well defined
console.log(dog.color);

