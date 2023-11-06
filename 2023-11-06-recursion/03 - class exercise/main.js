function r1() {
    const n = +prompt('number?');
    displayTill(n);
}

function displayTill(n) {
    if (n <= 0) return;
    console.log(n);
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

function displayTillReverse(n) {
    if (n <= 0) return;
    displayTillReverse(n-1);
    console.log(n);
}
