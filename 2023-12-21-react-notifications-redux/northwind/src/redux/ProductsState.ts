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
export interface ProductsAction {
    type: ProductsActionType,
    payload: any // בעברית: מטען this is the specific data that is delivered with the action
}

// 4. Reducer ()
export function productsReducer(currentState = new ProductsState(), action: ProductsAction): ProductsState {
    const newState = { ...currentState };

    // .....
    switch (action.type) {
        case ProductsActionType.SetProducts: // payload here will be an array of products: Product[]
            newState.products = action.payload;
            break;
        case ProductsActionType.AddProduct: // payload here will be a single product: Product
            const singleProduct = action.payload;
            newState.products.push(singleProduct);
            break;

    }

    return newState;
}

// 5. store
export const productsStore = createStore(productsReducer);
