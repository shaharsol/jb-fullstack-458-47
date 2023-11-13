import Product from "./product.js";
const product1 = new Product('iphone', 'nice phone', 100, 10);
const product2 = new Product('samsung', 'nice android', 80, 10);
console.log(product1.getPriceWithVat());
console.log(Product.whereWereYouMade());
// 
