import rest from "../api/rest.js";
import HttpMethods from "../enums/http-methods.js";

export default async function productsListener(e: MouseEvent) {
    if (e.target instanceof HTMLElement) {
        const target = e.target as HTMLElement;
        if (target.id.startsWith('delete-')) { // delete-3
            const productId = target.id.substring('delete-'.length);

            // REST request to delete from server
            const response = await rest(HttpMethods.DELETE, `https://dummyjson.com/products/${productId}`);

            // delete the TR from the table
            document.getElementById(`tr-${productId}`).remove();
            return;
        }
        if (target.id.startsWith('update-')) { // delete-3
            const productId = target.id.substring('update-'.length);

            const newDescription = prompt('please enter new description');
            const data = {
                description: newDescription,
            };

            // REST request to delete from server
            const response = await rest(HttpMethods.PATCH, `https://dummyjson.com/products/${productId}`, data);
            // delete the TR from the table
            document.querySelector(`#tr-${productId} > td:nth-child(3)`).innerHTML = newDescription;
            // return;
        }
    }

}