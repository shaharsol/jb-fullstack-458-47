import About from "../../about/about/About";
import Home from "../../home/home/Home";
import Products from "../../products/products/Products";
import Page404 from "../page404/Page404";
import { Routes, Route, Navigate } from 'react-router-dom';
function Routing(): JSX.Element {
    return (
        <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Navigate to="/" />} />
            {/* <Route path="/home" element={<Home />} /> */}

            <Route path="/products" element={<Products />} />

            <Route path="/about" element={<About />} />

            <Route path="*" element={<Page404 />} />

        </Routes>

    );
}

export default Routing;
