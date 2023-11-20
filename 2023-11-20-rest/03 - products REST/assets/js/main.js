/*

get products list from api
list them on the screen
    be able to delete a product
    be able to update an existing product
be able to create a new product

*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import productFormListener from "./event-listeners/product-form-listener.js";
import productsListener from "./event-listeners/products-table.js";
import { reduceAverageRating, reduceProducts, reduceSmartphonesAveragePrice, reduceTotalPrice } from "./reducers/products.js";
import { presentAverageRating, presentNumberOfProducts, presentProductsTable, presentSmartphonesAveragePrice, presentTotalPrice } from "./ui/products.js";
(() => __awaiter(void 0, void 0, void 0, function* () {
    // initialization
    document.getElementById('products-table-body').addEventListener('click', productsListener);
    document.getElementById('add-product-form').addEventListener('submit', productFormListener);
    // get data
    const response = yield fetch('https://dummyjson.com/products');
    const json = yield response.json();
    const products = json.products;
    // prepare data for presentation
    // prepare table
    const productsHtml = reduceProducts(products);
    // prepare aggregations
    const numberOfRows = products.length;
    const totalPrice = reduceTotalPrice(products);
    const averageRating = reduceAverageRating(products);
    const smartphonesAveragePrice = reduceSmartphonesAveragePrice(products);
    // which categories do i have in the products table?
    // const categories: string[] = [];
    // for (let i = 0; i < products.length; i++) {
    //     // does products[i].category already included in categories?
    //     const found = categories.find(category => category === products[i].category);
    //     // if yes
    //     if (!found) {
    //         categories.push(products[i].category)
    //     }
    //     //  do nothing
    //     // if not
    //     //  add to array
    // }
    // 1.
    // const categories = new Set()
    // products.forEach(product => categories.add(product.category));
    // console.log(categories)
    // 2.
    // const categories = products.map(product => product.category)
    // const set = new Set(categories)
    // console.log(set)
    // 3.
    // const categories = products.map(product => product.category)
    // const set = new Set(categories)
    // const arr = [...set]
    // console.log(arr)
    // 4.
    const categories = [...new Set(products.map(product => product.category))];
    console.log(categories);
    const mappedCategories = categories.map(category => {
        const categoryProducts = products.filter(product => product.category === category);
        const categoryTotalPrice = reduceTotalPrice(categoryProducts);
        return {
            category,
            totalPrice: categoryTotalPrice
        };
    });
    console.log(mappedCategories);
    const brands = [...new Set(products.map(product => product.brand))];
    const mappedBrands = brands.map(brand => {
        const brandProducts = products.filter(product => product.brand === brand);
        const brandAverageRating = reduceAverageRating(brandProducts);
        return {
            brand,
            averageRating: brandAverageRating
        };
    });
    console.log(mappedBrands);
    // present data (UI)
    presentProductsTable(productsHtml);
    presentNumberOfProducts(numberOfRows);
    presentTotalPrice(totalPrice);
    presentAverageRating(averageRating);
    presentSmartphonesAveragePrice(smartphonesAveragePrice);
}))();
