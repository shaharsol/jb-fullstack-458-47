import { useEffect, useState } from "react";
import "./CategoriesList.css";
import Category from "../../../models/Category";
import categoriesService from "../../../services/Categories";
import notify from "../../../services/Notify";
import { useNavigate } from "react-router-dom";

function CategoriesList(): JSX.Element {

    const [categories, setCategories] = useState<Category[]>([]);

    const navigate = useNavigate();
    useEffect(() => {
        categoriesService.getAll()
            .then(categories => setCategories(categories))
            .catch(err => {
                notify.error(err);
                if (err.response.status === 401) {
                    navigate('/login')
                }
            })
    }, []);


    return (
        <div className="CategoriesList">
            <table>
                <tbody>
                    {categories.map(category =>
                        <tr>
                            <td>{category.name}</td>
                            <td>{category.description}</td>
                            <td><img src={category.imageUrl} /></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default CategoriesList;
