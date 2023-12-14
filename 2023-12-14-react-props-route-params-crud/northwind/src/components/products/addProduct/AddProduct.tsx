import { useForm } from "react-hook-form";
import "./AddProduct.css";
import Product from "../../../models/Product";

function AddProduct(): JSX.Element {

    const { register, handleSubmit } = useForm<Product>();

    function submitProductData(product: Product) {
        console.log(product);
    }

    return (
        <div className="AddProduct">
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit(submitProductData)}>

                <label>Name:</label>
                {/* <input type="text" name='name' id='3467' /> */}
                <input type="text" {...register('name')} />

                <label>Price:</label>
                <input type="number" step="0.01" {...register('price')} />

                <label>Stock:</label>
                <input type="number" {...register('stock')} />

                <label>Image:</label>
                <input type="file" accept="image/*" />

                <button>add</button>

            </form>
        </div>
    );
}

export default AddProduct;
