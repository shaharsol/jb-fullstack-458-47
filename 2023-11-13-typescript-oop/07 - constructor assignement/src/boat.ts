import Vehicle from "./Vehicle.js";

export default class Boat extends Vehicle {
    public depth: number;

    // a derived constructor needs the following:
    // an argument list of ALL members, including ancestor
    // calling super() to initialize the ancestor
    // and then add my own initialization
    public constructor(manufacturer: string, model: string, color: string, yearMade: number, price: number, depth: number) {
        super(manufacturer, model, color, yearMade, price);
        this.depth = depth;
    }

    public saleUp(): void {
        console.log('this boat is upping its sale');
    }

    public display(): void {
        super.display();
        console.log(`depth: ${this.depth}`)
    }

    public makeSound(): void {
        console.log('voosh voosh')
    }



}