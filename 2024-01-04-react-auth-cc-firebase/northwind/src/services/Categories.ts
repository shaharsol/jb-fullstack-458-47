import axios from "axios";
import appConfig from "../utils/AppConfig";
import Category from "../models/Category";
import { authStore } from "../redux/AuthState";

class Categories {
    public async getAll(): Promise<Category[]> {
        const token = authStore.getState().token;

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const response = await axios.get<Category[]>(appConfig.categoriesUrl, config);
        const categories = response.data;
        return categories;
    }
}

const categories = new Categories();
export default categories;

