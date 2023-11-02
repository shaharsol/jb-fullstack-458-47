// O(1)
function o1 () {
    const arr = [12, 23, 34, 45, 56, 67, 78];
    const randomItem = getRandomItem(arr);
    console.log(`random item is ${randomItem}`);
}

function getRandomItem (arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

// O(n)
function on () {
    const arr = [12, 23, 34, 45, 56, 67, 78, 12, 23, 34, 45, 56, 67, 78];
    const average = getAverage(arr);
    console.log(`array average is ${average}`);
}

function getAverage (arr) {

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum/arr.length;

}

// O(n^2)
function on2() {
    const arr = [[12, 23, 34], [45, 56, 67], [78, 12, 23], [34, 45, 56], [67, 78]];
    const sum = getArraySum(arr);
    console.log(`array sum is ${sum}`);
}

function getArraySum(arr) {
    let sum = 0;
    for (let i=0; i < arr.length; i++ ) {
        for (let z = 0; z < arr[i].length; z++) {
            sum += arr[i][z];
        }
    }
    return sum;
}

function getArraySumHagai(arr) {
    let sum = 0;
    // use magic function to flatten the array
    // [12, 23, 34, 45, 56, 67, 78, 12, 23, 34, 45, 56, 67, 78];
    // O of this function is O(n)

    // now we can use a single loop to calc the sum
    // so the entire O will be: O(n) + O(n)
    // whereas in the previous example, the O was O(n^2)
    return sum;
}

// what is the O for this function?
function artihmethic (arr) {
    let sum = 0;
    // O(n^2)
    for (let i=0; i < arr.length; i++ ) {
        for (let z = 0; z < arr[i].length; z++) {
            sum += arr[i][z];
        }
    }
    // O(n)
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// O(log(n))
function ologn() {
    const value = +prompt('enter a number to search in array')
    const arr = [10, 20, 32, 45, 56, 78, 81, 93];
    const index = binarySearch(arr, value);
    if (index >= 0) {
        console.log(`value ${value} found in index ${index}`)
    } else {
        console.log(`value ${value} not found in array`)
    }
}

function search(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}
// binarySearch(..., 20)
// [10, 20, 32, 45, 56, 78, 81, 93]
//  ^                           ^
//  0                            7
//  ^        ^
//  0        2                    
//  ^    ^
//  0    1                    
function binarySearch(arr, value) {
    let startIndex = 0;
    let endIndex = arr.length - 1;

    while (startIndex !== endIndex) {
        const middleIndex  = Math.floor((startIndex + endIndex)/2)

        if (arr[middleIndex] === value) return middleIndex;

        if (value < arr[middleIndex]) {
            endIndex = middleIndex - 1;
        } else {
            startIndex = middleIndex + 1;
        }
    }

    return -1 // if i got here, this means "not found"
}







