class Product {
    constructor(name, desc, price, discount) {
        this.name = name;
        this.desc = desc;
        this.price = price;
        this.discount = discount
    }
    display() {
        console.log(`${this.name} name is ${this.name}`);
        console.log(`${this.name} desc is ${this.desc}`);
        console.log(`${this.name} price is ${this.price}`);
        console.log(`${this.name} discount is ${this.discount}`);
        console.log(`${this.name} madeIn is ${Product.madeIn}`);
    }
    getPriceWithVat() {
        return this.price * Product.vat;
    }
    static whereWereYouMade() {
        return Product.madeIn;
    }
}
Product.vat = 1.17;
Product.madeIn = 'Israel';
export default Product;
