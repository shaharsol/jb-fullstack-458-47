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
    display() {
        console.log(`manufacturer: ${this.manufacturer}`);
        console.log(`model: ${this.model}`);
        console.log(`color: ${this.color}`);
        console.log(`yearMade: ${this.yearMade}`);
        console.log(`price: ${this.price}`);
    }
}
