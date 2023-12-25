import { NavLink } from "react-router-dom";
import Product from "../../../models/Product";
import productsService from "../../../services/Products";
import useTitle from "../../../utils/useTitle";
import ProductCard from "../productCard/ProductCard";
import "./Products.css";
import { useEffect, useState } from "react";
import notify from "../../../services/Notify";
import Spinner from "../../common/spinner/Spinner";
import { productsStore } from "../../../redux/ProductsState";

function ProductsList(): JSX.Element {

    useTitle('Northwind products');

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
            .catch(error => notify.error(error));

        const unsubscribe = productsStore.subscribe(() => {
            setProducts([...productsStore.getState().products])
        })

        return unsubscribe;

    }, []);

    return (

        <div className="ProductsList">
            {products.length === 0 && <Spinner />}
            {products.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
    );
}

export default ProductsList;
