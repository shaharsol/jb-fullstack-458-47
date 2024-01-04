import "./Home.css";
import ProductsImageSource from '../../../assets/images/products.jpg';
import Products2ImageSource from '../../../assets/images/products2.jpg';
import { useEffect, useState } from "react";
import useTitle from "../../../utils/useTitle";
import Clock from "../clock/Clock";

function Home(): JSX.Element {

    // let's replace the following code with a custom hook
    // useEffect(() => {
    //     document.title = 'Northwind home';
    // }, [])
    useTitle('Northwind home');

    const randomNumber = Math.floor(Math.random() * 2) + 1;

    const desserts = [
        { id: 1, name: 'Pana Cota', price: 10 },
        { id: 2, name: 'Re-colad', price: 40 },
        { id: 3, name: 'Black Forest Cake', price: 30 },
        { id: 4, name: 'Baklava', price: 5 }
    ]

    function displaySale() {
        alert('%50 discount on Re-colad')
    }

    const arr = useState<string>('')
    const sale2Info = arr[0];
    const setSale2Info = arr[1];

    // let sale2Info = 'test...';
    function displaySale2() {
        setSale2Info('30% discount on all fresh fruits');
    }

    // const arr3 = useState<string>('')
    // const sale3Info = arr3[0];
    // const setSale3Info = arr3[1];
    const [sale3Info, setSale3Info] = useState<string>('')

    function displaySale3() {
        setSale3Info('20% discount on all chicken');
    }

    const [time, setTime] = useState<string>('');
    function displayTime() {
        const now = new Date();
        setTime(now.toLocaleTimeString());
    }

    useEffect(() => {
        setInterval(() => {
            console.log('displaying time')
            displayTime()
        }, 1000)
    }, [])

    return (
        <div className="Home">
            <p>welcome to Northwind Traders!</p>

            {/* {randomNumber === 1 ? <img src={ProductsImageSource} /> : <img src={Products2ImageSource} />} */}
            {/* <img src={randomNumber === 1 ? ProductsImageSource : Products2ImageSource} /> */}

            {randomNumber === 1 && <img src={ProductsImageSource} />}
            {randomNumber === 2 && <img src={Products2ImageSource} />}

            <hr />
            {desserts.map(dessert => <span key={dessert.id}>{dessert.name}: USD{dessert.price} | </span>)}
            <hr />

            <button onClick={displaySale}>Display Sale</button>
            <hr />

            <button onClick={displaySale2}>Display Sale2</button>
            <p>sale2: bar {sale2Info}</p>

            <hr />
            <button onClick={displaySale3}>Display Sale3</button>
            <p>sale2: bar {sale3Info}</p>

            <hr />
            <button onClick={displayTime}>Display Time</button>
            <p>time now is: {time}</p>

            <hr />
            <p>here is a class component:</p>
            <Clock name="Rolex" />

        </div>
    );
}

export default Home;
