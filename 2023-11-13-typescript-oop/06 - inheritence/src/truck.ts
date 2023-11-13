import Vehicle from "./Vehicle.js";

export default class Truck extends Vehicle {
    public allowedWeight: number;

    // a derived constructor needs the following:
    // an argument list of ALL members, including ancestor
    // calling super() to initialize the ancestor
    // and then add my own initialization
    public constructor(manufacturer: string, model: string, color: string, yearMade: number, price: number, allowedWeight: number) {
        super(manufacturer, model, color, yearMade, price);
        this.allowedWeight = allowedWeight;
    }

    public saleUp(): void {

    }

    public makeSound(): void {
        console.log('bbrrrrrrrr')
    }
}