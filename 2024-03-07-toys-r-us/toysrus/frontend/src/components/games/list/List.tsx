import { ChangeEvent, useEffect, useState } from "react";
import "./List.css";
import audienceService from "../../../services/Audience";
import gamesService from "../../../services/Game";
import notify from "../../../services/Notify";
import Audience from "../../../models/Audience";
import Game from "../../../models/Game";
import { useNavigate } from "react-router-dom";

function List(): JSX.Element {

    const [audiences, setAudiences] = useState<Audience[]>([]);
    const [games, setGames] = useState<Game[]>([]);
    const [maxPrice, setMaxPrice] = useState<number>(0);

    useEffect(() => {
        audienceService.getAll()
            .then(setAudiences)
            .catch(notify.error)
    }, []);

    const navigate = useNavigate();

    async function gamesByAudience(args: ChangeEvent<HTMLSelectElement>) {
        try {
            const audienceId = +args.target.value;
            const games = await gamesService.getAllForAudience(audienceId);
            setGames(games);
        } catch (err) {
            notify.error(err);
        }
    };

    async function gamesCheaperThan() {
        try {
            const games = await gamesService.getCheaperThan(maxPrice);
            setGames(games);
        } catch (err) {
            notify.error(err);
        }
    };

    function handleMaxPrice(args: ChangeEvent<HTMLInputElement>) {
        setMaxPrice(+args.target.value);
    }

    async function deleteGame(id: number | undefined) {
        if(!id) return;
        await gamesService.remove(id);
        notify.success('game was deleted');
        navigate('/games');
    }

    return (
        <div className="List">

            <select onChange={gamesByAudience} defaultValue=''>
                <option value=''>Please select audience...</option>
                {audiences.map(audience => 
                    <option key={audience.id} value={audience.id}>
                        {audience.name}
                    </option>
                )}
            </select>

            <br/>
            <br/>

            <input onChange={handleMaxPrice} type="number"/>
            <button onClick={gamesCheaperThan}>Games Cheaper Than</button>

            <br/>
            <br/>

            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>description</th>
                        <th>price</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {games.map(game => <tr key={game.id}>
                        <td>{game.name}</td>
                        <td>{game.description}</td>
                        <td>{game.price}</td>
                        <td><button onClick={() => {
                            deleteGame(game.id)
                        }}>delete</button></td>
                    </tr>)}
                </tbody>
            </table>
        </div>

        
    );
}

export default List;
