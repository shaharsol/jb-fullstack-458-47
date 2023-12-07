import About from "../../about/about/About";
import Home from "../../home/home/Home";
import Products from "../../products/products/Products";
import Page404 from "../page404/Page404";
import "./Routing.css";
import { Routes, Route, Navigate } from 'react-router-dom';
function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>

                <Route path="/home" element={<Home />} />
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="/" element={<Navigate to="/home" />} />

                <Route path="/products" element={<Products />} />

                <Route path="/about" element={<About />} />

                <Route path="*" element={<Page404 />} />

            </Routes>

        </div>
    );
}

export default Routing;
