/*

get products list from api
list them on the screen
    be able to delete a product
    be able to update an existing product
be able to create a new product

*/

import productsListener from "./event-listeners/products-table.js";
import Product from "./interfaces/product.js";
import { reduceAverageRating, reduceProducts, reduceSmartphonesAveragePrice, reduceTotalPrice } from "./reducers/products.js";
import { presentAverageRating, presentNumberOfProducts, presentProductsTable, presentSmartphonesAveragePrice, presentTotalPrice } from "./ui/products.js";

(async () => {
    // initialization
    document.getElementById('products-table-body').addEventListener('click', productsListener)

    // get data
    const response = await fetch('https://dummyjson.com/products');

    interface ProductsResponse {
        products: Product[],
    }
    const json: ProductsResponse = await response.json();
    const products: Product[] = json.products;

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
    const categories = [...new Set(products.map(product => product.category))]
    console.log(categories)
    const mappedCategories = categories.map(category => {
        const categoryProducts = products.filter(product => product.category === category)
        const categoryTotalPrice = reduceTotalPrice(categoryProducts);
        return {
            category,
            totalPrice: categoryTotalPrice
        }
    })
    console.log(mappedCategories)

    // present data (UI)
    presentProductsTable(productsHtml);
    presentNumberOfProducts(numberOfRows);
    presentTotalPrice(totalPrice);
    presentAverageRating(averageRating);
    presentSmartphonesAveragePrice(smartphonesAveragePrice);

})();

