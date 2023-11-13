import Vehicle from "./Vehicle.js";
export default class Boat extends Vehicle {
    // a derived constructor needs the following:
    // an argument list of ALL members, including ancestor
    // calling super() to initialize the ancestor
    // and then add my own initialization
    constructor(manufacturer, model, color, yearMade, price, depth) {
        super(manufacturer, model, color, yearMade, price);
        this.depth = depth;
    }
    saleUp() {
        console.log('this boat is upping its sale');
    }
    display() {
        super.display();
        console.log(`depth: ${this.depth}`);
    }
    makeSound() {
        console.log('voosh voosh');
    }
}
