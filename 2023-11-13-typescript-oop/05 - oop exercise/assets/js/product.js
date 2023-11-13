export default class Product {
    constructor(name, desc, price, discount) {
        this.vat = 1.17;
        this.name = name;
        this.desc = desc;
        this.price = price;
        this.discount = discount;
    }
    display() {
        console.log(`${this.name} name is ${this.name}`);
        console.log(`${this.name} desc is ${this.desc}`);
        console.log(`${this.name} price is ${this.price}`);
        console.log(`${this.name} discount is ${this.discount}`);
    }
    getPriceWithVat() {
        return this.price * this.vat;
    }
}
