const fruitPart1 = {
  id: 1,
  name: "apple",
  price: 6,
};

const fruitPart2 = {
  color: "green",
  type: "Gran Smith",
  numberOfWorms: 5,
};

const fruitPart3 = {
  id: 2,
  color: "green",
  type: "Gran Smith",
  numberOfWorms: 5,
};

// method 1, in case i know the structure
fruitPart1.color = fruitPart2.color;
fruitPart1.type = fruitPart2.type;

console.log(fruitPart1);

// method 2, using Object.assign
const fruit = Object.assign(fruitPart1, fruitPart2);
console.log(fruit);

// method 3, in ES2015 (ES6), Object assigned was shortcut to use {...}
const fruit2015 = { ...fruitPart1, ...fruitPart2 }; // equals Object.assign(fruitPart1, fruitPart2);
// {id: 1, name: 'Apple', price: 6, color: 'green', type: 'Gran Smith', numberOfWorms: 5}
console.log(fruit2015);

// const fruitOverride = { ...fruitPart1, ...fruitPart3 }; // equals Object.assign(fruitPart1, fruitPart2);
const fruitOverride = { ...fruitPart3, ...fruitPart1 }; // equals Object.assign(fruitPart1, fruitPart2);
console.log(fruitOverride);

// console.log({...fruitPart3, ...fruitPart3});

/*
{
    id: 1,
    name: 'apple',
    price: 6,
    color: 'green',
    type: 'Gran Smith'
}
*/
