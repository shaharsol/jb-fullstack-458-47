import rest from "../api/rest.js";

export default async function productsListener(e: MouseEvent) {
    const target = e.target as HTMLElement;
    if (target.id.startsWith('delete-')) { // delete-3
        const productId = target.id.substring('delete-'.length);

        // REST request to delete from server
        const response = await rest('DELETE', `https://dummyjson.com/products/${productId}`);

        // delete the TR from the table
        document.getElementById(`tr-${productId}`).remove();

    }
}