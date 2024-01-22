import fs from 'fs';
import { promisify } from 'util'
import fsPromises from 'fs/promises';

// 3 ways to implement file system operations:
// 1. sync
// 2. callbacks
// 3. promises

// sync vs async
// everything that happens in the CPU or RAM is sync
// everything else is async


// 1. sync
fs.writeFileSync('./data.txt', 'hello file system');
const data = fs.readFileSync('./data.txt', 'utf-8');
console.log(data)

// NEVER us fs sync operations, unless:
// 1. this is an app initialization
// 2. this is a desktop application

// 2. callbacks
fs.writeFile('./data2.txt', 'hello async file system', (err) => {
    if (err) {
        console.log(err)
        return;
    }

    fs.readFile('./data2.txt', 'utf-8', (err, fileContents) => {
        if (err) {
            console.log(err)
            return;
        }
    
        console.log(`file contents of data2.txt: ${fileContents}`)
    })
})

// an example how to use promisify on an unbounded function
// unbounded function - function that was extracted out of its context
class MyClass {
    someVal: number = 6;
    public someFunc (err: any)  {
        console.log(this.someVal)
    }
}
const myObj = new MyClass();
const newFunc = promisify(myObj.someFunc).bind(myObj)
newFunc();


// 3. promises
// promisify works in 2 conditions
// 1. that the callback function gets the error as the 1st param
// 2. that the function is not unbounded
const writeFilePromise = promisify(fs.writeFile);
const readFilePromise = promisify(fs.readFile);

(async () => {
    try {
        await writeFilePromise('./data3.txt', 'hello from promisified function')
        const data = await readFilePromise('./data3.txt', 'utf-8')
        console.log(`promisified data is ${data}`)
    } catch (err) {
        console.error(err);
    }
})();


(async () => {
    try {
        await fsPromises.writeFile('./data4.txt', 'hello from fsPromises')
        const data = await fsPromises.readFile('./data4.txt', 'utf-8')
        console.log(`promisified data is ${data}`)
    } catch (err) {
        console.error(err);
    }
})();