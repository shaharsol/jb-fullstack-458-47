function doSomething() {
    function naomi () {
        console.log('naomi');
    }

    naomi();

    naomi = () => {
        console.log('your function is hacked');
    }

    naomi();

}


function doSomething2() {
    const naomi = () => {
        console.log('naomi');
    }

    naomi();

    naomi = () => {
        console.log('your function is hacked');
    }

    naomi();

}