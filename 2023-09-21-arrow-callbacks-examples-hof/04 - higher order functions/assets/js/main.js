// Higher Order Functions
// specifically, arrays HOFs

const grades = [66, 78, 80, 81, 88, 90, 93, 96, 100];

// for (let i=0; i < grades.length; i++) {
//     if (grades[i] > 90) {
//         console.log(`found ${grades[i]} in offset ${i}`);
//         break;
//     }
// }

// find - finds the 1st element in the array that satisfies a condition

let result;

// finds the first grade that is greater than 90
result = grades.find(grade => grade > 90);
console.log(result);

// finds the first element that is odd
result = grades.find(grade => grade % 2 !== 0)
console.log(result);

// finds the first element that is lower than 60
result = grades.find(grade => grade < 60)
console.log(result);
"bar"
1
"1"
grades.

console.log(grades.find(grade => grade < 60))
for (let i=0; i < grades.length; i++ ) {
    if (grades[i] < 60) {
        return grades[i];
        break;
    }
}


// for (let i=0; i < grades.length; i++ ) {
//     if (grades[i] > 90) {
//         return grades[i]
//     }
// }

// for (let i=0; i < grades.length; i++ ) {
//     if (grades[i] === 'bar') {
//         return grades[i]
//     }
// }

// findIndex - finds the index of the 1st element in the array that satisfies a condition

// finds the *index of the* first element that is odd
result = grades.findIndex(grade => grade % 2 !== 0)
console.log(`first odd grade is ${grades[result]} located at offset ${result}`);

// find - find the *first element*
// what if we want all elements that satisfy a condition?

// find ALL grades above 90
result = grades.filter(grade => grade > 90);
console.log(result);

// find all odd grades
result = grades.filter(grade => grade % 2 !== 0);
console.log(result);

// every
// answers the question: Do ALL elements satisfy a condition?
result = grades.every(grade => grade % 2 !== 0);
console.log(`all grades are odd? ${result}`);

result = grades.every(grade => grade > 90);
console.log(`all grades are greater than 90? ${result}`);

result = grades.every(grade => grade > 60);
console.log(`all grades are greater than 70? ${result ? 'Yes' : 'No'}`);

// some
// answers the question: do SOME (at least 1) of the elements satisfy a condition?
result = grades.some(grade => grade % 2 !== 0);
console.log(`some of the grades are odd? ${result}`);

// open question: why "some" HOF exists when we can use the result of "find"
// const num = 2;
// if (num) {
//     console.log('num');
// }

// map
result = grades.map(grade => grade > 90 ? 'A' : grade > 80 ? 'B' : grade > 70 ? 'C' : 'D')
console.log(result);

const dogs = [
    {
        name: 'betty',
        color: 'gray',
        age: 1.5
    },
    {
        name: 'branco',
        color: 'white',
        age: 2
    },
    {
        name: 'chai',
        color: 'brown',
        age: 5.5
    }
]

result = dogs.map(dog => ({
    // instead of EXPLICITLY naming all dog properties:
    // name: dog.name,
    // color: dog.color,
    // age: dog.age,
    // I can use the "spread operator"
    // the spread operator, breaks an object into its properties
    ...dog,
    floorAge: Math.floor(dog.age)
}))
console.log(result);

result = grades.map(grade => grade ** 2);
console.log(result);

// forEach
grades.forEach(grade => console.log(grade));

// don't use map where forEach is sufficient!
// use map only if you need the mapped value, not if you need to 
// run a callback function against each array element - this is what forEach is for
grades.map(grade => console.log(grade));

// reduce
// reduces the entire array (which contains >1 elements) into a single value
// for example, calculate the average of an array

// example in the traditional way
let sum = 0;
for (let i=0; i < grades.length; i++) {
    sum += grades[i];
}
const average = sum/grades.length;
console.log(`array average is ${average}`)

// let's use HOF reduce
sum = grades.reduce((accumulator, grade) => accumulator + grade, 0);
console.log(sum/grades.length);

// const grades = [66, 78, 80, 81, 88, 90, 93, 96, 100];
// using only HOF functions
// return a string of all grades above 90, powered by 2, and concatenated with '|'
// 8649 | 9216 | 10000

// original code
const filtered = grades.filter(grade => grade > 90);
const powered = filtered.map(grade => grade ** 2);
const concatenated = powered.reduce((accumulator, grade) => `${accumulator} | ${grade}`, '');
console.log(concatenated);

// shortened code
const concatenated2 = grades
    .filter(grade => grade > 90) // takes a big array, returns a smaller array
    .map(grade => grade ** 2) // ליצור מערך מקביל, בו כל תא מחושב לפי אותה נוסחה, תלוי במערך המקורי.
    .reduce((accumulator, grade) => `${accumulator} | ${grade}`, '');

console.log(concatenated2);

// efficiency question
const concatenated3 = grades
    .map(grade => grade ** 2)
    .filter(grade => grade > 8100)
    .reduce((accumulator, grade) => `${accumulator} | ${grade}`, '');

console.log(concatenated3);


const original = [1,2,3,4];
const mapped = original.map(item => item - 1);
// mapped = [0,1,2,3]
// original | mapped
// =================
// 1        | 0
// 2        | 1
// 3        | 2
// 4        | 3

const mapped = original.map(item => item ^ 2);
// mapped = [1,4,9,16]
// original | mapped
// =================
// 1        | 1
// 2        | 4
// 3        | 9
// 4        | 16




