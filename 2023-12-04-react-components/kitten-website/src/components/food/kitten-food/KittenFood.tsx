import './KittenFood.css';
import KittenFoodImageSource from '../../../assets/images/kitten-food.jpg'

function KittenFood(): JSX.Element {
    return (
        <div className="KittenFood">
            <h2>Kitten Food</h2>
            <img src={KittenFoodImageSource} />
            <div>description: the best kitten food</div>
            <span>price: $50</span>
        </div>
    )
}

export default KittenFood;