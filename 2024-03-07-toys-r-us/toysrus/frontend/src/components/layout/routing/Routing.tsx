import Home from "../../home/home/Home";
import Add from "../../games/add/Add";
import List from "../../games/list/List";
import Page404 from "../page404/Page404";
import { Routes, Route, Navigate } from 'react-router-dom';
function Routing(): JSX.Element {
    return (
        <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Navigate to="/" />} />

            <Route path="/games/" element={<List />} />
            <Route path="/games/add" element={<Add />} />
            <Route path="*" element={<Page404 />} />

        </Routes>

    );
}

export default Routing;
