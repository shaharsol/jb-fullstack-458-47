$(async () => {

    const reduceProducts = (products) => products.map(product => `
        <tr>
            <td>${product.id}</td>
            <td>${product.title}</td>
            <td>${product.price}</td>
        </tr>
    `).reduce((acc, curr) => acc + curr, '')

    const response = await fetch('https://dummyjson.com/carts');
    const { carts } = await response.json();
    const html = carts.map(cart => `
        <tr>
            <td>${cart.id}</td>
            <td>${cart.userId}</td>
            <td>${cart.totalProducts}</td>
            <td>${cart.totalQuantity}</td>
            <td><button id="button-${cart.id}">show products</button></td>
        </tr>
        <tr id="products-${cart.id}" class="hidden">
            <td colspan="5">
                <table>
                    <thead>
                        <th>id</th>
                        <th>title</th>
                        <th>price</th>
                    </thead>
                    <tbody>
                        ${reduceProducts(cart.products)}
                    </tbody>
                </table>
            </td>
        </tr>
    `).reduce((acc, curr) => acc + curr, '');
    document.getElementById('carts').innerHTML = html;

    document.getElementById('carts').addEventListener('click', (e) => {
        if(e.target.id.startsWith('button-')) {
            const cartId = e.target.id.substring('button-'.length);
            $(`#products-${cartId}`).toggle();
        }
    })

});