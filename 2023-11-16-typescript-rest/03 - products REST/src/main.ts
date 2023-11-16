/*

get products list from api
list them on the screen
    be able to delete a product
    be able to update an existing product
be able to create a new product

*/

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    rating: number;
}

function reduceProducts(products: Product[]): string {
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
        .reduce((acc, curr) => acc + curr, '')
}

function presentProductsTable(html: string): void {
    document.getElementById('products-table-body').innerHTML = html;
}

(async () => {
    // get data
    const response = await fetch('https://dummyjson.com/products');

    const json = await response.json();
    const products: Product[] = json.products;

    // prepare data for presentation
    const productsHtml = reduceProducts(products);

    // present data (UI)
    presentProductsTable(productsHtml);

})();

