// without recursion:
// function printStars (number) {
//     for (let i=0; i < number; i++) {
//         document.write('* ')
//     }    
// }


// 1. function signature identical to a non recursive function
function printStars (number) {

    // 2. exit condition 
    if (number === 0) return;

    // 3. do the single thing
    // entire set: * * * * * * * * * * 
    // single: *
    document.write('* ')

    // 4. call the recursion with the rest of the task
    // * * * * * * * * *
    printStars(number - 1);
}

// async/await example
const someAsyncFunc = async (number) => {

}

const someSyncFunc = (number) => {

}

// now i want to use any of these functions.
// do i need to call them differently? depending on their type?
// someSyncFunc(2)
// await someAsyncFunc(2)


/*

the call        | how many asteriks painted | what's left

printStars(10)  | *                         | 9*
printStars(9)   | * *                       | 8*
printStars(8)   | * * *                     | 7*
printStars(7)   | * * * *                   | 6*
printStars(6)   | * * * * *                 | 5*

*/

