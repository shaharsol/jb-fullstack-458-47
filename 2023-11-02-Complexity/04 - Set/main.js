function showSetFunctionality () {
    const set = new Set(); // create an empty set

    set.add('Apple');
    set.add('Banana');
    set.add('Pineapple');
    set.add('Strawberry');
    set.add('Pineapple');
    set.add('Banana');
    set.add({fruit: 'Apple', weight: 250, price: 10})
    // d6850c26b5caefa6a1a7cce39ef019ca hash code, a result of a crypto function named md5
    // that was invoked on the object {fruit: 'Apple', weight: 250, price: 10}
    // d6850c26b5caefa6a1a7cce39ef019ca 

    for(const item of set) {
        console.log(item);
    }

    console.log(`set size is ${set.size}`);

    console.log(`do we have Banana in the set? ${set.has('Banana')}`);
    console.log(`do we have Peach in the set? ${set.has('Peach')}`);

}

// O(n)
function createUniqueArray () {
    const set = new Set();
    let complete = false;
    while (!complete) {
        const randomNumber = Math.random() * 10000;
        set.add(randomNumber);
        complete = set.size === 100;
    }
    console.log(set);
}