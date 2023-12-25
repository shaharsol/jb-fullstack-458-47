import About from "../../about/about/About";
import Home from "../../home/home/Home";
import AddProduct from "../../products/addProduct/AddProduct";
import EditProduct from "../../products/editProduct/EditProduct";
import ProductDetails from "../../products/productDetails/ProductDetails";
import Products from "../../products/products/Products";
import Page404 from "../page404/Page404";
import { Routes, Route, Navigate } from 'react-router-dom';
function Routing(): JSX.Element {
    return (
        <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Navigate to="/" />} />
            {/* <Route path="/home" element={<Home />} /> */}

            <Route path="/products/details/:productId" element={<ProductDetails />} />

            <Route path="/products/new" element={<AddProduct />} />

            <Route path="/products/edit/:productId" element={<EditProduct />} />

            <Route path="/products" element={<Products />} />


            <Route path="/about" element={<About />} />

            <Route path="*" element={<Page404 />} />

        </Routes>

    );
}

export default Routing;
