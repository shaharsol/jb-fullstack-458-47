import Vehicle from "./Vehicle.js";
export default class Car extends Vehicle {
    // a derived constructor needs the following:
    // an argument list of ALL members, including ancestor
    // calling super() to initialize the ancestor
    // and then add my own initialization
    constructor(manufacturer, model, color, yearMade, price, numberOfSeats) {
        super(manufacturer, model, color, yearMade, price);
        this.numberOfSeats = numberOfSeats;
    }
    openBackDoor() {
    }
}
