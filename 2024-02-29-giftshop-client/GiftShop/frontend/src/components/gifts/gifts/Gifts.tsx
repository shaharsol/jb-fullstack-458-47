import { useEffect, useState } from "react";
import "./Gifts.css";
import audiencesService from "../../../services/Audiences";
import Audience from "../../../models/Audience";
import notify from "../../../services/Notify";

function Gifts(): JSX.Element {

    const [audiences, setAudiences] = useState<Audience[]>([]);

    useEffect(() => {
        audiencesService.getAll()
            .then(setAudiences)
            .catch(notify.error)
    }, []);

    return (
        <div className="Gifts">
            <select defaultValue=''>
                <option disabled value=''>Please select Audience</option>
                {audiences.map(audience => <option key={audience.id} value={audience.id}>{audience.name}</option>)}
            </select>
        </div>
    );
}

export default Gifts;
