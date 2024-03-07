import { useEffect, useState } from "react";
import "./List.css";
import loremIpsumService from "../../../services/LoremIpsum";
import notify from "../../../services/Notify";
import LoremIpsum from "../../../models/LoremIpsum";

function List(): JSX.Element {

    const [loremIpsums, setLoremIpsums] = useState<LoremIpsum[]>([]);

    useEffect(() => {
        loremIpsumService.getAll()
            .then(setLoremIpsums)
            .catch(notify.error)
    }, []);

    return (
        <div className="Gifts">
            <br/>
            <br/>

            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        {/* <th>description</th>
                        <th>discount</th>
                        <th>price</th> */}
                    </tr>
                </thead>
                <tbody>
                    {loremIpsums.map(gift => <tr key={gift.id}>
                        <td>{gift.name}</td>
                        {/* <td>{gift.description}</td>
                        <td>{gift.discount}</td>
                        <td>{gift.price}</td> */}
                    </tr>)}
                </tbody>
            </table>
        </div>

        
    );
}

export default List;
