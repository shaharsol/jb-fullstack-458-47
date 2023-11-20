$(async () => {
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
    `).reduce((acc, curr) => acc + curr, '');
    document.getElementById('carts').innerHTML = html;

    document.getElementById('carts').addEventListener('click', (e) => {
        if(e.target.id.startsWith('button-')) {
            const cartId = e.target.id.substring('button-'.length);
        }
    })

});