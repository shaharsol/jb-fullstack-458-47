// promise has 3 possible states:
// 1. pending
// 2. resolved
// 3. rejected


// this technique is called "thenification"
const displayRandomNumber = () => {
    getRandomNumber(1000)
    .then(data => {
        console.log(data)
        return getRandomNumber(data);
    })
    .then(data => {
        console.log(data)
        return getRandomNumber(data);
    })
    .then(data => {
        console.log(data)
        return getRandomNumber(data);
    })
    .then(data => {
        console.log(data)
        return getRandomNumber(data);
    })
    .then(data => {
        console.log(data)
        return getRandomNumber(data);
    })
    .then(data => console.log(data))
    .catch(err => console.error(err))
    .finally(() => console.log('finally'))
    
}

const getRandomNumber = (max) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const number = Math.random(); // will be between 0 and 1, always!
                if ( number < 0.2 ) throw('number smaller than 0.5');
                resolve(number * max);
            }
            catch (e) {
                reject(e);
            }
        }, 1000)
    });
}
