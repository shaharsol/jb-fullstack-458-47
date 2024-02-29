import { ChangeEvent, useEffect, useState } from "react";
import "./Gifts.css";
import audiencesService from "../../../services/Audiences";
import Audience from "../../../models/Audience";
import notify from "../../../services/Notify";
import Gift from "../../../models/Gift";
import giftsService from "../../../services/Gifts";

function Gifts(): JSX.Element {

    const [audiences, setAudiences] = useState<Audience[]>([]);
    const [gifts, setGifts] = useState<Gift[]>([]);
    const [currentAudience, setCurrentAudience] =useState<number>(0);

    useEffect(() => {
        audiencesService.getAll()
            .then(setAudiences)
            .catch(notify.error)
    }, []);

    async function displayGifts(args: ChangeEvent<HTMLSelectElement>) {
        try {
            const audienceId = +args.target.value;
            setCurrentAudience(audienceId);
            const gifts = await giftsService.getByAudience(audienceId);
            setGifts(gifts);
        } catch (err) {
            notify.error(err)
        }
    }

    async function deleteGift(id: number | undefined) {
        if (!id) return;
        try {
            await giftsService.remove(id);
            const gifts = await giftsService.getByAudience(currentAudience);
            setGifts(gifts);
        } catch (err) {
            notify.error(err)
        }
    }


    return (
        <div className="Gifts">
            <select defaultValue='' onChange={displayGifts}>
                <option disabled value=''>Please select Audience</option>
                {audiences.map(audience => <option key={audience.id} value={audience.id}>{audience.name}</option>)}
            </select>

            <br/>
            <br/>

            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>description</th>
                        <th>discount</th>
                        <th>price</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {gifts.map(gift => <tr key={gift.id}>
                        <td>{gift.name}</td>
                        <td>{gift.description}</td>
                        <td>{gift.discount}</td>
                        <td>{gift.price}</td>
                        <td><button onClick={() => deleteGift(gift.id)}>delete</button></td>
                    </tr>)}
                </tbody>
            </table>
        </div>

        
    );
}

export default Gifts;
