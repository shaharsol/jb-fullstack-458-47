const displayRandomNumberAfterDelay = () => {
    // with variable
    // const promise = getRandomNumberWithPromise(100);
    // promise.then(result => {
    //     console.log(result);
    // });

    getRandomNumberWithPromise(100).then(result => {
        console.log(result);
        return getRandomNumberWithPromise(result);
    }).then(result2 => {
        console.log(result2);
        return getRandomNumberWithPromise(result2);
    }).then(result3 => {
        console.log(result3);
    });
}

const getRandomNumberWithPromise = (x) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const number = Math.random() * x;
            resolve(number);
        }, 1000)
    })
}

// Promise has 3 possible states:
// 1. pending
// 2. resolved
// 3. rejected

const getRandomNumber = (x, successCallback, errorCallback) => {
    setTimeout(() => {
        const number = Math.random() * x;
        successCallback(number);
    }, 1000)
}


// const displayRandomNumberAfterDelay2 = () => {
    //     getRandomNumber(
    //         err => alert(err),
    //         number => console.log(number), 
    //         100, 
    //     );
    // }
    
    // const displayRandomNumberAfterDelay3 = () => {
    //     getRandomNumber(
    //         100, 
    //         err => alert(err),
    //         number => console.log(number), 
    //     );
    // }
    