import Product from "../../../models/Product";
import productsService from "../../../services/Products";
import "./Products.css";
import { useEffect, useState } from "react";

function Products(): JSX.Element {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {

        // how to use async code in useEffect
        // 1st method: use IIFE

        // (async () => {
        //     const productsFromServer = await productsService.getAll();
        //     setProducts(productsFromServer);
        // })

        // 2nd method, use then
        productsService.getAll()
            .then(productsFromServer => setProducts(productsFromServer))
            .catch(error => alert(error));

    }, []);

    function formatPrice(price: number | undefined): string {
        return price ? `$${price.toFixed(2)}` : '';
    }

    return (
        <div className="Products">
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>price</th>
                        <th>stock</th>
                        <th>image</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product =>
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{formatPrice(product.price)}</td>
                            <td>{product.stock}</td>
                            <td><img src={product.imageUrl} /></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Products;
