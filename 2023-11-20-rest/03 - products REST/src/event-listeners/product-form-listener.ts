import rest from "../api/rest.js";
import HttpMethods from "../enums/http-methods.js";
import { reduceProducts } from "../reducers/products.js";
import { appendProductsTable } from "../ui/products.js";

export default async function productFormListener(e: MouseEvent) {
    e.preventDefault();
    // collect data from the form
    const title = (document.getElementById('title') as HTMLInputElement).value;
    const description = (document.getElementById('description') as HTMLInputElement).value;
    const price = (document.getElementById('price') as HTMLInputElement).value;
    const rating = (document.getElementById('rating') as HTMLInputElement).value;

    // submit it to rest api
    const newProduct = await rest(HttpMethods.POST, 'https://dummyjson.com/products/add', {
        title,
        description,
        price,
        rating
    });

    // prepare
    const html = reduceProducts([newProduct]);

    // ui
    appendProductsTable(html);
}