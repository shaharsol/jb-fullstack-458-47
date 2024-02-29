import { createStore } from "redux";
import Product from "../models/Product";

// 1. Global state for products
export class ProductsState {
    public products: Product[] = [];
}

// 2. Action Type
export enum ProductsActionType { // what types of actions do we want to enable on the data itself
    SetProducts = 'SetProducts',
    DeleteProduct = 'DeleteProduct',
    UpdateProduct = 'UpdateProduct',
    AddProduct = 'AddProduct',
}

// 3. Action Object
export type ProductPayload = Product[] | Product | number;
export interface ProductsAction {
    type: ProductsActionType,
    payload: ProductPayload // בעברית: מטען this is the specific data that is delivered with the action
}

// 4. Reducer ()
export function productsReducer(currentState = new ProductsState(), action: ProductsAction): ProductsState {
    const newState = { ...currentState }; // this is called cloning - שיכפול

    // .....
    switch (action.type) {
        case ProductsActionType.SetProducts: // payload here will be an array of products: Product[]
            newState.products = action.payload as Product[];
            break;
        case ProductsActionType.AddProduct: // payload here will be a single product: Product
            const singleProduct = action.payload as Product;
            newState.products.push(singleProduct);
            break;
        case ProductsActionType.DeleteProduct: // payload here will be product id: number
            const productId = action.payload as number;
            const indexToDelete = newState.products.findIndex(product => product.id === productId);
            if (indexToDelete !== -1) newState.products.splice(indexToDelete, 1);
            break;
        case ProductsActionType.UpdateProduct: // payload here will be a single product: Product
            const productToUpdate = action.payload as Product;
            const indexToUpdate = newState.products.findIndex(product => product.id === productToUpdate.id);
            if (indexToUpdate !== -1) newState.products[indexToUpdate] = productToUpdate;
            break;

    }

    return newState;
}

// 5. store
export const productsStore = createStore(productsReducer);
