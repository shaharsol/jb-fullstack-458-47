function r1() {
    const n = +prompt('number?');
    displayTill(n);
}

function displayTill(n) {
    if (n <= 0) return;
    console.log(n);
    document.getElementById('bar').innerHTML += n;
    displayTill(n-1);
}

function r2() {
    const n = +prompt('number?');
    evenNumbers(n);
}

function evenNumbers(n) {
    if (n <= 0) return;
    if (n % 2 == 0) console.log(n);
    evenNumbers(n - 1)    
}

function r3() {
    const n = +prompt('number?');
    randomNumbers(n);
}

function randomNumbers(n) {
    if (n <= 0) return;
    console.log(Math.random());
    randomNumbers(n - 1)    
}

function r4() {
    const n = +prompt('number?');
    displayTillReverse(n);
}

// function displayTill(n) {
//     if (n <= 0) return;
//     console.log(n);
//     displayTill(n-1);
// }

function displayTillReverse(n) {
    alert(`enter ${n}`)
    if (n <= 0) return;
    displayTillReverse(n-1);
    alert(`after recursion ${n-1}`)
    console.log(n);
}

function r5() {
    const n = +prompt('number?');
    console.log(factorial(n));
}

function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
};

// factorial(3)
// return 3 * factorial(2)
// factorial(2)
// return 2 * factorial(1)
// factorial(1)
// return 1;
// 2 * factorial(1) = 2
// 3 * 2 = 6



