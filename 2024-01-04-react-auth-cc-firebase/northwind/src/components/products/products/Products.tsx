import { NavLink } from "react-router-dom";
import Product from "../../../models/Product";
import productsService from "../../../services/Products";
import useTitle from "../../../utils/useTitle";
import ProductCard from "../productCard/ProductCard";
import "./Products.css";
import { useEffect, useState } from "react";
import notify from "../../../services/Notify";
import Spinner from "../../common/spinner/Spinner";
import Stats from "../stats/Stats";
import ProductsList from "../list/Products";
import AddProduct from "../addProduct/AddProduct";

function Products(): JSX.Element {

    useTitle('Northwind products');

    return (

        <div className="Products">
            <div>
                <br />
                <Stats />
                <br />
                <ProductsList />
            </div>
            <aside>
                <AddProduct />
            </aside>
        </div>
    );
}

export default Products;
