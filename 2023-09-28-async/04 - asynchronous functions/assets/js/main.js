const myFunc = () => {
    const a = 10;
    console.log('start myfunc'); // 1
    anotherFunc();
    console.log('finish myfunc'); // 5
}

const anotherFunc = () => {
    const initial = 100;
    console.log('start anotherFunc'); // 2
    setTimeout(() => {
        let sum = initial;
        for(let i=0; i< 1; i++) {
            sum += i;
        }
        console.log(sum); // 3
    }, 10000);
    console.log('finish anotherFunc'); // 4
}

const myFunc2 = () => {
    console.log('start myfunc'); // 1
    anotherFunc2(result => console.log(result)); // 5
    console.log('finish myfunc'); // 4
}

const anotherFunc2 = (callback) => {
    console.log('start anotherFunc'); // 2
    setTimeout(() => {
        let sum = 0;
        for(let i=0; i< 100000000; i++) {
            sum += i;
        }
        callback(sum);
    }, 1000);
    console.log('finish anotherFunc'); // 3
}

