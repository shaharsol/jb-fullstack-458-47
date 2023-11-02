function showSetFunctionality () {
    const set = new Set(); // create an empty set

    set.add('Apple');
    set.add('Banana');
    set.add('Pineapple');
    set.add('Strawberry');
    set.add('Pineapple');
    set.add('Banana');

    for(const item of set) {
        console.log(item);
    }

    console.log(`set size is ${set.size}`);

    console.log(`do we have Banana in the set? ${set.has('Banana')}`);
    console.log(`do we have Peach in the set? ${set.has('Peach')}`);

}