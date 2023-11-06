function fibonnaciIndex() {
    const index = +prompt('which fibonacci index?')
    const result = fibonacciRecursive(index);
    console.log(`fibonnaci of ${index} is ${result}`)
}

function fibonacci(index) {
    if (index === 0 ) return 0;
    if (index === 1 ) return 1;
    // if (index <=1 ) return index

    // 0, 1, 1, 2, 3, 5, 8, 13, 21
    // 0  1  2  3  4
    // fibonacci(4)

    let previousPreviousValue = 0;
    let previousValue = 1;
    let currentValue;
    for (let i=2; i <= index; i++) {
        currentValue = previousPreviousValue + previousValue;
        previousPreviousValue = previousValue;
        previousValue = currentValue;
    }

    return currentValue;

}

function fibonacciRecursive(index) {
    if (index === 0 ) return 0;
    if (index === 1 ) return 1;
    return fibonacciRecursive(index - 2) + fibonacciRecursive(index - 1);
}


// fibonacciRecursive(8)
// return fibonacciRecursive(6) + fibonacciRecursive(7)
// fibonacciRecursive(6)
// return fibonacciRecursive(4) + fibonacciRecursive(5)
// fibonacciRecursive(7)
// return fibonacciRecursive(5) + fibonacciRecursive(6)
