import { useEffect, useState } from "react";
import "./CategoriesList.css";
import Category from "../../../models/Category";
import categoriesService from "../../../services/Categories";
import notify from "../../../services/Notify";

function CategoriesList(): JSX.Element {

    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        categoriesService.getAll()
            .then(categories => setCategories(categories))
            .catch(err => {
                notify.error(err);
            })
    }, []);


    return (
        <div className="CategoriesList">
            categories list...
            {categories.length}
        </div>
    );
}

export default CategoriesList;
