import axios from "axios";
import Product from "../models/Product";
import appConfig from "../utils/AppConfig";


class Products {

    public async getAll(): Promise<Product[]> {
        // get the products from remote server
        const response = await axios.get<Product[]>(appConfig.productsUrl);

        // extract the data from the response
        const products = response.data;

        return products;
    }
}

// singleton
const products = new Products();
export default products;