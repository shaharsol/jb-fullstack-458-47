import Vehicle from "./Vehicle.js";

export default class Bike extends Vehicle {
    public isAllowedPassenger: boolean;

    // a derived constructor needs the following:
    // an argument list of ALL members, including ancestor
    // calling super() to initialize the ancestor
    // and then add my own initialization
    public constructor(manufacturer: string, model: string, color: string, yearMade: number, price: number, isAllowedPassenger: boolean) {
        super(manufacturer, model, color, yearMade, price);
        this.isAllowedPassenger = isAllowedPassenger;
    }

    public saleUp(): void {

    }

    public makeSound(): void {
        console.log('voom voom')
    }
}