import { NavLink } from "react-router-dom";
import Product from "../../../models/Product";
import "./ProductCard.css";
import formatPrice from "../../../utils/formatPrice";

interface ProductCardProps {
    product: Product,
}

function ProductCard(props: ProductCardProps): JSX.Element {

    return (
        <div className="ProductCard">
            <div>
                {props.product.name}
                <br />
                price: {formatPrice(props.product.price)}
                <br />
                stock: {props.product.stock}
            </div>
            <div>
                <NavLink to={`/products/details/${props.product.id}`}>
                    <img src={props.product.imageUrl} />
                </NavLink>
            </div>
        </div>
    );
}

export default ProductCard;
