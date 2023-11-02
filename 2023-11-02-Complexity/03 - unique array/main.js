// O(n^2)
function createUniqueArray () {
    const arr = [];
    let complete = false;
    while (!complete) {
        const randomNumber = Math.random() * 10000;
        // can i add this number to the array???
        let found = false;
        for (let z = 0; z < arr.length; z++) {
            if (randomNumber == arr[z]) {
                found = true;
                break;
            }
        }

        if (!found) {
            arr.push(randomNumber);
        }
        complete = arr.length === 100;
    }
    console.log(arr);
}
