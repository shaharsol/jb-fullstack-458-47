import Add from "../../gifts/add/Add";
import Gifts from "../../gifts/gifts/Gifts";
import Home from "../../home/home/Home";
import Page404 from "../page404/Page404";
import { Routes, Route, Navigate } from 'react-router-dom';
function Routing(): JSX.Element {
    return (
        <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Navigate to="/" />} />

            <Route path="/gifts" element={<Gifts />} />
            <Route path="/gifts/add" element={<Add />} />

            <Route path="*" element={<Page404 />} />

        </Routes>

    );
}

export default Routing;
