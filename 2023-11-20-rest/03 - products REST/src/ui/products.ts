export function presentProductsTable(html: string): void {
    document.getElementById('products-table-body').innerHTML = html;
}

export function presentNumberOfProducts(num: number): void {
    document.getElementById('number-of-rows').innerHTML = num.toString();
}
