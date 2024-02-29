import { useEffect, useState } from "react";
import "./Add.css";
import audiencesService from "../../../services/Audiences";
import notify from "../../../services/Notify";
import Audience from "../../../models/Audience";
import { useForm } from "react-hook-form";
import Gift from "../../../models/Gift";
import giftsService from "../../../services/Gifts";
import { useNavigate } from "react-router-dom";

function Add(): JSX.Element {
    const [audiences, setAudiences] = useState<Audience[]>([]);

    const { register, handleSubmit, formState } = useForm<Gift>();

    useEffect(() => {
        audiencesService.getAll()
            .then(setAudiences)
            .catch(notify.error)
    }, []);

    const navigate = useNavigate();

    async function addGift(gift: Gift) {
        try {
            const addedGift = await giftsService.add(gift);
            notify.success(`added gift with id ${addedGift.id}`)
            navigate('/gifts');
        } catch (err) {
            notify.error(err);
        }
    }

    return (
        <div className="Add">
			<form onSubmit={handleSubmit(addGift)}>
                <select defaultValue='' {...register('audienceId')}>
                    <option disabled value=''>Please select Audience</option>
                    {audiences.map(audience => <option key={audience.id} value={audience.id}>{audience.name}</option>)}
                </select>
                <input type="text" placeholder="name" {...register('name', {
                    required: {
                        value: true,
                        message: 'gift name is a required field'
                    }
                })}/>
                <span className="error">{formState.errors.name?.message}</span>
                <input type="text" placeholder="description" {...register('description')}/>
                <input type="number" placeholder="price" {...register('price')}/>
                <input type="number" placeholder="discount" {...register('discount')}/>
                <button>Add Gift</button>
            </form>
        </div>
    );
}

export default Add;
