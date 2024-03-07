import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {

    return (
        <div className="Menu">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/games">Games</NavLink>
            <NavLink to="/games/add">Add Game</NavLink>
            <NavLink to="/about">About</NavLink>
        </div>
    );
}

export default Menu;
