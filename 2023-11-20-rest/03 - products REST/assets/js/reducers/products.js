export function reduceProducts(products) {
    return products
        .map(product => `
            <tr id="tr-${product.id}">
                <td>${product.id}</td>
                <td>${product.title}</td>
                <td>${product.description}</td>
                <td>${product.price}</td>
                <td>${product.rating}</td>
                <td>${product.category}</td>
                <td>${product.brand}</td>
                <td><button id="delete-${product.id}" class="red-button">Delete</button></td>
                <td><button id="update-${product.id}" class="green-button">Update Description</button></td>
            </tr>
        `)
        .reduce((acc, curr) => acc + curr, '');
}
export function reduceTotalPrice(products) {
    return products.reduce((accumulator, current) => accumulator + current.price, 0);
}
export function reduceAverageRating(products) {
    return products.reduce((accumulator, current) => accumulator + current.rating, 0) / products.length;
}
export function reduceSmartphonesAveragePrice(products) {
    const smartphones = products.filter(product => product.category === 'smartphones');
    return smartphones.reduce((accumulator, current) => accumulator + current.price, 0) / smartphones.length;
}
// reducer initial value
// 0 for + -
// 1 for * %
// '' for string concatenation
// think of it as if you were doing a regular loop
// let sum = 0;
