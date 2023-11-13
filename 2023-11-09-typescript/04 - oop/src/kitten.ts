export default class Kitten {
    name: string;
    color: string;
    age: number;

    sleep(): void {
        console.log('im sleeping')
    }
    display(): void {
        console.log(`kitten name is ${this.name}`);
        console.log(`kitten age is ${this.age}`);
        console.log(`kitten color is ${this.color}`);
    }
}