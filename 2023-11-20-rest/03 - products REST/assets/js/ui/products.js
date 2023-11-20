export function presentProductsTable(html) {
    document.getElementById('products-table-body').innerHTML = html;
}
export function presentNumberOfProducts(num) {
    document.getElementById('number-of-rows').innerHTML = num.toString();
}
