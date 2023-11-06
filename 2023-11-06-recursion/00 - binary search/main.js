function search() {
    const query = +prompt('enter a number to search in the array');
    const arr = [10, 22, 33, 44, 55, 66, 78, 91];
    const index = binarySearch(arr, query);
    console.log(index);
}

// O(n)
function ordinalSearch (arr, query) {
    for (let i = 0; i < arr.length ; i++) {
        if (arr[i] === query) return i;
    }
    return -1;
}

// [10, 22, 33, 44, 55, 66, 78, 91]
//  0   1   2   3   4   5   6   7
// query: 78
function binarySearch(arr, query) {
    let startIndex = 0; // 0
    let endIndex = arr.length; // 7
    let middleIndex = Math.floor((startIndex + endIndex)/2); // 3

    while (startIndex !== endIndex) { // 78 === 44 ? false...
        if (arr[middleIndex] === query) {
            return middleIndex;        
        } else {
            if (arr[middleIndex] > query) {
                endIndex = middleIndex - 1;
            } else {
                startIndex = middleIndex + 1;
                // 1st iteration: 0-7
                // 2nd iteration: 4-7
            }
        }
    }
}

// log(2)n 2^?=arr/length