import './Kitten.css';
import KittenImageSource from '../../../assets/images/kitten.jpg';

function Kitten(): JSX.Element {
    return (
        <div className="Kitten">
            <h1>Kitten</h1>
            <div>Cute Kitten:</div>
            <img src={KittenImageSource} />
            <br />
            <span>Price: $50</span>
        </div>
    )
}

export default Kitten;