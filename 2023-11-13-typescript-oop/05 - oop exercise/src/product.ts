export default class Product {
    public name: string;
    public desc: string;
    public price: number;
    public discount: number;
    public static readonly vat = 1.17;
    private static readonly madeIn = 'Israel';

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
        return this.price * Product.vat;
    }

    public static whereWereYouMade(): string {
        return Product.madeIn;
    }
}