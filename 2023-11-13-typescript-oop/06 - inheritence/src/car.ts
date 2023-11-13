import Vehicle from "./Vehicle.js";

export default class Car extends Vehicle {
    public numberOfSeats: number;

    // a derived constructor needs the following:
    // an argument list of ALL members, including ancestor
    // calling super() to initialize the ancestor
    // and then add my own initialization
    public constructor(manufacturer: string, model: string, color: string, yearMade: number, price: number, numberOfSeats: number) {
        super(manufacturer, model, color, yearMade, price);
        this.numberOfSeats = numberOfSeats;
    }

    public openBackDoor(): void {

    }
}