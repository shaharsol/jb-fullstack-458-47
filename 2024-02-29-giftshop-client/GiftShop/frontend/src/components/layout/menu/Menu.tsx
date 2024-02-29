import { NavLink } from "react-router-dom";
import "./Menu.css";
import { useEffect, useState } from "react";

function Menu(): JSX.Element {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);

    return (
        <div className="Menu">
            {/* <a href="/home">Home</a>
            <a href="/products">Products</a>
            <a href="/about">About</a> */}

            <NavLink to="/home">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
            {isUserLoggedIn && <NavLink to="/categories">Categories</NavLink>}
            <NavLink to="/about">About</NavLink>
        </div>
    );
}

export default Menu;
