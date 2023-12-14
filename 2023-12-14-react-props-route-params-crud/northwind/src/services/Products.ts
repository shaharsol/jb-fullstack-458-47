import axios from "axios";
import Product from "../models/Product";
import appConfig from "../utils/AppConfig";


class Products {

    public async getAll(): Promise<Product[]> {
        // get the products from remote server
        const response = await axios.get<Product[]>(appConfig.productsUrl);

        // const { data } = await axios.get<Product[]>(appConfig.productsUrl);
        // return data;

        // extract the data from the response
        const products = response.data;

        return products;
    }

    public async getOne(id: number): Promise<Product> {
        // get a product from remote server
        const response = await axios.get<Product>(appConfig.productsUrl + `/${id}`);

        // extract the data from the response
        const product = response.data;

        return product;

    }
}

// singleton
const products = new Products();
export default products;