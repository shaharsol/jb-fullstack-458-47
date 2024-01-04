import Login from "../../auth/login/Login";
import About from "../../about/about/About";
import Signup from "../../auth/signup/Signup";
import Home from "../../home/home/Home";
import AddProduct from "../../products/addProduct/AddProduct";
import EditProduct from "../../products/editProduct/EditProduct";
import ProductDetails from "../../products/productDetails/ProductDetails";
import Products from "../../products/products/Products";
import Page404 from "../page404/Page404";
import { Routes, Route, Navigate } from 'react-router-dom';
import CategoriesList from "../../categories/list/CategoriesList";
import Details from "../../categories/details/Details";
function Routing(): JSX.Element {
    return (
        <Routes>

            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />



            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Navigate to="/" />} />
            {/* <Route path="/home" element={<Home />} /> */}

            <Route path="/products/details/:productId" element={<ProductDetails />} />
            <Route path="/categories/details/:categoryId" element={<Details />} />

            <Route path="/products/new" element={<AddProduct />} />

            <Route path="/products/edit/:productId" element={<EditProduct />} />

            <Route path="/products" element={<Products />} />

            <Route path="/categories" element={<CategoriesList />} />

            <Route path="/about" element={<About />} />

            <Route path="*" element={<Page404 />} />

        </Routes>

    );
}

export default Routing;
