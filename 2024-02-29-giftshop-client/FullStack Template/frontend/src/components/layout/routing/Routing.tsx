import LoremIpsum from "../../lorem-ipsum/lorem-ipsum/LoremIpsum";
import Page404 from "../page404/Page404";
import { Routes, Route, Navigate } from 'react-router-dom';
function Routing(): JSX.Element {
    return (
        <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Navigate to="/" />} />

            <Route path="/lorem-ipsum/:loremIpsumId" element={<LoremIpsum />} />
            <Route path="*" element={<Page404 />} />

        </Routes>

    );
}

export default Routing;
