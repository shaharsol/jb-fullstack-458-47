import { useNavigate, useParams } from "react-router-dom";
import "./ProductDetails.css";
import productsService from "../../../services/Products";
import { useEffect, useState } from "react";
import Product from "../../../models/Product";
import formatPrice from "../../../utils/formatPrice";
import { NavLink } from "react-router-dom";
import notify from "../../../services/Notify";
import Spinner from "../../common/spinner/Spinner";

function ProductDetails(): JSX.Element {

    const params = useParams();
    const productId = Number(params.productId);

    const [product, setProduct] = useState<Product>();

    useEffect(() => {
        productsService.getOne(productId)
            .then(productFromServer => setProduct(productFromServer))
            .catch(err => notify.error(err))

    }, [])

    const navigate = useNavigate();

    async function deleteThis(): Promise<void> {
        if (window.confirm('are you sure you want to delete this product?')) {
            try {
                await productsService.deleteProduct(productId);
                notify.success('this product has been deleted');
                navigate('/products');
            } catch (err) {
                notify.error(err)
            }
        }
    }

    if (!product) {
        return (
            <Spinner />
        )
    }

    return (
        <div className="ProductDetails">
            <h2>Product Details</h2>

            <h3>Name: {product?.name}</h3>
            <h3>Price: {formatPrice(product?.price)}</h3>
            <h3>Stock: {product?.stock}</h3>

            <img src={product?.imageUrl} />

            <br /><br />

            <NavLink to='/products'>back</NavLink>
            <span> | </span>
            <NavLink to={`/products/edit/${productId}`}>update</NavLink>
            <span> | </span>
            <NavLink to='#' onClick={deleteThis}>delete</NavLink>
        </div>
    );
}

export default ProductDetails;
