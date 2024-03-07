import "./Home.css";
// if you have an image to display, this is how you would import it
import ToysrusImageSource from '../../../assets/images/toysrus.jpg';

function Home(): JSX.Element {

    return (
        <div className="Home">
            <p>welcome to Toys r us</p>

            <img src={ToysrusImageSource}/>

        </div>
    );
}

export default Home;
