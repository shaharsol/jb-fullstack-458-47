const kitten1 = {name: 'mitzi', age: 6, color: 'white'}
// const kitten2 = kitten1;
const kitten2 = {name: kitten1.name, age: kitten1.age, color: kitten1.color}
const kitten3 = {...kitten1}
const kitten4 = Object.assign(kitten1)
kitten2.age = 8;
kitten3.age = 12;
console.log(kitten1)
console.log(kitten2)
console.log(kitten3)

const arr1 = [10, 20 , 30]
// const arr2 = arr1
const arr2 = [...arr1]
arr2[0] = 100;

console.log(arr1)
console.log(arr2)

