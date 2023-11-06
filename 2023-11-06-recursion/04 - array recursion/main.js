function sumArray () {
    const arr = [10, 20, 30 ,40 , 50 , 60 , 70 , 80];
    const sum = getSumRecursive(arr, 0, 7);
    console.log(`sum: ${sum}`)
}

function getSum(arr) {
    let sum = 0;
    for (let i=0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// [10, 20, 30 ,40]
//  10 + 20 + 30 + 40
// 10 + getSumRecursive(arr, 1, 3)
// 10 + 20 + getSumRecursive(arr, 2, 3)
// 10 + 20 + 30 + getSumRecursive(arr, 3, 3)
function getSumRecursive(arr, startIndex, endIndex) {
    if (startIndex === endIndex) return arr[startIndex];
    return arr[startIndex] + getSumRecursive(arr, startIndex + 1, endIndex)
}


// function useSomeFunc() {
//     let num = 9;
//     someFunc(num);
//     console.log(num);
// }

// function someFunc(someArg) {
//     someArg = 5;
// }

function displayArrayMax() {
    const arr = [10, 20, 30 ,40 , 50 , 60, 999 , 70 , 80];
    const max = getMaxRecursive(arr, 0, 8);
    console.log(`max: ${max}`)
}

// ([222, 333, 222], 0, 2)
// 222 > ([333, 222], 1, 2) ?
// 333 > ([222], 2, 2)
// 333 > 222




// 10 > func([20, 30 ,40 , 50 , 60 , 70 , 80])?
// 20 > func([30 ,40 , 50 , 60 , 70 , 80]) = 80 | 20 > 80? 
// ...
// ...
// 70 > 80?
function getMaxRecursive(arr, startIndex, endIndex) {
    if (startIndex === endIndex) return arr[startIndex];
    const max = getMaxRecursive(arr, startIndex + 1, endIndex);
    if (arr[startIndex] > max) {
        return arr[startIndex];
    }
    return max;
}

// [10, ]
// 10 > 35?
// [30, 20, 40, 50, 35]
// 30 > 35?
// [20, 40, 50, 35]
// 20 > 35?
// [40, 50, 35]
// 40 > 35?
// [40, 50]
// 40 > 50?
// [50]
function getMaxRecursive2(arr, startIndex, endIndex) {
    if (startIndex === endIndex) return arr[startIndex];
    return arr[startIndex] > arr[endIndex] ? getMaxRecursive2(arr, startIndex, endIndex - 1) : getMaxRecursive2(arr, startIndex + 1, endIndex)
}