import { useEffect, useState } from "react";
import "./Details.css";
import Category from "../../../models/Category";
import categoriesService from "../../../services/Categories";
import { useParams } from "react-router-dom";
import notify from "../../../services/Notify";

function Details(): JSX.Element {

    const params = useParams();
    const categoryId = Number(params.categoryId);

    const [category, setCategory] = useState<Category>();

    useEffect(() => {
        categoriesService.getOne(categoryId)
            .then(setCategory)
            .catch(err => {
                notify.error(err);
            })
    }, [])

    return (
        <div className="CategoryDetails">
            <div>
                {category?.name}
            </div>
            <div>
                {category?.description}
            </div>
            <div>
                <img src={category?.imageUrl} />
            </div>
        </div>
    );
}

export default Details;
