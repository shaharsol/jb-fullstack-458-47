const myFunc = () => {
    console.log('start myfunc'); // 1
    anotherFunc();
    console.log('finish myfunc'); // 5
}

const anotherFunc = () => {
    console.log('start anotherFunc'); // 2
    let sum = 0;
    for(let i=0; i< 1000000000; i++) {
        sum += i;
    }
    console.log(sum); // 3
    console.log('finish anotherFunc'); // 4
}

const myFunc2 = () => {
    console.log('start myfunc'); // 1
    const result = anotherFunc2();
    console.log(result); // 4
    console.log('finish myfunc'); // 5
}

const anotherFunc2 = () => {
    console.log('start anotherFunc'); // 2
    let sum = 0;
    for(let i=0; i< 1000000000; i++) {
        sum += i;
    }
    console.log('finish anotherFunc'); // 3
    return sum;
}