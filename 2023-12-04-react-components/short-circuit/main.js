function f1() {
    console.log('f1')
    return true;
}

function f2() {
    console.log('f2')
    return true;
}

function f3() {
    console.log('f3')
    return false;
}

function f4() {
    console.log('f4')
    return true;
}

f1() && f2() && f3() && f4() && f5() && f6()