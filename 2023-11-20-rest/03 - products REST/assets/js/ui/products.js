export function presentProductsTable(html) {
    document.getElementById('products-table-body').innerHTML = html;
}
export function presentNumberOfProducts(num) {
    document.getElementById('number-of-rows').innerHTML = num.toString();
}
export function presentTotalPrice(totalPrice) {
    document.getElementById('total-price').innerHTML = totalPrice.toString();
}
export function presentAverageRating(averageRating) {
    document.getElementById('average-rating').innerHTML = averageRating.toString();
}
export function presentSmartphonesAveragePrice(smartphonesAveragePrice) {
    document.getElementById('smartphones-average-price').innerHTML = smartphonesAveragePrice.toString();
}
