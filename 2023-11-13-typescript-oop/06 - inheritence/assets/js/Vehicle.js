export default class Vehicle {
    constructor(manufacturer, model, color, yearMade, price) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.color = color;
        this.yearMade = yearMade;
        this.price = price;
    }
    start() {
    }
    shutdown() {
    }
    accelerate() {
    }
    showManufacturer() {
        console.log(this.manufacturer);
    }
}
