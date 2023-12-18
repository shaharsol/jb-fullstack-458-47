import { useNavigate, useParams } from "react-router-dom";
import "./EditProduct.css";
import { useEffect } from "react";
import productsService from "../../../services/Products";
import { useForm } from "react-hook-form";
import Product from "../../../models/Product";

function EditProduct(): JSX.Element {

    const params = useParams();
    const productId = Number(params.productId);

    const { register, handleSubmit, setValue } = useForm<Product>();

    const navigate = useNavigate();

    useEffect(() => {
        productsService.getOne(productId)
            .then(productFromServer => {
                setValue('name', productFromServer.name);
                setValue('price', productFromServer.price);
                setValue('stock', productFromServer.stock);
            })
            .catch(err => alert(err.message))

    }, [])

    async function submitProductData(product: Product) {
        console.log(product);
        try {
            product.image = (product.image as unknown as FileList)[0];
            product.id = productId;
            const updatedProduct = await productsService.editProduct(product);
            alert(`updated a product with id ${updatedProduct.id}`)
            navigate(`/products/details/${updatedProduct.id}`);

        } catch (err) {
            alert(err);
        }
    }

    return (
        <div className="EditProduct">
            <h2>Edit Product</h2>
            <form onSubmit={handleSubmit(submitProductData)}>

                <label>Name:</label>
                {/* <input type="text" name='name' id='3467' /> */}
                <input type="text" {...register('name')} />

                <label>Price:</label>
                <input type="number" step="0.01" {...register('price')} />

                <label>Stock:</label>
                <input type="number" {...register('stock')} />

                <label>Image:</label>
                <input type="file" accept="image/*" {...register('image')} />

                <button>update</button>

            </form>

        </div>
    );
}

export default EditProduct;
