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