function printMessage(param: string): void {
    console.log(param);
}

function printNow(): void {
    const now = new Date();
    console.log(now.toLocaleDateString());
}

// when we export default, we export a "nameless" export
// which means the importer client can choose a name for the import
// as they like
export default { 
    printMessage,
    printNow
}

