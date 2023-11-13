function doAnotherThing(a, b) {
    return a + b;
}
export default doAnotherThing;
export function isSomething() {
    // return 1; //error
    return true;
}
function ivan() {
    return '1' ? true : false;
}
// if (1) <- in javascript this is true
// if (0) <- in javascript this is false
