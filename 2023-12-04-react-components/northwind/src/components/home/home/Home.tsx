import "./Home.css";
import ProductsImageSource from '../../../assets/images/products.jpg';
import Products2ImageSource from '../../../assets/images/products2.jpg';

function Home(): JSX.Element {

    const randomNumber = Math.floor(Math.random() * 2) + 1;

    return (
        <div className="Home">
            <p>welcome to Northwind Traders!</p>

            {/* {randomNumber === 1 ? <img src={ProductsImageSource} /> : <img src={Products2ImageSource} />} */}
            {/* <img src={randomNumber === 1 ? ProductsImageSource : Products2ImageSource} /> */}

            {randomNumber === 1 && <img src={ProductsImageSource} />}
            {randomNumber === 2 && <img src={Products2ImageSource} />}
        </div>
    );
}

export default Home;
