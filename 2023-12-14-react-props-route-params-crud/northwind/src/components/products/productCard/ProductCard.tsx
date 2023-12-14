import Product from "../../../models/Product";
import "./ProductCard.css";

interface ProductCardProps {
    product: Product,
}

function ProductCard(props: ProductCardProps): JSX.Element {

    function formatPrice(price: number | undefined): string {
        return price ? `$${price.toFixed(2)}` : '';
    }

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
                <img src={props.product.imageUrl} />
            </div>
        </div>
    );
}

export default ProductCard;
