// promise has 3 possible states:
// 1. pending
// 2. resolved
// 3. rejected

// async await style
const displayRandomNumber = async () => {
    // await virtues:
    // 1. will await for the promise resolution (either resolved or rejected)
    // 2. but, it will not block!!! so browser is not frozen
    // 3. it resolves the returned value
    // (it removes the need to use callbacks and still write async code!)

    // async await tips:
    // 1. never forget the "await" keyword, it is your responsibility.
    // notice it is not an error to omit the await keyword, maybe u need the promise object 
    // 2. when we mark a function as "async" it will always return a promise
    try {
        const data = getRandomNumber(1000);
        console.log(data);
        const data2 = await getRandomNumber(data);
        console.log(data2);
        const data3 = await getRandomNumber(data2);
        console.log(data3);
        const data4 = await getRandomNumber(data3);
        console.log(data4);
    } catch (e) {
        console.log('exception!!!')
        console.error(e);
    }

    // getRandomNumber()
    //     .then(data => console.log(data))
    //     .catch(err => console.error(err))
    
}

// the promise style
// const displayRandomNumber = () => {
//     getRandomNumber()
//         .then(data => console.log(data))
//         .catch(err => console.error(err))
    
// }

const getRandomNumber = (max) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const number = Math.random();
                if ( number < 0.1 ) throw('number smaller than 0.5');
                resolve(number * max);
            }
            catch (e) {
                reject(e);
            }
        }, 1000)
    });
}


const displayRandomNumber2 = async () => {
    const number = await getRandomNumber2();
    console.log(number);
}

const getRandomNumber2 = async () => {
    // get something from some server
    // first, we check if we have it in cache
    // return 'last title'
    // if we do, we return from cache
    // if not, we go to server and return result
    // return promise
    return 22;
}
