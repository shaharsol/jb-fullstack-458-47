/*

get products list from api
list them on the screen
    be able to delete a product
    be able to update an existing product
be able to create a new product

*/

import productsListener from "./event-listeners/products-table.js";
import Product from "./interfaces/product.js";
import { reduceProducts, reduceTotalPrice } from "./reducers/products.js";
import { presentNumberOfProducts, presentProductsTable, presentTotalPrice } from "./ui/products.js";

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
    const productsHtml = reduceProducts(products);
    const numberOfRows = products.length;
    const totalPrice = reduceTotalPrice(products);

    // present data (UI)
    presentProductsTable(productsHtml);
    presentNumberOfProducts(numberOfRows);
    presentTotalPrice(totalPrice);

})();

