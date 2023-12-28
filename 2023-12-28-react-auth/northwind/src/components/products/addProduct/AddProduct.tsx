import { useForm } from "react-hook-form";
import "./AddProduct.css";
import Product from "../../../models/Product";
import productsService from "../../../services/Products";
import { useNavigate } from "react-router-dom";
import notify from "../../../services/Notify";

function AddProduct(): JSX.Element {

    const { register, handleSubmit, setValue } = useForm<Product>();

    const navigate = useNavigate();

    /*

    this is a better way to model the products.

    baseProduct {
        name: string,
        price: number
        stock: number,
    }
    clientProduct extends baseProduct{
        file: File
    }

    serverProduct extends baseProduct{
        id: number,
        imageUrl: string
    }
    
    */

    async function submitProductData(product: Product) {
        // console.log(product);
        try {
            product.image = (product.image as unknown as FileList)[0];
            const addedProduct = await productsService.addProduct(product);
            // console.log(addedProduct);
            // alert(`added a new product with id ${addedProduct.id}`)
            notify.success(`added a new product with id ${addedProduct.id}`);
            // navigate(`/products/details/${addedProduct.id}`);
            // navigate('/products');
            setValue('name', '')
            setValue('price', undefined)
            setValue('stock', undefined)

        } catch (err) {
            // alert(err);
            notify.error(err);
        }
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
                <input type="file" accept="image/*" {...register('image')} />

                <button>add</button>

            </form>
        </div>
    );
}

export default AddProduct;
