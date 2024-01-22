import fs from 'fs';
import { promisify } from 'util'

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

// 3. promises
const writeFilePromise = promisify(fs.writeFile);
const readFilePromise = promisify(fs.readFile);

(async () => {
    await writeFilePromise('./data3.txt', 'hello from promisified function')
    const data = await readFilePromise('./data3.txt', 'utf-8')
    console.log(`promisified data is ${data}`)
})();