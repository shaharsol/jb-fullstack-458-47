function printMessage(param: string): void {
    console.log(param);
}

function printNow(): void {
    const now = new Date();
    console.log(now.toLocaleDateString());
}

export default {
    printMessage,
    printNow
}

