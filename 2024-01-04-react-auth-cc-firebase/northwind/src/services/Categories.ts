import axios from "axios";
import appConfig from "../utils/AppConfig";
import Category from "../models/Category";
import { authStore } from "../redux/AuthState";

class Categories {
    public async getAll(): Promise<Category[]> {
        // I can delete these lines because i have interceptor now...
        // const token = authStore.getState().token;

        // const config = {
        //     headers: {
        //         Authorization: `Bearer ${token}`
        //     }
        // }

        const response = await axios.get<Category[]>(appConfig.categoriesUrl);
        const categories = response.data;
        return categories;

    }

    public async getOne(id: number): Promise<Category> {
        // If I didn't have interceptor, I would have needed to add authroization
        // header myself

        const response = await axios.get<Category>(appConfig.categoriesUrl + `/${id}`);
        const category = response.data;
        return category;
    }

}

const categories = new Categories();
export default categories;

