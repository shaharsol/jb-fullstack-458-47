import fs from 'fs/promises'

(async () => {
    try {
        await fs.mkdir('./storage', );
    } catch (err) {

    }

    // prepare data
    let data = '';
    for (let i=1; i < 1000; i++) {
        if ( i % 7 === 0) {
            data += `${i},`;
        }
    }

    await fs.writeFile('./storage/numbers.txt', data);

    const numbersStr = await fs.readFile('./storage/numbers.txt', 'utf-8');

    const numbers = numbersStr.split(',').map(Number);

    console.log(numbers.length)

    console.log(numbers.slice(0,10))
})();