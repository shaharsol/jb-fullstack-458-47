function testMap() {

    const map = new Map();

    map.set(1, 'Apple');
    map.set(2, 'Banana');
    map.set(3, 'Orange');
    map.set(4, 'Peach');
    map.set(5, 'Banana');

    console.log(`size of map is ${map.size}`);
    console.log(`the content of the map at key 2 is ${map.get(2)}`)

    for (const key of map.keys()) {
        console.log(key)
    }

    for (const value of map.values()) {
        console.log(value)
    }

    for (const keyValueArr of map) {
        console.log(keyValueArr)
    }

    for (const [key, value] of map) {
        console.log(key)
        console.log(value)
    }

    // console.log(map);

}