import { useEffect, useState } from "react";
import "./Stats.css";
import productsService from "../../../services/Products";
import notify from "../../../services/Notify";

function Stats(): JSX.Element {

    const [totalProducts, setTotalProducts] = useState<number>()
    const [totalPrice, setTotalPrice] = useState<number>()
    const [totalStock, setTotalStock] = useState<number>()

    useEffect(() => {
        productsService.getAll()
            .then(products => {
                setTotalProducts(products.length);
                setTotalPrice(products.reduce((acc, curr) => acc + (curr.price || 0), 0))
                setTotalStock(products.reduce((acc, curr) => acc + (curr.stock || 0), 0))
            })
            .catch(error => notify.error(error));

    }, []);

    return (
        <div className="Stats">
            Total Products: {totalProducts} | Total price: {totalPrice} | Total stock: {totalStock}
        </div>
    );
}

export default Stats;
