export default class Vehicle {
    public manufacturer: string;
    public model: string;
    public color: string;
    public yearMade: number;
    public price: number;

    public constructor(manufacturer: string, model: string, color: string, yearMade: number, price: number) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.color = color;
        this.yearMade = yearMade;
        this.price = price;
    }

    public start(): void {

    }

    public shutdown(): void {

    }

    public accelerate(): void {

    }

    public showManufacturer(): void {
        console.log(this.manufacturer)
    }
}