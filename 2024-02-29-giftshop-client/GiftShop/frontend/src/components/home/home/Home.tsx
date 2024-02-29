import "./Home.css";
import GiftShopImageSource from '../../../assets/images/giftshop.png';

function Home(): JSX.Element {

    return (
        <div className="Home">
            <p>This is a wonderful online giftshop with very cheap merchendise from China</p>

            <img src={GiftShopImageSource}/>
        </div>
    );
}

export default Home;
