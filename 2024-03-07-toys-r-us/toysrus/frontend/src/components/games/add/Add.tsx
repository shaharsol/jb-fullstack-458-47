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

    const { register, handleSubmit } = useForm<Game>();

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

                <select defaultValue='' {...register('audienceId')}>
                    <option value=''>Please select audience...</option>
                    {audiences.map(audience => 
                        <option key={audience.id} value={audience.id}>
                            {audience.name}
                        </option>
                    )}
                </select>

                <label>Name:</label>
                <input type="text" {...register('name')} />

                <label>Description:</label>
                <input type="text" {...register('description')} />

                <label>Price:</label>
                <input type="number" step="0.01" {...register('price')} />

                <button>add</button>

            </form>
        </div>
    );
}

export default Add;
