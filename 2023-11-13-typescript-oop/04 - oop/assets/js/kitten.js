export default class Kitten {
    // methods
    constructor(name, color, age, weight) {
        this.name = name;
        this.color = color;
        this.age = age;
        this.weight = weight;
        this.chipCode = Math.floor(Math.random() * 1000);
    }
    sleep() {
        console.log('im sleeping');
    }
    display() {
        console.log(`kitten name is ${this.name}`);
        console.log(`kitten age is ${this.age}`);
        console.log(`kitten color is ${this.color}`);
        // console.log(`kitten weight is ${this.weight}`);
        console.log(`kitten chipCode is ${this.chipCode}`);
    }
    eat() {
        console.log(`${this.name} is eating`);
    }
}
