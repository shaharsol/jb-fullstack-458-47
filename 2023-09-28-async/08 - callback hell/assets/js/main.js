const displayRandomNumberAfterDelay = () => {
    getRandomNumber(100, number => {
        console.log(number)
        getRandomNumber(number, number => {
            console.log(number)
            getRandomNumber(number, number => {
                console.log(number)
                getRandomNumber(number, number => {
                    console.log(number)
                    getRandomNumber(number, number => {
                        console.log(number)
                        getRandomNumber(number, number => {
                            console.log(number)
                            getRandomNumber(number, number => {
                                console.log(number)
                                getRandomNumber(number, number => {
                                    console.log(number)
                                    getRandomNumber(number, number => {
                                        console.log(number)
                                        getRandomNumber(number, number => {
                                            console.log(number)
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });

    });
}

const getRandomNumber = (x, callback) => {
    setTimeout(() => {
        const number = Math.random() * x;
        callback(number);
    }, 1000)
}