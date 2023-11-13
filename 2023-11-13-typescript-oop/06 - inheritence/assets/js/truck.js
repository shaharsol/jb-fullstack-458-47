import Vehicle from "./Vehicle.js";
export default class Truck extends Vehicle {
    // a derived constructor needs the following:
    // an argument list of ALL members, including ancestor
    // calling super() to initialize the ancestor
    // and then add my own initialization
    constructor(manufacturer, model, color, yearMade, price, allowedWeight) {
        super(manufacturer, model, color, yearMade, price);
        this.allowedWeight = allowedWeight;
    }
    saleUp() {
    }
    makeSound() {
        console.log('bbrrrrrrrr');
    }
}
