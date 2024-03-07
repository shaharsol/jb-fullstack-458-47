import { useForm } from "react-hook-form";
import "./Add.css";
import Game from "../../../models/Game";
import gamesService from "../../../services/Game";
import audienceService from "../../../services/Audience";
import { useNavigate } from "react-router-dom";
import notify from "../../../services/Notify";
import { useEffect, useState } from "react";
import Audience from "../../../models/Audience";

function Add(): JSX.Element {

    const { register, handleSubmit, formState } = useForm<Game>();

    const navigate = useNavigate();
    const [audiences, setAudiences] = useState<Audience[]>([]);

    useEffect(() => {
        audienceService.getAll()
            .then(setAudiences)
            .catch(notify.error)
    }, []);

    async function addGame(game: Game) {
        try {
            const addedGame = await gamesService.add(game);
            notify.success(`added a new game with id ${addedGame.id}`);
            navigate('/games');
        } catch (err) {
            notify.error(err);
        }
    }

    return (
        <div className="AddProduct">
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit(addGame)}>

                <select defaultValue='' {...register('audienceId', {
                    required: {
                        value: true,
                        message: 'audience is required'
                    }
                })}>
                    <option value=''>Please select audience...</option>
                    {audiences.map(audience => 
                        <option key={audience.id} value={audience.id}>
                            {audience.name}
                        </option>
                    )}
                </select>
                <span>{formState.errors.audienceId?.message}</span>

                <label>Name:</label>
                <input type="text" {...register('name', {
                    required: {
                        value: true,
                        message: 'name is required'
                    }
                })} />
                <span>{formState.errors.name?.message}</span>

                <label>Description:</label>
                <input type="text" {...register('description', {
                    required: {
                        value: true,
                        message: 'description is required'
                    }
                })} />
                <span>{formState.errors.description?.message}</span>


                <label>Price:</label>
                <input type="number" step="0.01" {...register('price', {
                    required: {
                        value: true,
                        message: 'name is required'
                    },
                    min: {
                        value: 0,
                        message: 'please enter a positive sum',
                    }
                })} />
                <span>{formState.errors.price?.message}</span>

                <button>add</button>

            </form>
        </div>
    );
}

export default Add;
