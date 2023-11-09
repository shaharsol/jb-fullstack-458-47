function printMessage(param) {
    console.log(param);
}
function printNow() {
    const now = new Date();
    console.log(now.toLocaleDateString());
}
export default {
    printMessage,
    printNow
};
