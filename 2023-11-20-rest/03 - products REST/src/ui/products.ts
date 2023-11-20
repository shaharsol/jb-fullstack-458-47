export function presentProductsTable(html: string): void {
    document.getElementById('products-table-body').innerHTML = html;
}

export function appendProductsTable(html: string): void {
    document.getElementById('products-table-body').innerHTML += html;
}

export function presentNumberOfProducts(num: number): void {
    document.getElementById('number-of-rows').innerHTML = num.toString();
}

export function presentTotalPrice(totalPrice: number): void {
    document.getElementById('total-price').innerHTML = totalPrice.toString();
}

export function presentAverageRating(averageRating: number): void {
    document.getElementById('average-rating').innerHTML = averageRating.toString();
}

export function presentSmartphonesAveragePrice(smartphonesAveragePrice: number): void {
    document.getElementById('smartphones-average-price').innerHTML = smartphonesAveragePrice.toString();
}
