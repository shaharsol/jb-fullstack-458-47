// promise has 3 possible states:
// 1. pending
// 2. resolved
// 3. rejected

// get user location with promises
const displayRandomNumber = async () => {
    try {
        const number = await getRandomNumber();
        console.log(number)
    } catch (err) {
        console.error(err)
    }
}

const getRandomNumber = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const number = Math.random();
            if ( number < 0.5 ) {
                reject('number smaller than 0.5');
            }
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

// schematic example of how a catch block in a promise, deals both with external 
// exceptions, AND internal exceptions
const getYnet = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                content = fetch('https://ynet.co.il');
                if (content.title === 'War is over') throw ('unbelievable title');
                resolve(content);
            }
            catch (e) {
                reject(e);
            }
        }, 1000)
    });
}