export default class Product {
    public name: string;
    public desc: string;
    public price: number;
    public discount: number;
    public readonly vat = 1.17;

    public constructor(name: string, desc: string, price: number, discount: number) {
        this.name = name;
        this.desc = desc;
        this.price = price;
        this.discount = discount;
    }

    public display() {
        console.log(`${this.name} name is ${this.name}`)
        console.log(`${this.name} desc is ${this.desc}`)
        console.log(`${this.name} price is ${this.price}`)
        console.log(`${this.name} discount is ${this.discount}`)
    }

    public getPriceWithVat(): number {
        return this.price * this.vat;
    }
}