export default class Kitten {

    // data memebers
    public name: string;
    public color: string;
    public age: number;
    private weight: number;
    public readonly chipCode: number;

    // methods

    public constructor(name: string, color: string, age: number, weight: number) {
        this.name = name;
        this.color = color;
        this.age = age;
        this.weight = weight;
        this.chipCode = Math.floor(Math.random() * 1000);
    }

    public sleep(): void {
        console.log('im sleeping')
    }
    public display(): void {
        console.log(`kitten name is ${this.name}`);
        console.log(`kitten age is ${this.age}`);
        console.log(`kitten color is ${this.color}`);
        // console.log(`kitten weight is ${this.weight}`);
        console.log(`kitten chipCode is ${this.chipCode}`);
    }
    public eat(): void {
        console.log(`${this.name} is eating`);
    }
}
