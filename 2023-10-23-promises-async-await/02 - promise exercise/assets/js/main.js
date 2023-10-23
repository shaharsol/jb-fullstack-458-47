// promise has 3 possible states:
// 1. pending
// 2. resolved
// 3. rejected

// get user location with promises
const displayRandomNumber = () => {
    getRandomNumber2()
        .then(data => console.log(data))
        .catch(err => console.error(err))
    
}

const getRandomNumber = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const number = Math.random();
            if ( number < 0.5 ) reject('number smaller than 0.5');
            resolve(number);
        }, 1000)
    });
}

const getRandomNumber2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const number = Math.random();
                if ( number < 0.5 ) throw('number smaller than 0.5');
                resolve(number);
            }
            catch (e) {
                reject(e);
            }
        }, 1000)
    });
}