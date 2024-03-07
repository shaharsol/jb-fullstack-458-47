import { useForm } from "react-hook-form";
import "./Add.css";
import LoremIpsum from "../../../models/LoremIpsum";
import loremIpsumService from "../../../services/LoremIpsum";
import { useNavigate } from "react-router-dom";
import notify from "../../../services/Notify";

function Add(): JSX.Element {

    const { register, handleSubmit } = useForm<LoremIpsum>();

    const navigate = useNavigate();

    async function addLoremIpsum(loremIpsum: LoremIpsum) {
        try {
            const addedLoremIpsum = await loremIpsumService.add(loremIpsum);
            notify.success(`added a new loremIpsum with id ${addedLoremIpsum.id}`);
        } catch (err) {
            notify.error(err);
        }
    }

    return (
        <div className="AddProduct">
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit(addLoremIpsum)}>

                <label>Name:</label>
                <input type="text" {...register('name')} />

                {/* <label>Price:</label>
                <input type="number" step="0.01" {...register('price')} />

                <label>Stock:</label>
                <input type="number" {...register('stock')} />

                <label>Image:</label>
                <input type="file" accept="image/*" {...register('image')} /> */}

                <button>add</button>

            </form>
        </div>
    );
}

export default Add;
