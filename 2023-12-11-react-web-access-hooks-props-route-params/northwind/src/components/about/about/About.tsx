import useTitle from "../../../utils/useTitle";
import "./About.css";

function About(): JSX.Element {
    useTitle('About Northwind');

    return (
        <div className="About">
            about...
        </div>
    );
}

export default About;
