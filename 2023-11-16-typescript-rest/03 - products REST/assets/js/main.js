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
function reduceProducts(products) {
    return products
        .map(product => `
            <tr>
                <td>${product.id}</td>
                <td>${product.title}</td>
                <td>${product.description}</td>
                <td>${product.price}</td>
                <td>${product.rating}</td>
            </tr>
        `)
        .reduce((acc, curr) => acc + curr, '');
}
function presentProductsTable(html) {
    document.getElementById('products-table-body').innerHTML = html;
}
(() => __awaiter(this, void 0, void 0, function* () {
    // get data
    const response = yield fetch('https://dummyjson.com/products');
    const json = yield response.json();
    const products = json.products;
    // prepare data for presentation
    const productsHtml = reduceProducts(products);
    // present data (UI)
    presentProductsTable(productsHtml);
}))();
