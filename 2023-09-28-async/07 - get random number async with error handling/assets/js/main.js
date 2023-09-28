const getRandomNumberHigherThanZeroPointFive = (successCallback, errorCallback) => {
    setTimeout(() => {
        const result = Math.random();
        try {
            if (result < 0.5) throw new Error('got too small of a number');
            successCallback(result)
        } catch (err) {
            errorCallback(err);
        }
    }, 1000)
}

const invoke = () => {
    getRandomNumberHigherThanZeroPointFive(
        result => alert(result),
        err => console.log(err)
    );
}
