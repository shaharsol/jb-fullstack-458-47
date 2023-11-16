import Product from "../interfaces/product.js";

export default function reduceProducts(products: Product[]): string {
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