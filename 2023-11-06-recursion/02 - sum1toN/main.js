function sum1toN() {
    const n = +prompt('to which number to count?')
    const result = sumRecursive(n);
    console.log(`result is ${result}`)
}

function sumIterative(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// what is sumRecursive(4)?
// it is 4 + sumRecursive(3)

function sumRecursive(n) { // rule #1
    if (n <= 0) return 0; // rule #2
    //     rule #3 + rule #4
    return n       + sumRecursive(n - 1); 
    
    
    // n = 4
    // 4 + 3 + 2 + 1
    // 4 + sumRecursive(3)
    // sumRecursive(3) = 3 + 2 + 1
    // 3 + 2 + 1
    // 3 + sumRecursive(2)
    // sumRecursive(2) = 2 + 1
    // 2 + 1
    // 2 + sumRecursive(1)
    // sumRecursive(1) = 1
    // 1 + sumRecursive(0)
    // 1 + 0


}