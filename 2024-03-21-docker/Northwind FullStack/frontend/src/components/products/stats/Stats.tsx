import { useEffect, useState } from "react";
import "./Stats.css";
import productsService from "../../../services/Products";
import notify from "../../../services/Notify";
import { productsStore } from "../../../redux/ProductsState";

function Stats(): JSX.Element {

    const [totalProducts, setTotalProducts] = useState<number>()
    const [totalPrice, setTotalPrice] = useState<number>()
    const [totalStock, setTotalStock] = useState<number>()

    useEffect(() => {
        setTotalProducts(productsStore.getState().products.length);
        setTotalPrice(productsStore.getState().products.reduce((acc, curr) => acc + (curr.price || 0), 0))
        setTotalStock(productsStore.getState().products.reduce((acc, curr) => acc + (curr.stock || 0), 0))

        const unsubscribe = productsStore.subscribe(() => {
            setTotalProducts(productsStore.getState().products.length);
            setTotalPrice(productsStore.getState().products.reduce((acc, curr) => acc + (curr.price || 0), 0))
            setTotalStock(productsStore.getState().products.reduce((acc, curr) => acc + (curr.stock || 0), 0))
        })

        return unsubscribe

    }, []);

    return (
        <div className="Stats">
            Total Products: {totalProducts} | Total price: {totalPrice} | Total stock: {totalStock}
        </div>
    );
}

export default Stats;
