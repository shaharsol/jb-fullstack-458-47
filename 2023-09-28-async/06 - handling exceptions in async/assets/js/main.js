
const myFunc2 = () => {
    console.log('start myfunc'); // 1
    anotherFunc2(
        result => alert(`result is ${result}`), 
        error => console.log(`error is: ${error}`)
    ); // 5
    console.log('finish myfunc'); // 4
}

const anotherFunc2 = (successCallback, errorCallback) => {
    console.log('start anotherFunc'); // 2
    setTimeout(() => {
        
        let sum = 0;
        try {
            if (Math.random() < 0.5) throw new Error('some error'); 
            for(let i=0; i< 100000000; i++) {
                sum += i;
            }
            successCallback(sum);
        } catch (err) {
            errorCallback(err);
        }
    }, 1000);
    
    console.log('finish anotherFunc'); // 3
}

