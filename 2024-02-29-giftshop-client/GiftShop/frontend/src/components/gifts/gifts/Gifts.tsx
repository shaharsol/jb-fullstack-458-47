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

    useEffect(() => {
        audiencesService.getAll()
            .then(setAudiences)
            .catch(notify.error)
    }, []);

    async function displayGifts(args: ChangeEvent<HTMLSelectElement>) {
        try {
            const audienceId = +args.target.value;
            const gifts = await giftsService.getByAudience(audienceId);
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
                    </tr>
                </thead>
                <tbody>
                    {gifts.map(gift => <tr key={gift.id}>
                        <td>{gift.name}</td>
                        <td>{gift.description}</td>
                        <td>{gift.discount}</td>
                        <td>{gift.price}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>

        
    );
}

export default Gifts;
