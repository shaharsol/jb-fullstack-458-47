import axios from "axios";
import Product from "../models/Product";
import appConfig from "../utils/AppConfig";
import { ProductsAction, ProductsActionType, productsStore } from "../redux/ProductsState";


class Products {

    public async getAll(): Promise<Product[]> {

        // get the products from redux
        let products = productsStore.getState().products;

        if (products.length === 0) {
            // get the products from remote server
            const response = await axios.get<Product[]>(appConfig.productsUrl);

            // const { data } = await axios.get<Product[]>(appConfig.productsUrl);
            // return data;

            // extract the data from the response
            products = response.data;

            // create an action to set the products into the state,
            // and set the action payload, to hold the products themselves
            const action: ProductsAction = {
                type: ProductsActionType.SetProducts,
                payload: products
            }

            // now all is left to do, is to send this action to redux
            productsStore.dispatch(action);
        }

        return products;
    }

    public async getOne(id: number): Promise<Product | undefined> {

        let products = productsStore.getState().products;

        let product = products.find(p => p.id === id)

        if (!product) {

            await this.getAll();

            products = productsStore.getState().products;

            product = products.find(p => p.id === id)

            // // get a product from remote server
            // const response = await axios.get<Product>(appConfig.productsUrl + `/${id}`);

            // // extract the data from the response
            // product = response.data;
        }

        return product;

    }

    public async addProduct(product: Product): Promise<Product> {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        const response = await axios.post<Product>(appConfig.productsUrl, product, config);

        const addedProduct = response.data;

        // create an AddProduct action for redux
        const action: ProductsAction = {
            type: ProductsActionType.AddProduct,
            payload: addedProduct
        }

        // perform the action on redux
        productsStore.dispatch(action);

        return addedProduct;

    }

    public async deleteProduct(id: number): Promise<void> {

        await axios.delete(appConfig.productsUrl + `/${id}`);

        // create a DeleteProduct action for redux
        const action: ProductsAction = {
            type: ProductsActionType.DeleteProduct,
            payload: id
        }

        // perform the action on redux
        productsStore.dispatch(action);

    }

    public async editProduct(product: Product): Promise<Product> {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        const response = await axios.put<Product>(appConfig.productsUrl + `/${product.id}`, product, config);

        const updatedProduct = response.data;

        // create an UpdateProduct action for redux
        const action: ProductsAction = {
            type: ProductsActionType.UpdateProduct,
            payload: updatedProduct
        }

        // perform the action on redux
        productsStore.dispatch(action);

        return updatedProduct;

    }

}

// singleton
const products = new Products();
export default products;