function testMap() {

    const map = new Map();

    map.set(1, 'Apple');
    map.set(2, 'Banana');
    map.set(3, 'Orange');
    map.set(4, 'Peach');
    map.set(5, 'Banana');
    map.set(5, 'Melon');

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

function calcMapAverage () {
    const product1 = {id: 1, name: 'tank', price: 1000};
    const product2 = {id: 2, name: 'nagmash', price: 100000};
    const product3 = {id: 3, name: 'chopper', price: 750};
    const product4 = {id: 4, name: 'jet', price: 200};
    const product5 = {id: 5, name: 'submarine', price: 400};
    const product6 = {id: 6, name: 'bomb', price: 3000};

    const map = new Map();
    map.set(product1.id, product1);
    map.set(product2.id, product2);
    map.set(product3.id, product3);
    map.set(product4.id, product4);
    map.set(product5.id, product5);
    map.set(product6.id, product6);

    let sum = 0;
    for (const product of map.values()) {
        sum += product.price
    }
    console.log(sum/map.size)
}